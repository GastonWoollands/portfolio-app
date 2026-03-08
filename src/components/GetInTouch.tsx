'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (isSubmitting) return
    
    setIsSubmitting(true)
    setStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus({
        type: 'success',
        message: "Message sent. I'll get back within 24 hours.",
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message',
      })
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, isSubmitting])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white dark:bg-neutral-800/95 rounded-2xl shadow-xl p-8 md:p-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-2 text-primary dark:text-primary-dark">
            Get in Touch
          </h2>
          <p className="text-center text-neutral-500 dark:text-neutral-400 mb-6">
            For consulting and project inquiries.
          </p>
          <div className="text-center mb-8">
            <p className="text-neutral-600 dark:text-neutral-400 mb-2">You can also reach me directly at:</p>
            <a 
              href="mailto:contact@gwoollands.com" 
              className="text-accent dark:text-accent-dark font-semibold hover:underline"
            >
              contact@gwoollands.com
            </a>
          </div>
          <form 
            onSubmit={handleSubmit} 
            className="space-y-6" 
            noValidate
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-primary dark:text-primary-dark focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-800"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-primary dark:text-primary-dark focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-800"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-primary dark:text-primary-dark focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-800 resize-none"
              />
            </div>
            <AnimatePresence mode="wait">
              {status.type && (
                <motion.div
                  key={status.type}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 border border-blue-200 dark:border-blue-800'
                      : 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-200 border border-red-200 dark:border-red-800'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {status.type === 'success' ? (
                      <svg
                        className="w-5 h-5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                    <span>{status.message}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent dark:bg-accent-dark text-white py-3 px-6 rounded-lg font-semibold hover:bg-accent/90 dark:hover:bg-accent-dark/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Sending...</span>
                </>
              ) : (
                <span>Send Message</span>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
} 