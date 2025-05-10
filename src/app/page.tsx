'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Image from 'next/image'
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

const HomeSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-secondary/90 dark:from-secondary-dark dark:to-secondary-dark/90 pt-20 overflow-hidden">
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
          className="text-4xl md:text-6xl font-bold text-primary dark:text-primary-dark mb-6 relative"
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
        className="text-xl text-gray-600 dark:text-gray-300 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Data Scientist | MLOps Engineer | Finance
      </motion.p>
      <motion.div
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="mb-4">
          Data scientist specialized in machine learning and data-driven solutions.
        </p>
        <p>
          With a strong foundation in developing scalable data systems, I focus on creating impactful projects that bridge the gap between data and business needs.
        </p>
      </motion.div>
      <motion.div
        className="flex justify-center space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Link
          href="https://github.com/GastonWoollands"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-200 transform hover:scale-110"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </Link>
        <Link
          href="https://www.linkedin.com/in/gaston-woollands/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-200 transform hover:scale-110"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </Link>
        <Link
          href="https://medium.com/@g.woollands"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-200 transform hover:scale-110"
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M7.5 3.75a.75.75 0 00-1.5 0v16.5a.75.75 0 001.5 0V3.75zm4.5 0a.75.75 0 00-1.5 0v16.5a.75.75 0 001.5 0V3.75zm4.5 0a.75.75 0 00-1.5 0v16.5a.75.75 0 001.5 0V3.75z" />
          </svg>
        </Link>
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
    <section id="projects" className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
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
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4"
            variants={fadeInUp}
          >
            Projects
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto"
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
          <motion.div
            variants={fadeInUp}
            className="bg-white/95 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/5 dark:bg-accent-dark/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-accent dark:text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  Business Intelligence & Data
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
                    Project Description:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Design and implementation of Business Intelligence solutions to transform raw data into actionable insights. Projects include interactive dashboards, real-time analytics, and data pipelines for driving data-driven business decisions.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
                    Technologies used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Power BI', 'SQL', 'ETL', 'Data Warehousing'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/5 dark:bg-accent-dark/20 text-accent dark:text-accent-dark rounded-full text-sm hover:bg-accent/10 dark:hover:bg-accent-dark/30 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white/95 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/5 dark:bg-accent-dark/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-accent dark:text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  Quantitative Finance
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
                    Project Description:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Creation of quantitative finance models to predict derivatives pricing strategy, assess risk, and optimize portfolios. The focus is on applying advanced statistical methods and machine learning algorithms to financial data for strategic decision-making.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
                    Technologies used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Pandas', 'NumPy', 'SciPy', 'QuantLib'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/5 dark:bg-accent-dark/20 text-accent dark:text-accent-dark rounded-full text-sm hover:bg-accent/10 dark:hover:bg-accent-dark/30 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white/95 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/5 dark:bg-accent-dark/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-accent dark:text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  MLOps Pipelines
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
                    Project Description:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Design and deployment of robust ETL workflows and machine learning pipelines to support scalable, reproducible, and automated ML systems. Emphasis on data quality, versioning, and seamless integration from raw data to model deployment.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
                    Technologies used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Apache Flyte', 'MLflow', 'Spark', 'Python', 'Docker', 'Kubernetes'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/5 dark:bg-accent-dark/20 text-accent dark:text-accent-dark rounded-full text-sm hover:bg-accent/10 dark:hover:bg-accent-dark/30 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
    <section id="contact" className="relative min-h-screen flex items-center bg-gradient-to-b from-secondary to-secondary/90 dark:from-secondary-dark dark:to-secondary-dark/90 overflow-hidden">
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
