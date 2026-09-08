export interface Project {
  id: string
  index: string
  eyebrow: string
  title: string
  description: string
  caption: string
  meta: string
  href: string
  cta: string
  image: string
  imageAlt: string
  reverse?: boolean
  imageAspect?: string
  imageTone?: 'paper' | 'ink'
}

export const projects: Project[] = [
  {
    id: 'metricow',
    index: '01',
    eyebrow: 'Product',
    title: 'MetriCow',
    description:
      'Livestock operations across farms — inventory, clinical history, reproduction, and metrics. WhatsApp and web agents so field teams can query and update the herd without a spreadsheet.',
    caption: 'Live product · multi-farm operations',
    meta: 'WhatsApp · Web agent · Metrics',
    href: 'https://www.metricow.com/',
    cta: 'Open product',
    image: '/projects/metricow-hero-light.png',
    imageAlt: 'MetriCow light landing page with livestock summary on a phone',
  },
  {
    id: 'sector-panel',
    index: '02',
    eyebrow: 'Research terminal',
    title: 'Sector Panel',
    description:
      'Personal US market research terminal: daily macro, tape, news, and valuation from stored public evidence. Built for a single operator — ingest to Postgres to UI, not a live scrape in the browser.',
    caption: 'Ingest → Postgres → UI · public sources only',
    meta: 'SEC · Yahoo · FRED · Polymarket · EDGAR',
    href: 'https://github.com/GastonWoollands/market_agent',
    cta: 'View repository',
    image: '/projects/sector-panel-live.png',
    imageAlt: 'Sector Panel live tape with 10Y Treasury yield, risk-on factors, and macro sidebar',
    reverse: true,
    imageAspect: 'aspect-[16/9]',
    imageTone: 'ink',
  },
]
