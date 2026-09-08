'use client'

import GetInTouch from '@/components/GetInTouch'
import { site } from '@/content/site'

const Contact = () => (
  <section id="contact" className="border-t border-hairline dark:border-hairline-dark scroll-mt-14">
    <div className="page-shell py-16 md:py-20">
      <p className="font-mono text-[12px] tracking-[0.14em] text-muted dark:text-muted-dark mb-8">
        contact
      </p>
      <h2 className="font-heading text-3xl md:text-5xl font-medium tracking-tight text-ink dark:text-paper mb-4">
        <a href={`mailto:${site.email}`} className="hover:opacity-60 transition-opacity">
          {site.email}
        </a>
      </h2>
      <p className="text-muted dark:text-muted-dark mb-12 max-w-md">
        {site.contactLine}
      </p>
      <GetInTouch />
    </div>
  </section>
)

export default Contact
