/* ================= KONTEN PORTFOLIO MEYTA ================= */
import hero from './assets/images/hero.jpeg';
import kebun from './assets/images/kebun.jpeg';
import kerja from './assets/images/kerja.jpeg';
import matcha from './assets/images/matcha.jpeg';
import pantai from './assets/images/pantai.jpeg';
import filmroll from './assets/images/filmroll.jpeg';
import matchadate from './assets/images/matchadate.jpeg';
import fashion from './assets/images/fashion.jpeg';
import travel from './assets/images/travel.jpeg';

export const NAV_LINKS = [
  { id: 'home', label: 'home' },
  { id: 'about', label: 'about me' },
  { id: 'niche', label: 'niche' },
  { id: 'videos', label: 'videos' },
  { id: 'brands', label: 'brands' },
  { id: 'services', label: 'services' },
  { id: 'contact', label: 'contact' },
];

export const STRIP_A = [
  'lifestyle ✿', 'fashion 🎀', 'beauty ✨', 'travel 🍃',
  'storytelling ♡', 'ugc videos 🎬', 'soft aesthetics ☁️',
];

export const STRIP_B = [
  'currently open for collabs ✦', 'Q3 slots available ✦',
  "let's make something pretty ♡", 'dm me 💌',
];

export const NICHE_TAGS = ['🍵 matcha lover', '📷 film photos', '🌇 sunset chaser', '🎀 soft aesthetics'];

export const STATS = [
  { value: 170, suffix: 'K', label: 'besties' },
  { value: 6.2, decimals: 1, suffix: '%', label: 'engagement' },
  { value: 240, suffix: '+', label: 'collabs' },
  { value: 12, suffix: 'M+', label: 'views' },
];

export const NOW_ROWS = [
  { emoji: '🍵', label: 'drinking', value: 'iced matcha latte (+ extra love)' },
  { emoji: '📺', label: 'watching', value: "twilight (again. don't judge.)" },
  { emoji: '📖', label: 'reading', value: 'my 11th unfinished notebook' },
  { emoji: '🎧', label: 'on repeat', value: 'glue song — beabadoobie', eq: true },
];

export const FACTS = [
  { icon: '☁️', text: 'certified daydreamer' },
  { icon: '🍵', text: "matcha-dependent (it's a lifestyle)" },
  { icon: '📷', text: 'film camera girl, 47 rolls & counting' },
  { icon: '🌇', text: 'professional sunset chaser' },
  { icon: '🎤', text: 'karaoke queen — off-key but passionate' },
  { icon: '♡', text: '300 unread emails, reads every comment' },
];

export const POLAROIDS = [
  {
    pos: 'left-0 top-0 z-[1] w-[78%] -rotate-[4deg] lg:w-[62%]',
    tape: 'pink',
    img: pantai,
    alt: 'golden hour',
    cap: 'golden hour things ☀️',
  },
  {
    pos: 'right-0 top-[130px] z-[2] w-[70%] rotate-[3.5deg] lg:w-[56%]',
    tape: 'green',
    img: filmroll,
    alt: 'film roll',
    cap: 'film roll #47 ✿',
  },
  {
    pos: 'bottom-0 left-[10%] z-[3] w-[74%] -rotate-[2deg] lg:w-[60%]',
    tape: 'pink',
    img: matchadate,
    alt: 'matcha date',
    cap: 'matcha date w/ me 🍵',
  },
];

export const NICHES = [
  {
    img: kerja,
    alt: 'on duty',
    num: '01',
    title: 'On Duty',
    desc: 'work days, little tasks & the tiny moments that make a busy day feel a little lighter — just another day on duty.',
    tags: ['routine', 'vlog', 'cozy'],
  },
  {
    img: fashion,
    alt: 'fashion',
    num: '02',
    title: 'fashion & style',
    desc: 'thrifted finds, pastel layering & seasonal lookbooks — style that looks expensive but tells a thrifting story.',
    tags: ['grwm', 'lookbook', 'thrift haul'],
  },
  {
    img: kebun,
    alt: 'berkebun',
    num: '03',
    title: 'hobby & mood',
    desc: 'gardening, growing little things & finding calm in slow mornings — because sometimes, happiness grows quietly 🌱',
    tags: ['review', 'routine', 'grwm'],
  },
  {
    img: travel,
    alt: 'travel',
    num: '04',
    title: 'travel & adventure',
    desc: 'pretty corners of indonesia & beyond, filmed like scenes from a coming-of-age movie 🍃',
    tags: ['travel vlog', 'guide', 'hidden gems'],
  },
];

