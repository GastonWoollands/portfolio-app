'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { site } from '@/content/site'

const Hero = () => (
  <section id="home" className="pt-14 scroll-mt-14">
    <div className="page-shell py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-3xl"
      >
        <p className="font-mono text-[12px] tracking-[0.14em] text-muted dark:text-muted-dark mb-3">
          {site.name}
        </p>
        <p className="text-sm text-ink dark:text-paper mb-6">{site.role}</p>
        <h1 className="font-heading text-3xl md:text-5xl lg:text-[3.25rem] font-medium leading-[1.05] tracking-tight text-ink dark:text-paper mb-5">
          {site.headline}
        </h1>
        <p className="text-sm text-muted dark:text-muted-dark mb-8">
          {site.tenure}
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link href="#work" className="btn-primary">
            Work
            <span aria-hidden="true">↓</span>
          </Link>
          <Link href="#experience" className="btn-ghost">
            Experience
          </Link>
          <div className="flex items-center gap-5">
            {site.socials.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)

export default Hero
