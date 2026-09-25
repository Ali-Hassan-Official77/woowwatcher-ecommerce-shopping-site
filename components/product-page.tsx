'use client';
import Link from 'next/link';
import { ArrowLeft, Heart, Minus, Plus, ShieldCheck, ShoppingBag, Truck } from 'lucide-react';
import { useState } from 'react';
import { findProduct } from '@/lib/data';
import { useApp } from './providers';
import { SiteHeader } from './site-header';
export function ProductPage({slug}:{slug:string}){
 const p=findProduct(slug); const {addToCart,favorites,toggleFavorite}=useApp(); const [qty,setQty]=useState(1);
 if(!p)return <main><SiteHeader/><div className="empty-state page-empty"><h1>Timepiece not found.</h1><Link href="/menu" className="primary-button">Back to shop</Link></div></main>;
 const liked=favorites.includes(p.id); const discount=p.oldPrice?Math.round((1-p.price/p.oldPrice)*100):0;
 return <main><SiteHeader/><div className="page-shell product-page"><Link href="/menu" className="back-link"><ArrowLeft/> Back to collection</Link><div className="product-detail"><div className="detail-visual"><img src={p.image} alt={p.name} onError={e=>{e.currentTarget.src="/watch-fallback.svg"}}/><div className="detail-label">{p.badge||'WOOW EDIT'}</div></div><div className="detail-copy"><div className="product-rating"><b>{p.gender}</b><span>·</span><span>{p.stock > 5 ? "In stock" : "Limited stock"}</span></div><span className="detail-category">{p.gender} · {p.category}</span><h1>{p.name}</h1><p className="detail-description">{p.description}</p><div className="detail-price"><strong>Rs. {p.price.toLocaleString()}</strong>{p.oldPrice&&<del>Rs. {p.oldPrice.toLocaleString()}</del>}{discount>0&&<span>-{discount}%</span>}</div><div className="stock-line"><i/> {p.stock>5?'In stock':'Limited stock'} · {p.stock} available</div><div className="details-list"><span>PRODUCT DETAILS</span>{p.details.map(x=><div key={x}>✓ {x}</div>)}</div><div className="detail-actions"><div className="quantity"><button onClick={()=>setQty(v=>Math.max(1,v-1))}><Minus/></button><b>{qty}</b><button onClick={()=>setQty(v=>Math.min(20,v+1))}><Plus/></button></div><button className="primary-button detail-cart-button" onClick={()=>{for(let i=0;i<qty;i++)addToCart(p)}}><ShoppingBag/> Add to bag · Rs. {(p.price*qty).toLocaleString()}</button><button className={`heart-button detail-favorite ${liked?'liked':''}`} onClick={()=>toggleFavorite(p.id)}><Heart fill={liked?'currentColor':'none'}/></button></div><div className="assurance-row"><span><Truck/> Local delivery</span><span><ShieldCheck/> Clear pricing</span><span>↺ Eligible exchange</span></div></div></div></div></main>;
}
