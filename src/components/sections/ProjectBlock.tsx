'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Project } from '@/content/projects'

const ProjectBlock = ({ project }: { project: Project }) => (
  <motion.article
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.45, ease: 'easeOut' }}
    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
      project.reverse ? 'lg:[&>*:first-child]:order-2' : ''
    }`}
  >
    <div className="lg:pt-2">
      <p className="font-mono text-[12px] tracking-[0.14em] text-muted dark:text-muted-dark mb-3">
        {project.index} · {project.eyebrow}
      </p>
      <h3 className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-ink dark:text-paper mb-3">
        {project.title}
      </h3>
      <p className="text-[15px] leading-relaxed text-muted dark:text-muted-dark mb-4 max-w-md">
        {project.description}
      </p>
      <p className="font-mono text-[11px] tracking-[0.08em] text-ink dark:text-paper mb-2">
        {project.meta}
      </p>
      <p className="font-mono text-[11px] tracking-[0.06em] text-muted dark:text-muted-dark mb-6">
        {project.caption}
      </p>
      <Link
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost"
      >
        {project.cta}
        <span aria-hidden="true">→</span>
      </Link>
    </div>
    <Link
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`block border border-hairline dark:border-hairline-dark overflow-hidden ${
        project.imageTone === 'ink' ? 'bg-[#070707]' : 'bg-paper dark:bg-paper-dark'
      }`}
    >
      <Image
        src={project.image}
        alt={project.imageAlt}
        width={1440}
        height={900}
        unoptimized
        className={`w-full h-auto object-cover object-top ${project.imageAspect ?? 'aspect-[16/11]'}`}
      />
    </Link>
  </motion.article>
)

export default ProjectBlock
