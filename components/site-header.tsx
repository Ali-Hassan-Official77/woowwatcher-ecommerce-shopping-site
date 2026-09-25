'use client';
import Link from 'next/link';
import { Heart, Menu, Moon, Search, ShoppingBag, Sun, UserRound, X } from 'lucide-react';
import { useState } from 'react';
import { useApp } from './providers';

export function Logo() {
  return <Link href="/" className="brand" aria-label="WOOWWatches home">
    <img src="/logo.svg" alt="" width="42" height="42" /><span>WOOW<span>Watches</span></span>
  </Link>;
}
export function SiteHeader() {
  const { cartCount, favorites, theme, toggleTheme } = useApp();
  const [open, setOpen] = useState(false);
  const nav = [['Men', '/menu?category=men'], ['Women', '/menu?category=women'], ['Smart', '/menu?category=smart'], ['Clocks', '/menu?category=wall'], ['Mosque', '/menu?category=mosque'], ['Sale', '/menu?sale=1']];
  return <header className="site-header">
    <div className="header-top"><span>RAWALPINDI’S WATCH & CLOCK EDIT</span><span>Cash on Delivery · Saddar, Rawalpindi</span><span>ahmeddaniyanoffical44@wowwwatches.pk</span></div>
    <div className="header-inner">
      <button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/> : <Menu/>}</button>
      <Logo />
      <nav className="desktop-nav">{nav.map(([label, href]) => <Link key={label} href={href}>{label}{label === 'Sale' && <i className="nav-dot" />}</Link>)}</nav>
      <div className="header-actions">
        <Link href="/menu" aria-label="Search"><Search/></Link>
        <button onClick={toggleTheme} aria-label="Toggle dark mode">{theme === 'light' ? <Moon/> : <Sun/>}</button>
        <Link href="/account" className="header-count" aria-label="Account"><UserRound/><span>{favorites.length}</span></Link>
        <Link href="/cart" className="header-count bag-link" aria-label="Shopping bag"><ShoppingBag/><span>{cartCount}</span></Link>
      </div>
    </div>
    {open && <div className="mobile-panel">{nav.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link href="/account" onClick={() => setOpen(false)}>Account</Link><Link href="/cart" onClick={() => setOpen(false)}>Bag · {cartCount}</Link></div>}
  </header>;
}
export function MobileNav() { return null; }
export function DeliveryBar() { return <div className="service-strip"><span><b>Free delivery</b> on selected local orders</span><span>7-day exchange window on eligible items</span><span>Need help? <b>ahmeddaniyanoffical44@wowwwatches.pk</b></span></div>; }
