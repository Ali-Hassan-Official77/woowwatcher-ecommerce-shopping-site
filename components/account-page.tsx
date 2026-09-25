'use client';
import Link from 'next/link';
import { Heart, Package, UserRound } from 'lucide-react';
import { products } from '@/lib/data';
import { useApp } from './providers';
import { ProductCard } from './product-card';
import { SiteHeader } from './site-header';
export function AccountPage(){const {favorites,orders}=useApp();const liked=products.filter(p=>favorites.includes(p.id));return <main><SiteHeader/><div className="page-shell inner-page"><section className="account-hero"><div className="profile-avatar"><UserRound/></div><div><span className="section-kicker">WOOW ACCOUNT</span><h1>Your saved time.</h1><p>Wishlist favourites and order history live here on this device.</p></div></section><div className="account-stats"><div><Package/><strong>{orders.length}</strong><span>Orders</span></div><div><Heart/><strong>{favorites.length}</strong><span>Wishlist</span></div><div><span className="stat-word">PKR</span><strong>COD</strong><span>Payment</span></div></div><section className="section favorites-section"><div className="section-heading"><div><span className="section-kicker">YOUR WISHLIST</span><h2>Pieces you saved.</h2></div><Link href="/menu">Browse more →</Link></div>{liked.length?<div className="product-grid">{liked.map(p=><ProductCard key={p.id} product={p}/>)}</div>:<div className="empty-state small"><Heart/><h2>Your wishlist is quiet.</h2><p>Save a watch or clock with the heart icon and it will appear here.</p><Link href="/menu" className="primary-button">Explore collection</Link></div>}</section></div></main>}
