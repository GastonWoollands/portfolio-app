'use client'

import { motion } from 'framer-motion'
import { experience, site } from '@/content/site'

const Experience = () => (
  <section id="experience" className="border-t border-hairline dark:border-hairline-dark scroll-mt-14">
    <div className="page-shell py-16 md:py-20">
      <p className="font-mono text-[12px] tracking-[0.14em] text-muted dark:text-muted-dark mb-10">
        experience
      </p>

      <div className="divide-y divide-hairline dark:divide-hairline-dark border-y border-hairline dark:border-hairline-dark">
        {experience.map((item) => (
          <motion.article
            key={item.company}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-[minmax(0,11rem)_1fr] gap-2 md:gap-10 py-6"
          >
            <p className="font-mono text-[11px] tracking-[0.08em] text-muted dark:text-muted-dark pt-1">
              {item.dates}
            </p>
            <div>
              <h3 className="font-heading text-xl md:text-2xl font-medium tracking-tight text-ink dark:text-paper">
                {item.company}
                <span className="text-muted dark:text-muted-dark font-normal">
                  {' '}
                  · {item.role}
                </span>
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted dark:text-muted-dark max-w-2xl">
                {item.summary}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
        <div>
          <p className="font-mono text-[11px] tracking-[0.1em] text-muted dark:text-muted-dark mb-2">
            education
          </p>
          <p className="text-sm leading-relaxed text-ink dark:text-paper">
            {site.education}
          </p>
        </div>
        <div className="space-y-3">
          {site.skillGroups.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-[11px] tracking-[0.1em] text-muted dark:text-muted-dark mb-1">
                {group.label}
              </p>
              <p className="text-sm text-ink dark:text-paper">{group.items}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Experience