export const VIDEOS = [
  {
    title: 'soft morning routine ☁️',
    thumb: 'https://picsum.photos/seed/meyta-v1/460/560',
    cover: 'https://picsum.photos/seed/meyta-v1/560/680',
    dur: '2:14',
    views: '1.2M views',
    desc: "the video that started it all — linen sheets, journaling by the window, and a matcha so aesthetic it hurt. comment section called it 'a hug in video form' ♡",
  },
  {
    title: 'jakarta golden hour 🌇',
    thumb: 'https://picsum.photos/seed/meyta-v2/460/560',
    cover: 'https://picsum.photos/seed/meyta-v2/560/680',
    dur: '3:02',
    views: '860K views',
    desc: 'scooter rides, warm street light & the city glowing pink — proof that jakarta is the prettiest right before it sleeps.',
  },
  {
    title: 'skincare = self-love ✨',
    thumb: 'https://picsum.photos/seed/meyta-v3/460/560',
    cover: 'https://picsum.photos/seed/meyta-v3/560/680',
    dur: '1:47',
    views: '2.4M views',
    desc: 'my honest evening glow routine — every product tested for months, every step filmed like a ritual. the calmest 47 seconds on the internet.',
  },
  {
    title: 'thrift haul with me 🎀',
    thumb: 'https://picsum.photos/seed/meyta-v4/460/560',
    cover: 'https://picsum.photos/seed/meyta-v4/560/680',
    dur: '4:38',
    views: '3.1M views',
    desc: 'bali thrift markets, Rp 15.000 treasures & a styling session at the end — my most saved video of all time.',
  },
];

export const WORKS = [
  {
    cat: 'campaign',
    catLabel: 'Campaign',
    title: 'Bloom Cosmetics',
    img: 'https://picsum.photos/seed/meyta-g1/500/700',
    cover: 'https://picsum.photos/seed/meyta-g1/520/760',
    tall: true,
    desc: 'spring launch campaign — a 3-part soft glam series that turned every product drop into a little love letter.',
    results: ['+212% engagement', '40K saves in 2 weeks', 'launch sold out in 72 hours'],
  },
  {
    cat: 'ugc',
    catLabel: 'UGC',
    title: 'Petal & Co.',
    img: 'https://picsum.photos/seed/meyta-g2/500/500',
    cover: 'https://picsum.photos/seed/meyta-g2/520/520',
    desc: "full ugc package — hooks, unboxings & soft aesthetic b-roll built for paid ads that don't feel like ads.",
    results: ['18 deliverables', 'used across 6 ad sets', '2.1x ROAS on paid'],
  },
  {
    cat: 'ugc',
    catLabel: 'UGC',
    title: 'Matcha Muse',
    img: matcha,
    cover: matcha,
    desc: 'matcha rituals told like morning poetry — the coziest campaign of the year ☕',
    results: ['1.8M organic views', '+9K followers for the brand', '3 viral reels'],
  },
  {
    cat: 'ambassador',
    catLabel: 'Ambassador',
    title: 'Velvet Threads',
    img: 'https://picsum.photos/seed/meyta-g4/500/500',
    cover: 'https://picsum.photos/seed/meyta-g4/520/520',
    desc: 'long-term ambassadorship — seasonal lookbooks, event coverage & community takeovers for a girly thrift-brand.',
    results: ['8-month partnership', '+40% community growth', '12 lookbooks'],
  },
  {
    cat: 'campaign',
    catLabel: 'Campaign',
    title: 'Aurora Skincare',
    img: 'https://picsum.photos/seed/meyta-g5/700/500',
    cover: 'https://picsum.photos/seed/meyta-g5/760/520',
    wide: true,
    desc: 'a glow-series campaign blending storytelling with honest skin rituals — because skincare content should feel like romance, not homework.',
    results: ['+40% community growth', "featured on brand's homepage", 'sold through 3 restocks'],
  },
  {
    cat: 'ugc',
    catLabel: 'UGC',
    title: 'Sugarpress Café',
    img: 'https://picsum.photos/seed/meyta-g6/500/500',
    cover: 'https://picsum.photos/seed/meyta-g6/520/520',
    desc: 'café storytelling that made dessert content feel like a rom-com — strawberry cakes & slow sunday afternoons.',
    results: ['3 viral reels', 'weekend queue doubled', 'the banana cake sold out (sorry)'],
  },
];

