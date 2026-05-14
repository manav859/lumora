export type LampVariant = 'table' | 'floor' | 'orb' | 'sconce' | 'pendant'

export type NavItem = {
  href: string
  label: string
}

export type Collection = {
  description: string
  href: string
  note: string
  size: 'large' | 'small'
  title: string
  tone: 'deep' | 'warm' | 'split'
  variant: LampVariant
}

export type Product = {
  category: string
  collection: string
  description: string
  materials: string[]
  moodNote: string
  name: string
  price: string
  roomLabel: string
  slug: string
  variant: LampVariant
}

export type JournalArticle = {
  category: string
  excerpt: string
  href: string
  slug: string
  title: string
  variant: LampVariant
}

export type ValuePoint = {
  description: string
  title: string
}
