'use client';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BadgePercent, CheckCircle2, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { categories, products, offers } from '@/lib/data';
import { ProductCard } from './product-card';
import Hero from './hero';
import { DeliveryBar, SiteHeader } from './site-header';

export function HomePage() {
 const featured=products.filter(p=>p.featured).slice(0,4);
 return <main><SiteHeader/><DeliveryBar/><Hero/>
  <section className="ticker"><div>{['MEN’S WATCHES','WOMEN’S WATCHES','SMART WATCHES','COUPLE SETS','MOSQUE CLOCKS','WALL CLOCKS','DESK CLOCKS','GIFT EDIT'].map((x,i)=><span key={i}>✦ {x}</span>)}</div></section>
  <div className="page-shell">
   <section className="section intro-section"><div><span className="section-kicker">THE COLLECTION / 2026</span><h2>Something for every<br/><em>kind of time.</em></h2></div><p>From a clean everyday watch to a statement wall clock, WOOWWatches brings together wearable timepieces and practical clocks with a premium shopping experience.</p></section>
   <section className="section"><div className="section-heading"><div><span className="section-kicker">01 / SHOP BY CATEGORY</span><h2>Find your timepiece.</h2></div><Link href="/menu">All collections <ArrowUpRight/></Link></div><div className="category-grid">{categories.slice(0,6).map((c,i)=><Link className="category-card" href={`/menu?category=${c.id}`} key={c.id}><img src={c.image} alt={c.name}/><div className="category-shade"/><div className="category-number">0{i+1}</div><div className="category-copy"><span>{c.eyebrow}</span><h3>{c.name}</h3><p>{c.description}</p></div><ArrowUpRight className="category-arrow"/></Link>)}</div></section>
   <section className="section dark-panel"><div className="section-heading"><div><span className="section-kicker">02 / THE CURRENT EDIT</span><h2>Watches worth a closer look.</h2></div><Link href="/menu">Shop all <ArrowRight/></Link></div><div className="product-grid">{featured.map(p=><ProductCard key={p.id} product={p}/>)}</div></section>
   <section className="offer-grid">{offers.map((o,i)=><Link href="/menu?sale=1" className="offer-card" key={o.title}><span>0{i+1} / OFFER</span><BadgePercent/><h3>{o.title}</h3><p>{o.copy}</p><b>{o.code} · Shop now →</b></Link>)}</section>
   <section className="trust-grid"><div><Truck/><h3>Local-first service</h3><p>Built around customers shopping from Saddar, Rawalpindi and nearby areas.</p></div><div><ShieldCheck/><h3>Clear product details</h3><p>Prices, stock status and product specifications are shown before checkout.</p></div><div><RotateCcw/><h3>Exchange-minded</h3><p>Eligible products can be handled through a clear exchange request process.</p></div><div><CheckCircle2/><h3>Simple COD checkout</h3><p>Place an order with your contact and delivery details without a forced online payment.</p></div></section>
   <section className="location-panel" id="location"><div><span className="section-kicker">WOOWWATCHES / RAWALPINDI</span><h2>Local feel.<br/><em>Premium finish.</em></h2><p>Based in Saddar, Rawalpindi. For product availability, order questions or local coordination, contact the WOOWWatches team.</p><a href="mailto:ahmeddaniyanoffical44@wowwwatches.pk">ahmeddaniyanoffical44@wowwwatches.pk</a></div><div className="location-card"><span>STORE NOTE</span><strong>Saddar</strong><b>Rawalpindi, Punjab</b><small>Pakistan</small></div></section>
  </div><Footer/>
 </main>;
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            WOOW<span>Watches</span>
          </Link>

          <p>
            Timepieces and clocks, selected for everyday life with a
            premium local shopping experience.
          </p>

          <div className="footer-location">
            <span className="footer-location-dot" />
            <span>Saddar, Rawalpindi, Punjab, Pakistan</span>
          </div>
        </div>

        <div className="footer-column">
          <b>Shop</b>
          <Link href="/menu?category=men">Men&apos;s Watches</Link>
          <Link href="/menu?category=women">Women&apos;s Watches</Link>
          <Link href="/menu?category=smart">Smart Watches</Link>
          <Link href="/menu?category=boys">Boys Watches</Link>
          <Link href="/menu?category=girls">Girls Watches</Link>
          <Link href="/menu?category=wall">Clocks</Link>
        </div>

        <div className="footer-column">
          <b>Customer</b>
          <Link href="/menu?sale=1">Offers & Sale</Link>
          <Link href="/cart">Shopping Bag</Link>
          <Link href="/checkout">Checkout</Link>
          <Link href="/orders">Order Tracking</Link>
          <Link href="/account">My Account</Link>
        </div>

        <div className="footer-column footer-contact">
          <b>Contact</b>

          <span>Saddar, Rawalpindi</span>
          <span>Punjab, Pakistan</span>

          <a href="mailto:ahmeddaniyanoffical44@wowwwatches.pk">
            ahmeddaniyanoffical44@wowwwatches.pk
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 WOOWWatches. All rights reserved.</span>

        <span className="footer-powered">
          Powered by{" "}
          <a
            href="https://silverloft.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            Silver Loft
          </a>
        </span>

        <span>Premium timepieces & clocks</span>
      </div>
    </footer>
  );
}
