'use client'

import { projects } from '@/content/projects'
import ProjectBlock from './ProjectBlock'

const Work = () => (
  <section id="work" className="border-t border-hairline dark:border-hairline-dark scroll-mt-14">
    <div className="page-shell py-16 md:py-20">
      <p className="font-mono text-[12px] tracking-[0.14em] text-muted dark:text-muted-dark mb-10">
        selected work
      </p>
      <div className="space-y-16 md:space-y-20">
        {projects.map((project) => (
          <ProjectBlock key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
)

export default Work
