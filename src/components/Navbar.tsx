'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { navItems, site } from '@/content/site'

interface NavbarProps {
  onChatOpen: () => void
}

const Navbar = ({ onChatOpen }: NavbarProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const isDark = saved === 'dark'
    setTheme(isDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  useEffect(() => {
    const ids = ['home', ...navItems.map((item) => item.id)]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.2 }
    )

    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-hairline dark:border-hairline-dark bg-paper/90 dark:bg-paper-dark/90 backdrop-blur-sm">
        <div className="page-shell flex items-center justify-between h-14">
          <Link
            href="#home"
            className="font-mono text-[13px] tracking-[0.12em] text-ink dark:text-paper"
            aria-label="Go to home"
          >
            {site.wordmark}
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            <button onClick={onChatOpen} className="nav-link">
              ask
            </button>
            <button
              onClick={toggleTheme}
              className="nav-link"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? 'dark' : 'light'}
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="md:hidden nav-link"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? 'close' : 'menu'}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-paper dark:bg-paper-dark pt-14">
          <div className="page-shell flex flex-col gap-2 py-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left py-3 font-heading text-3xl ${
                  activeSection === item.id
                    ? 'text-ink dark:text-paper'
                    : 'text-muted dark:text-muted-dark'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onChatOpen()
                setIsMobileMenuOpen(false)
              }}
              className="text-left py-3 font-heading text-3xl text-ink dark:text-paper"
            >
              ask
            </button>
            <button
              onClick={toggleTheme}
              className="text-left py-3 font-mono text-[13px] tracking-[0.08em] text-muted dark:text-muted-dark"
            >
              {theme === 'light' ? 'dark' : 'light'}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
