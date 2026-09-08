'use client'

import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (isSubmitting) return

      setIsSubmitting(true)
      setStatus({ type: null, message: '' })

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
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
          message:
            error instanceof Error ? error.message : 'Failed to send message',
        })
      } finally {
        setIsSubmitting(false)
      }
    },
    [formData, isSubmitting]
  )

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-8" noValidate>
      <div>
        <label htmlFor="name" className="block font-mono text-[11px] tracking-[0.1em] text-muted dark:text-muted-dark mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="field"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-mono text-[11px] tracking-[0.1em] text-muted dark:text-muted-dark mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="field"
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-mono text-[11px] tracking-[0.1em] text-muted dark:text-muted-dark mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="field resize-none"
        />
      </div>
      <AnimatePresence mode="wait">
        {status.type && (
          <motion.p
            key={status.type}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-mono text-[12px] text-ink dark:text-paper"
          >
            {status.message}
          </motion.p>
        )}
      </AnimatePresence>
      <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-40">
        {isSubmitting ? 'Sending…' : 'Send'}
      </button>
    </form>
  )
}
