'use client';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Clock3, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { offers } from '@/lib/data';

const slides = [
 {eyebrow:'THE WOOW EDIT · 01', title:'Time,\nstyled your way.', copy:'Premium-looking watches, clocks and giftable pieces — selected for everyday life in Rawalpindi.', image:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1500&q=92', cta:'Shop watches', href:'/menu?category=men'},
 {eyebrow:'THE WOOW EDIT · 02', title:'A better\nsecond look.', copy:'Make the moment count with refined watches for men, women, boys and girls.', image:'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=1500&q=92', cta:'Explore women', href:'/menu?category=women'},
 {eyebrow:'THE WOOW EDIT · 03', title:'Home has\na timepiece.', copy:'Wall clocks, desk clocks and mosque displays to finish the spaces that matter.', image:'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1500&q=92', cta:'Shop clocks', href:'/menu?category=wall'},
];
export default function Hero() {
 const [active,setActive]=useState(0);
 useEffect(()=>{const t=setInterval(()=>setActive(v=>(v+1)%slides.length),6500);return()=>clearInterval(t)},[]);
 const s=slides[active];
 return <section className="hero">
   <div className="hero-media" style={{backgroundImage:`url(${s.image})`}}/><div className="hero-overlay"/>
   <div className="hero-content">
    <div className="hero-eyebrow"><span className="live-dot"/>{s.eyebrow}</div>
    <div className="hero-counter"><span>0{active+1}</span><i/><span>0{slides.length}</span></div>
    <h1>{s.title.split('\n').map((x,i)=><span key={x}>{x}{i===0&&<br/>}</span>)}</h1>
    <p>{s.copy}</p>
    <div className="hero-actions"><Link href={s.href} className="primary-button">{s.cta}<ArrowRight/></Link><Link href="/menu?sale=1" className="ghost-button"><Sparkles/> Live offers</Link></div>
    <div className="hero-meta"><span><Clock3/> Fast local response</span><span>Curated in Saddar, Rawalpindi</span></div>
   </div>
   <div className="hero-sale">
    <div className="sale-orbit">UP TO<br/><b>20%</b><small>OFF</small></div><div><span>RUNNING NOW</span><strong>{offers[active%offers.length].title}</strong><p>{offers[active%offers.length].copy}</p><Link href="/menu?sale=1">Shop offer →</Link></div>
   </div>
   <button className="hero-arrow left" onClick={()=>setActive((active-1+slides.length)%slides.length)}><ChevronLeft/></button><button className="hero-arrow right" onClick={()=>setActive((active+1)%slides.length)}><ChevronRight/></button>
   <div className="hero-dots">{slides.map((_,i)=><button key={i} className={i===active?'active':''} onClick={()=>setActive(i)} aria-label={`Slide ${i+1}`}/>)}</div>
 </section>;
}
