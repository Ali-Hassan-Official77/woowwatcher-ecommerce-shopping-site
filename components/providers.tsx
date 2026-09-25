'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Product } from '@/lib/data';

type CartItem = Product & { quantity: number };
type Order = { id: string; status: string; createdAt: string; eta: string; total: number; items: CartItem[]; customer: { name: string; phone: string; address: string } };
type AppContextValue = {
  cart: CartItem[]; favorites: string[]; orders: Order[]; cartCount: number; subtotal: number;
  theme: 'light' | 'dark'; toast: string | null;
  addToCart: (product: Product) => void; removeFromCart: (id: string) => void; setQuantity: (id: string, q: number) => void;
  toggleFavorite: (id: string) => void; clearCart: () => void; saveOrder: (order: Order) => void;
  toggleTheme: () => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    try {
      setCart(JSON.parse(localStorage.getItem('wow-cart') || '[]'));
      setFavorites(JSON.parse(localStorage.getItem('wow-favorites') || '[]'));
      setOrders(JSON.parse(localStorage.getItem('wow-orders') || '[]'));
      const saved = localStorage.getItem('wow-theme') as 'light' | 'dark' | null;
      if (saved) setTheme(saved);
    } catch {}
  }, []);

  useEffect(() => { localStorage.setItem('wow-cart', JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem('wow-favorites', JSON.stringify(favorites)); }, [favorites]);
  useEffect(() => { localStorage.setItem('wow-orders', JSON.stringify(orders)); }, [orders]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('wow-theme', theme);
  }, [theme]);
  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 2400);
    return () => window.clearTimeout(t);
  }, [toast]);

  const value = useMemo<AppContextValue>(() => ({
    cart, favorites, orders, theme, toast,
    cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    addToCart: (product) => {
      setCart((current) => {
        const found = current.find((item) => item.id === product.id);
        return found ? current.map((item) => item.id === product.id ? { ...item, quantity: Math.min(20, item.quantity + 1) } : item) : [...current, { ...product, quantity: 1 }];
      });
      setToast(`${product.name} added to your bag`);
    },
    removeFromCart: (id) => setCart((current) => current.filter((item) => item.id !== id)),
    setQuantity: (id, quantity) => setCart((current) => quantity <= 0 ? current.filter((item) => item.id !== id) : current.map((item) => item.id === id ? { ...item, quantity: Math.min(20, quantity) } : item)),
    toggleFavorite: (id) => {
      setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
      setToast(favorites.includes(id) ? 'Removed from wishlist' : 'Saved to wishlist');
    },
    clearCart: () => setCart([]),
    saveOrder: (order) => setOrders((current) => [order, ...current]),
    toggleTheme: () => setTheme((current) => current === 'light' ? 'dark' : 'light'),
  }), [cart, favorites, orders, theme, toast]);

  return <AppContext.Provider value={value}>{children}{toast && <div className="toast" role="status">{toast}</div>}</AppContext.Provider>;
}

export function useApp() {
  const value = useContext(AppContext);
  if (!value) throw new Error('useApp must be used inside AppProvider');
  return value;
}
