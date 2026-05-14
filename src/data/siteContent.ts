import type {
  Collection,
  JournalArticle,
  NavItem,
  Product,
  ValuePoint,
} from '../types/site'

export const siteNavigation: NavItem[] = [
  { href: '/shop', label: 'catalog' },
  { href: '/#collections', label: 'collections' },
  { href: '/journal', label: 'journal' },
  { href: '/about', label: 'about' },
  { href: '/contact', label: 'contact' },
]

export const homeCategoryPills = ['floor', 'pendant', 'table', 'wall', 'ceiling']

export const homeCollections: Collection[] = [
  {
    title: 'Table Lamps',
    description:
      'Tailored pieces for bedside rituals, console styling, and quieter reading light.',
    href: '/shop',
    note: 'For intimate corners',
    size: 'large',
    tone: 'deep',
    variant: 'table',
  },
  {
    title: 'Floor Lamps',
    description:
      'Architectural silhouettes that bring height, softness, and a long warm throw.',
    href: '/shop',
    note: 'For vertical presence',
    size: 'small',
    tone: 'warm',
    variant: 'floor',
  },
  {
    title: 'Sculptural Lighting',
    description:
      'Statement forms that read like collected objects before the room even turns on.',
    href: '/shop',
    note: 'For gallery-like rooms',
    size: 'small',
    tone: 'split',
    variant: 'orb',
  },
]

export const products: Product[] = [
  {
    slug: 'solenne-ceramic-table-lamp',
    name: 'Solenne Ceramic Table Lamp',
    price: 'From ₹7,999',
    category: 'table lamp',
    collection: 'Table Lamps',
    description:
      'A hand-glazed ceramic base with a softened linen shade, designed for calm bedside glow.',
    materials: ['Ceramic body', 'Linen shade', 'Warm LED fitting'],
    moodNote: 'Designed for soft evening atmosphere.',
    roomLabel: 'Bedrooms and reading corners',
    variant: 'table',
  },
  {
    slug: 'aurelia-floor-lamp',
    name: 'Aurelia Floor Lamp',
    price: 'From ₹12,499',
    category: 'floor lamp',
    collection: 'Floor Lamps',
    description:
      'A taller brass-lined stem and oval shade that warms living spaces without crowding them.',
    materials: ['Brushed brass stem', 'Textured shade', 'Weighted stone base'],
    moodNote: 'Made to stretch a pool of light across larger seating areas.',
    roomLabel: 'Lounges and layered living rooms',
    variant: 'floor',
  },
  {
    slug: 'nocturne-bedside-lamp',
    name: 'Nocturne Bedside Lamp',
    price: 'From ₹6,499',
    category: 'bedside lamp',
    collection: 'Table Lamps',
    description:
      'A compact silhouette with low glare and a deeper shade line for more intimate light.',
    materials: ['Matte ceramic shell', 'Warm diffuser', 'Touch toggle'],
    moodNote: 'Sized for nightstands and calmer late-evening routines.',
    roomLabel: 'Compact bedrooms and guest rooms',
    variant: 'sconce',
  },
  {
    slug: 'orb-glow-lamp',
    name: 'Orb Glow Lamp',
    price: 'From ₹8,799',
    category: 'accent lamp',
    collection: 'Sculptural Lighting',
    description:
      'A glowing orb composition that brings sculpture, reflection, and low ambient warmth.',
    materials: ['Opal glass sphere', 'Brass detailing', 'Stone plinth'],
    moodNote: 'Created to read like an object first, then a light source.',
    roomLabel: 'Shelving, sideboards, and styled alcoves',
    variant: 'orb',
  },
  {
    slug: 'soft-fold-pendant',
    name: 'Soft Fold Pendant',
    price: 'From ₹10,299',
    category: 'pendant',
    collection: 'Sculptural Lighting',
    description:
      'A suspended folded form with gentle amber diffusion for dining rooms and statement corners.',
    materials: ['Satin shell', 'Warm inner reflector', 'Cable drop'],
    moodNote: 'Balanced for elegant overhead warmth.',
    roomLabel: 'Dining rooms and entry compositions',
    variant: 'pendant',
  },
  {
    slug: 'quiet-strata-wall-light',
    name: 'Quiet Strata Wall Light',
    price: 'From ₹5,999',
    category: 'wall light',
    collection: 'Sculptural Lighting',
    description:
      'Layered ceramic ridges with a low, indirect wash for corridors and softened bedroom edges.',
    materials: ['Ceramic shell', 'Wall mount plate', 'Warm strip light'],
    moodNote: 'Crafted to shape walls rather than dominate them.',
    roomLabel: 'Hallways and hospitality-inspired bedrooms',
    variant: 'sconce',
  },
  {
    slug: 'drift-halo-pendant',
    name: 'Drift Halo Pendant',
    price: 'From ₹11,499',
    category: 'ceiling light',
    collection: 'Floor Lamps',
    description:
      'A floating halo pendant with a wider ambient spread and a more gallery-like profile.',
    materials: ['Patinated brass', 'Diffused halo ring', 'Ceiling canopy'],
    moodNote: 'Ideal for open-plan rooms that need presence without harshness.',
    roomLabel: 'Dining spaces and large entryways',
    variant: 'pendant',
  },
  {
    slug: 'vesper-ledge-lamp',
    name: 'Vesper Ledge Lamp',
    price: 'From ₹9,299',
    category: 'table lamp',
    collection: 'Table Lamps',
    description:
      'A lower profile lamp with a sculpted base and directional shade for thoughtful task light.',
    materials: ['Stoneware base', 'Brushed stem', 'Tailored fabric shade'],
    moodNote: 'Made for desks, shelves, and focused corners.',
    roomLabel: 'Studios, desks, and styled shelving',
    variant: 'table',
  },
]

