'use client';
import Link from 'next/link';
import { Heart, Plus } from 'lucide-react';
import { useApp } from './providers';
import type { Product } from '@/lib/data';
export function ProductCard({ product, compact=false }: { product: Product; compact?: boolean }) {
 const { addToCart, favorites, toggleFavorite } = useApp();
 const liked=favorites.includes(product.id);
 const discount=product.oldPrice ? Math.round((1-product.price/product.oldPrice)*100) : 0;
 return <article className="product-card">
  <div className="product-visual">
   <Link href={`/product/${product.slug}`} className="product-image-link"><img src={product.image} alt={product.name} className="product-image" loading="lazy" onError={e=>{e.currentTarget.src='/watch-fallback.svg'}}/><div className="image-shine"/></Link>
   {product.badge && <span className="product-badge">{product.badge}</span>}
   <button className={`heart-button ${liked?'liked':''}`} onClick={()=>toggleFavorite(product.id)} aria-label="Wishlist"><Heart size={17} fill={liked?'currentColor':'none'}/></button>
   {discount>0 && <span className="discount-chip">-{discount}%</span>}
  </div>
  <div className="product-info">
   <div className="product-rating"><span>{product.gender}</span><span>·</span><span>{product.stock > 5 ? "In stock" : "Limited stock"}</span></div>
   <Link href={`/product/${product.slug}`}><h3>{product.name}</h3></Link>
   {!compact && <p>{product.description}</p>}
   <div className="product-bottom"><div><strong>Rs. {product.price.toLocaleString()}</strong>{product.oldPrice&&<del>Rs. {product.oldPrice.toLocaleString()}</del>}</div><button className="add-button" onClick={()=>addToCart(product)} aria-label="Add to bag"><Plus/></button></div>
  </div>
 </article>;
}
