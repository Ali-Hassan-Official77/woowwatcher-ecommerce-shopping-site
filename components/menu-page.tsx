'use client';
import { useEffect, useMemo, useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { categories, products } from '@/lib/data';
import { ProductCard } from './product-card';
import { SiteHeader } from './site-header';
export function MenuPage(){
 const [query,setQuery]=useState(''); const [category,setCategory]=useState('all'); const [sale,setSale]=useState(false); const [sort,setSort]=useState('featured');
 useEffect(()=>{const params=new URLSearchParams(window.location.search); const c=params.get('category'); if(c&&categories.some(x=>x.id===c))setCategory(c); if(params.get('sale')==='1')setSale(true)},[]);
 const filtered=useMemo(()=>products.filter(p=>(category==='all'||p.category===category)&&(!sale||p.sale)&&(!query||`${p.name} ${p.description} ${p.gender}`.toLowerCase().includes(query.toLowerCase()))).sort((a,b)=>sort==='price-low'?a.price-b.price:sort==='price-high'?b.price-a.price:(Number(b.featured)-Number(a.featured))),[query,category,sale,sort]);
 return <main><SiteHeader/><div className="page-shell shop-page"><div className="shop-hero"><span className="section-kicker">THE WOOW CATALOGUE / 2026</span><h1>Find your<br/><em>timepiece.</em></h1><p>Wear it. Gift it. Put it on the wall. Explore watches and clocks selected for every kind of space and style.</p></div>
 <div className="shop-toolbar"><div className="search-box"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search watches, clocks, styles…"/>{query&&<button onClick={()=>setQuery('')}><X/></button>}</div><div className="filter-row"><button className={category==='all'?'active':''} onClick={()=>setCategory('all')}>All</button>{categories.map(c=><button key={c.id} className={category===c.id?'active':''} onClick={()=>setCategory(c.id)}>{c.name}</button>)}<button className={sale?'active sale-filter':''} onClick={()=>setSale(!sale)}>Sale</button></div><div className="sort"><SlidersHorizontal/><select value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select></div></div>
 <div className="catalog-head"><span>{filtered.length} products</span><b>{sale?'Current offers':'All collections'}</b></div>{filtered.length?<div className="product-grid catalog-grid">{filtered.map(p=><ProductCard key={p.id} product={p}/>)}</div>:<div className="empty-state"><h2>No matching timepieces.</h2><p>Try another search or reset the collection filters.</p><button className="primary-button" onClick={()=>{setQuery('');setCategory('all');setSale(false)}}>Reset filters</button></div>}</div></main>;
}
