export type Category = {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  image: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  description: string;
  details: string[];
  image: string;
  gallery?: string[];
  badge?: string;
  color?: string;
  gender: 'Men' | 'Women' | 'Boys' | 'Girls' | 'Unisex' | 'Home';
  stock: number;
  featured?: boolean;
  sale?: boolean;
};

const img = (id: string, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=90`;

export const categories: Category[] = [
  { id: 'men', name: 'Men’s Watches', eyebrow: '01 / EVERYDAY ICONS', description: 'Classic, chronograph and statement pieces for him.', image: img('photo-1524805444758-089113d48a6d') },
  { id: 'women', name: 'Women’s Watches', eyebrow: '02 / REFINED DETAILS', description: 'Elegant silhouettes, delicate bracelets and modern faces.', image: img('photo-1547996160-81dfa63595aa') },
  { id: 'boys', name: 'Boys Watches', eyebrow: '03 / YOUNG STYLE', description: 'Fun, durable and easy-to-wear everyday watches.', image: img('photo-1434056886845-dac89ffe9b56') },
  { id: 'girls', name: 'Girls Watches', eyebrow: '04 / LITTLE LUXE', description: 'Playful colour and polished details for girls.', image: img('photo-1523170335258-f5ed11844a49') },
  { id: 'couple', name: 'Couple Sets', eyebrow: '05 / MATCHED', description: 'Coordinated watches made for two.', image: img('photo-1523275335684-37898b6baf30') },
  { id: 'smart', name: 'Smart Watches', eyebrow: '06 / CONNECTED', description: 'Modern digital companions for work and training.', image: img('photo-1524805444758-089113d48a6d') },
  { id: 'mosque', name: 'Mosque Clocks', eyebrow: '07 / PRAYER SPACES', description: 'Digital prayer clocks and clear time displays.', image: img('photo-1563861826100-9cb868fdbe1c') },
  { id: 'wall', name: 'Wall Clocks', eyebrow: '08 / ON THE WALL', description: 'Statement and minimal clocks for home and office.', image: img('photo-1508057198894-247b23fe5ade') },
  { id: 'table', name: 'Table & Desk Clocks', eyebrow: '09 / SMALL SPACES', description: 'Compact clocks for bedside tables and desks.', image: img('photo-1506152983158-b4a74a01c721') },
];

export const products: Product[] = [
  {
    id: 'ww-001', slug: 'royal-steel-chronograph', name: 'Royal Steel Chronograph', category: 'men', price: 6490, oldPrice: 7990, gender: 'Men', badge: 'FLASH SALE', sale: true, featured: true, stock: 18,
    description: 'A polished steel chronograph look with a deep dial and an everyday-ready profile.',
    details: ['Quartz movement', 'Stainless-steel style bracelet', 'Chronograph-inspired sub-dials', 'Splash-resistant construction'],
    image: img('photo-1524805444758-089113d48a6d'), gallery: [img('photo-1524805444758-089113d48a6d'), img('photo-1523170335258-f5ed11844a49')]
  },
  {
    id: 'ww-002', slug: 'midnight-leather-classic', name: 'Midnight Leather Classic', category: 'men', price: 4890, oldPrice: 5990, gender: 'Men', badge: '−18%', sale: true, featured: true, stock: 24,
    description: 'A clean black dial paired with a warm leather-look strap for formal and casual styling.',
    details: ['Quartz movement', 'Leather-look strap', 'Minimal three-hand dial', 'Gift-ready presentation'],
    image: img('photo-1522312346375-d1a52e2b99b3'), gallery: [img('photo-1522312346375-d1a52e2b99b3')]
  },
  {
    id: 'ww-003', slug: 'silver-mesh-rose', name: 'Silver Mesh Rose', category: 'women', price: 4290, oldPrice: 5290, gender: 'Women', badge: 'FEATURED', sale: true, featured: true, stock: 15,
    description: 'A slim polished case and mesh bracelet designed around an understated rose-toned dial.',
    details: ['Quartz movement', 'Adjustable mesh bracelet', 'Slim profile', 'Scratch-resistant mineral glass'],
    image: img('photo-1547996160-81dfa63595aa'), gallery: [img('photo-1547996160-81dfa63595aa')]
  },
  {
    id: 'ww-004', slug: 'golden-minimal', name: 'Golden Minimal', category: 'women', price: 3790, oldPrice: 4490, gender: 'Women', badge: '−16%', sale: true, stock: 20,
    description: 'Warm gold-tone styling with a simple face that works from everyday errands to evenings.',
    details: ['Quartz movement', 'Gold-tone bracelet', 'Clean index dial', 'Lightweight feel'],
    image: img('photo-1523170335258-f5ed11844a49')
  },
  {
    id: 'ww-005', slug: 'urban-black-smart', name: 'Urban Black Smart', category: 'smart', price: 8990, oldPrice: 10990, gender: 'Unisex', badge: 'NEW', sale: true, featured: true, stock: 11,
    description: 'A modern full-screen smart watch silhouette for notifications, activity and daily utility.',
    details: ['Touch display', 'Activity tracking', 'Bluetooth connectivity', 'Magnetic charging cable'],
    image: img('photo-1523275335684-37898b6baf30')
  },
  {
    id: 'ww-006', slug: 'kids-blue-digital', name: 'Kids Blue Digital', category: 'boys', price: 1890, oldPrice: 2290, gender: 'Boys', badge: 'KIDS EDIT', sale: true, stock: 32,
    description: 'A bright digital style made for young wrists, school days and weekend adventures.',
    details: ['Digital display', 'Alarm function', 'Soft silicone strap', 'Easy-read numbers'],
    image: img('photo-1434056886845-dac89ffe9b56')
  },
  {
    id: 'ww-007', slug: 'girls-pink-charm', name: 'Girls Pink Charm', category: 'girls', price: 2190, oldPrice: 2690, gender: 'Girls', badge: 'GIFT EDIT', sale: true, stock: 27,
    description: 'A playful pink-toned watch with a neat dial and a comfortable everyday strap.',
    details: ['Quartz movement', 'Comfort strap', 'Easy-read dial', 'Gift-friendly styling'],
    image: img('photo-1523170335258-f5ed11844a49')
  },
  {
    id: 'ww-008', slug: 'couple-silver-duo', name: 'Silver Couple Duo', category: 'couple', price: 6990, oldPrice: 8490, gender: 'Unisex', badge: 'COUPLE DEAL', sale: true, featured: true, stock: 9,
    description: 'A coordinated two-watch set with matching silver styling for couples and gifting.',
    details: ['Two-piece set', 'Matching dial language', 'Quartz movement', 'Presentation box included'],
    image: img('photo-1523275335684-37898b6baf30')
  },
  {
    id: 'ww-009', slug: 'digital-mosque-prayer-clock', name: 'Digital Mosque Prayer Clock', category: 'mosque', price: 12990, oldPrice: 14990, gender: 'Home', badge: 'PRAYER SPACE', sale: true, featured: true, stock: 7,
    description: 'A large digital prayer-space display concept with clear time visibility for masjids and homes.',
    details: ['Large digital display', 'Prayer-time display format', 'Wall-mount design', 'Remote-ready concept'],
    image: img('photo-1563861826100-9cb868fdbe1c')
  },
  {
    id: 'ww-010', slug: 'modern-round-wall-clock', name: 'Modern Round Wall Clock', category: 'wall', price: 3490, oldPrice: 4290, gender: 'Home', badge: 'HOME EDIT', sale: true, stock: 14,
    description: 'A clean round wall clock designed to disappear into modern interiors while staying readable.',
    details: ['Quartz movement', 'Silent-style sweep concept', 'Wall-mount design', 'Clear numerals'],
    image: img('photo-1508057198894-247b23fe5ade')
  },
  {
    id: 'ww-011', slug: 'wood-desk-clock', name: 'Wood Desk Clock', category: 'table', price: 2990, oldPrice: 3590, gender: 'Home', badge: 'DESK EDIT', sale: true, stock: 19,
    description: 'A warm desk accent for bedside tables, workstations and reception counters.',
    details: ['Compact footprint', 'Desk-standing design', 'Clear time display', 'Warm wood-look finish'],
    image: img('photo-1506152983158-b4a74a01c721')
  },
  {
    id: 'ww-012', slug: 'black-mesh-everyday', name: 'Black Mesh Everyday', category: 'men', price: 3290, gender: 'Unisex',
    description: 'A versatile black mesh watch for understated everyday styling.',
    details: ['Quartz movement', 'Mesh bracelet', 'Minimal dial', 'Adjustable clasp'],
    image: img('photo-1539874754764-5a96559165b0'), stock: 21
  },
];

export const offers = [
  { title: 'Flash Hour', copy: 'Selected watches up to 20% off.', code: 'TIME20', accent: 'silver' },
  { title: 'Couple Edit', copy: 'Save on selected matching sets.', code: 'DUO', accent: 'rose' },
  { title: 'Home Time', copy: 'Refresh your wall & desk clocks.', code: 'HOME', accent: 'gold' },
];

export function findProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