export const featuredProduct = products[0]

export const journalArticles: JournalArticle[] = [
  {
    slug: 'warm-lighting-bedroom',
    title: 'How to choose warm lighting for a bedroom',
    excerpt:
      'Shade density, bedside height, and lower glare decisions that make the room feel quieter at night.',
    category: 'Lighting Guide',
    href: '/journal',
    variant: 'table',
  },
  {
    slug: 'small-spaces-calm',
    title: 'Table lamps that make small spaces feel calm',
    excerpt:
      'Scale, silhouette, and material choices that keep compact interiors airy instead of crowded.',
    category: 'Interior Styling',
    href: '/journal',
    variant: 'orb',
  },
  {
    slug: 'sculptural-lighting-centerpiece',
    title: 'Why sculptural lighting is the new decor centerpiece',
    excerpt:
      'How statement lamps now anchor a room visually before they even cast a glow.',
    category: 'Journal',
    href: '/journal',
    variant: 'floor',
  },
  {
    slug: 'dining-room-layering',
    title: 'Layering pendants without losing intimacy in the dining room',
    excerpt:
      'An editorial take on overhead lighting that keeps large rooms feeling gathered and warm.',
    category: 'Rooms',
    href: '/journal',
    variant: 'pendant',
  },
  {
    slug: 'hospitality-inspired-hallways',
    title: 'Hospitality-inspired hallway lighting for a softer arrival',
    excerpt:
      'Indirect wall glow and quiet contrast for transitional spaces that often get overlooked.',
    category: 'Atmosphere',
    href: '/journal',
    variant: 'sconce',
  },
]

export const aboutValues: ValuePoint[] = [
  {
    title: 'Atmosphere',
    description: 'Every piece is designed around mood first, brightness second.',
  },
  {
    title: 'Materiality',
    description: 'Ceramic, stone, glass, and brass are chosen for warmth and tactile depth.',
  },
  {
    title: 'Craft',
    description: 'The forms feel collected and deliberate rather than mass-produced or loud.',
  },
  {
    title: 'Calm',
    description: 'Lighting should soften the room and sharpen focus at the same time.',
  },
]

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}