export const WORK_FILTERS = [
  { key: 'all', label: 'all work' },
  { key: 'campaign', label: 'campaign' },
  { key: 'ugc', label: 'ugc' },
  { key: 'ambassador', label: 'ambassador' },
];

export const BRANDS_A = ['GLOW&CO', 'Petal & Co.', 'Matcha Muse', 'Velvet Threads', 'Aurora', 'Sugarpress', 'Daisy Lab'];
export const BRANDS_B = ['Nova Beauty', 'Blush Hour', 'Fern Studio', 'Miel Paris', 'Calm Club', 'Peachy Keen'];

export const SERVICES = [
  {
    icon: '📸',
    name: 'Content Creation',
    title: 'content creation',
    price: '$250',
    per: ' / post',
    features: ['3 curated feed photos', 'ig + tiktok crosspost', '2 rounds of revision', 'delivered within 7 days'],
  },
  {
    icon: '🎬',
    name: 'UGC Videos',
    title: 'ugc videos',
    price: '$400',
    per: ' / video',
    popular: true,
    features: ['15–60s vertical video', 'hook + storytelling script', 'full usage rights', 'raw + edited versions'],
  },
  {
    icon: '💌',
    name: 'Brand Ambassador',
    title: 'brand ambassador',
    price: '$1.2k',
    per: ' / month',
    features: ['monthly content bundle', 'story takeovers', 'discount codes & affiliate', 'priority scheduling'],
  },
  {
    icon: '🌱',
    name: 'Social Management',
    title: 'social management',
    price: '$900',
    per: ' / month',
    features: ['12 posts + 8 stories', 'content calendar', 'community engagement', 'monthly analytics report'],
  },
];

export const TESTIMONIALS = [
  {
    quote: 'meyta turned our launch into a soft dream — her content felt so authentic that our engagement literally tripled in two weeks. booking her again for Q4, obviously.',
    emoji: '🌷',
    name: 'Maya Chen',
    role: 'marketing lead, Bloom Cosmetics',
  },
  {
    quote: "the prettiest ugc we've ever received. on-brand, on-time, and it actually converted — 2.1x ROAS on our paid ads. zero notes, five stars, one new favorite creator.",
    emoji: '☕',
    name: 'Daniel Park',
    role: 'founder, Matcha Muse',
  },
  {
    quote: 'working with meyta feels like magic — warm communication, zero drama, and our community grew 40% during our ambassadorship. she just gets it, you know?',
    emoji: '👗',
    name: 'Chloe Laurent',
    role: 'brand director, Velvet Threads',
  },
];

export const CONTACT_SELECT_OPTIONS = [
  { value: '', label: '— choose a service —' },
  { value: 'Content Creation', label: 'Content Creation' },
  { value: 'UGC Videos', label: 'UGC Videos' },
  { value: 'Brand Ambassador', label: 'Brand Ambassador' },
  { value: 'Social Management', label: 'Social Management' },
  { value: 'something else ✿', label: 'something else ✿' },
];

export const FOOTER_LINKS = [
  { label: 'about', href: '#about' },
  { label: 'videos', href: '#videos' },
  { label: 'brands', href: '#brands' },
  { label: 'services', href: '#services' },
  { label: 'contact', href: '#contact' },
];
