'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Chatbot from '@/components/Chatbot'
import GetInTouch from '@/components/GetInTouch'
import { useState } from 'react'

const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
} as const

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
} as const

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  href?: string
  gradient: string
  icon: 'chart' | 'finance' | 'mlops'
}

const projects: Project[] = [
  {
    id: 'bi-data',
    title: 'Business Intelligence & Data',
    description: 'Design and implementation of Business Intelligence solutions to transform raw data into actionable insights. Projects include interactive dashboards, real-time analytics, and data pipelines for driving data-driven business decisions.',
    technologies: ['Power BI', 'SQL', 'ETL', 'Data Warehousing'],
    gradient: 'from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20',
    icon: 'chart',
  },
  {
    id: 'quant-finance',
    title: 'Quantitative Finance',
    description: 'Creation of quantitative finance models to predict derivatives pricing strategy, assess risk, and optimize portfolios. The focus is on applying advanced statistical methods and machine learning algorithms to financial data for strategic decision-making.',
    technologies: ['Python', 'Pandas', 'NumPy', 'SciPy', 'QuantLib'],
    href: 'https://github.com/GastonWoollands',
    gradient: 'from-indigo-500/10 to-blue-500/10 dark:from-indigo-500/20 dark:to-blue-500/20',
    icon: 'finance',
  },
  {
    id: 'mlops',
    title: 'MLOps Pipelines',
    description: 'Design and deployment of robust ETL workflows and machine learning pipelines to support scalable, reproducible, and automated ML systems. Emphasis on data quality, versioning, and seamless integration from raw data to model deployment.',
    technologies: ['Apache Flyte', 'MLflow', 'Spark', 'Python', 'Docker', 'Kubernetes'],
    href: 'https://github.com/GastonWoollands',
    gradient: 'from-sky-500/10 to-blue-500/10 dark:from-sky-500/20 dark:to-blue-500/20',
    icon: 'mlops',
  },
]

const ProjectIcon = ({ type }: { type: Project['icon'] }) => {
  switch (type) {
    case 'chart':
      return (
        <svg className="w-6 h-6 text-accent dark:text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    case 'finance':
      return (
        <svg className="w-6 h-6 text-accent dark:text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'mlops':
      return (
        <svg className="w-6 h-6 text-accent dark:text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
  }
}

const HomeSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-secondary/90 dark:from-neutral-950 dark:to-neutral-900 pt-20 overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10 dark:opacity-5">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    </div>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative text-center max-w-3xl mx-auto px-4"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        <motion.h1 
          className="font-heading text-5xl md:text-7xl font-bold text-primary dark:text-primary-dark mb-6 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Gaston Woollands
          <motion.div
            className="absolute -bottom-2 left-0 w-full h-1 bg-accent dark:bg-accent-dark"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.h1>
      </motion.div>
      <motion.p 
        className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Data Scientist | MLOps Engineer | Finance
      </motion.p>
      <motion.p
        className="text-2xl md:text-3xl font-heading font-semibold text-accent dark:text-accent-dark mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Turn data into decisions.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Link
          href="#projects"
          className="inline-flex items-center px-8 py-3 bg-accent dark:bg-accent-dark text-white font-semibold rounded-lg hover:bg-accent/90 dark:hover:bg-accent-dark/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          View my work
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
        <Link
          href="#contact"
          className="inline-flex items-center px-8 py-3 border-2 border-accent dark:border-accent-dark text-accent dark:text-accent-dark font-semibold rounded-lg hover:bg-accent/10 dark:hover:bg-accent-dark/10 transition-colors duration-200"
        >
          Get in touch
        </Link>
      </motion.div>
      <motion.div
        className="flex justify-center space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <Link
          href="https://github.com/GastonWoollands"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-neutral-600 dark:text-neutral-400 hover:text-accent dark:hover:text-accent-dark transition-colors duration-200 transform hover:scale-110"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </Link>
        <Link
          href="https://www.linkedin.com/in/gaston-woollands/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-neutral-600 dark:text-neutral-400 hover:text-accent dark:hover:text-accent-dark transition-colors duration-200 transform hover:scale-110"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </Link>
        <Link
          href="https://medium.com/@g.woollands"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Medium"
          className="text-neutral-600 dark:text-neutral-400 hover:text-accent dark:hover:text-accent-dark transition-colors duration-200 transform hover:scale-110"
        >
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
          </svg>
        </Link>
      </motion.div>
      
      {/* About subsection */}
      <motion.div
        className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <h2 className="font-heading text-xl font-semibold text-primary dark:text-primary-dark mb-4">About</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto">
          Data scientist specialized in machine learning and data-driven solutions. With a strong foundation in developing scalable data systems, I focus on creating impactful projects that bridge the gap between data and business needs.
        </p>
      </motion.div>
    </motion.div>
  </section>
)

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="relative min-h-screen flex items-center bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-900 dark:to-neutral-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-[url('/images/dots.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 relative"
      >
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="text-center"
        >
          <motion.h2 
            className="font-heading text-3xl md:text-5xl font-bold text-primary dark:text-primary-dark mb-4"
            variants={fadeInUp}
          >
            Projects
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-600 dark:text-neutral-400 text-center mb-12 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            A collection of my professional work showcasing expertise in data science, machine learning, and software engineering.
          </motion.p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="bg-surface dark:bg-neutral-800/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              {/* Gradient header strip */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center mr-4`}>
                    <ProjectIcon type={project.icon} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary dark:text-primary-dark">
                    {project.title}
                  </h3>
                </div>
                <div className="space-y-4 flex-1">
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div>
                    <h4 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent/10 dark:bg-accent-dark/20 text-accent dark:text-accent-dark rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Project link */}
                <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  {project.href ? (
                    <Link
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent dark:text-accent-dark font-medium hover:underline"
                    >
                      View project
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  ) : (
                    <span className="text-neutral-400 dark:text-neutral-500 text-sm italic">
                      Case study coming soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="relative min-h-screen flex items-center bg-gradient-to-b from-secondary to-secondary/90 dark:from-neutral-950 dark:to-neutral-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-[url('/images/waves.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 relative"
      >
        <GetInTouch />
      </motion.div>
    </section>
  )
}

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <main className="relative">
      <Navbar onChatOpen={() => setIsChatOpen(true)} />
      <div className="relative z-10">
        <HomeSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Chatbot 
        isOpen={isChatOpen} 
        onOpen={() => setIsChatOpen(true)} 
        onClose={() => setIsChatOpen(false)} 
      />
    </main>
  )
}
