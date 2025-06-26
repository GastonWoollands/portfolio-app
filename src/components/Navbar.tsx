'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

interface NavbarProps {
  onChatOpen: () => void
}

const Navbar = ({ onChatOpen }: NavbarProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark')
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false) // Close mobile menu after navigation
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  if (!mounted) return null

  return (
    <>
      {/* Top Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="#home" className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
                priority
              />
            </Link>
            
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex items-center space-x-8">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-200"
                  >
                    {section.label}
                  </Link>
                ))}
              </div>

              {/* Chat button */}
              <button
                onClick={onChatOpen}
                className="p-2 rounded-full bg-accent dark:bg-accent-dark text-white hover:bg-accent/90 dark:hover:bg-accent-dark/90 transition-colors duration-200 group relative"
                aria-label="Open chat"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                {/* Tooltip */}
                <div className="absolute right-0 top-full mt-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  Chat with me
                </div>
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                )}
              </button>

              {/* Mobile menu button */}
              <button 
                onClick={toggleMobileMenu}
                className="md:hidden text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      )}

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.2 }}
        className="fixed top-0 right-0 h-full w-56 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg z-50 md:hidden"
      >
        <div className="flex flex-col h-full">
          {/* Mobile menu header */}
          <div className="flex items-center justify-end p-6">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Close mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu items */}
          <div className="flex-1 px-6">
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left py-4 px-2 rounded-lg transition-all duration-200 font-medium ${
                    activeSection === section.id
                      ? 'text-accent dark:text-accent-dark bg-accent/10 dark:bg-accent-dark/10'
                      : 'text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  {section.label}
                </button>
              ))}
              
              {/* Chat button inline with navigation items */}
              <button
                onClick={onChatOpen}
                className="w-full text-left py-4 px-2 rounded-lg transition-all duration-200 font-medium text-accent dark:text-accent-dark hover:bg-accent/10 dark:hover:bg-accent-dark/10"
              >
                Chat with me
              </button>
            </div>
          </div>

          {/* Mobile menu footer - now empty */}
          <div className="p-6">
          </div>
        </div>
      </motion.div>

      {/* Visual Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block"
      >
        <div className="flex flex-col items-center space-y-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group flex items-center space-x-2 focus:outline-none"
            >
              <div className="relative">
                <motion.div
                  className={`w-3 h-3 rounded-full ${
                    activeSection === section.id
                      ? 'bg-accent dark:bg-accent-dark'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  animate={{
                    scale: activeSection === section.id ? 1.5 : 1,
                  }}
                />
                <motion.div
                  className={`absolute top-1/2 left-6 transform -translate-y-1/2 text-sm font-medium whitespace-nowrap ${
                    activeSection === section.id
                      ? 'text-accent dark:text-accent-dark'
                      : 'text-gray-400 dark:text-gray-500'
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: activeSection === section.id ? 1 : 0,
                    x: activeSection === section.id ? 0 : -10,
                  }}
                >
                  {section.label}
                </motion.div>
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default Navbar 