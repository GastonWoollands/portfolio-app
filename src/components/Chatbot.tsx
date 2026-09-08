'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ReactMarkdown from 'react-markdown'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatbotProps {
  isOpen: boolean
  onClose: () => void
}

export default function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      })
      if (!response.ok) throw new Error('Failed to get response')
      const data = await response.json()
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.response },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-4 right-4 left-4 z-50 w-[calc(100%-2rem)] max-w-md md:left-auto"
        >
          <div className="bg-paper dark:bg-paper-dark border border-hairline dark:border-hairline-dark flex flex-col max-h-[520px]">
            <div className="flex items-start justify-between px-4 py-3 border-b border-hairline dark:border-hairline-dark">
              <div>
                <p className="font-mono text-[12px] tracking-[0.1em] text-ink dark:text-paper">
                  ask
                </p>
                <p className="text-xs text-muted dark:text-muted-dark mt-1">
                  Experience, skills, and projects.
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close chat"
                className="nav-link pt-0.5"
              >
                close
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-[180px]">
              {messages.length === 0 && (
                <p className="text-sm text-muted dark:text-muted-dark">
                  Ask about MetriCow, Sector Panel, or recent roles.
                </p>
              )}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`text-sm leading-relaxed ${
                    message.role === 'user'
                      ? 'text-ink dark:text-paper'
                      : 'text-muted dark:text-muted-dark'
                  }`}
                >
                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase mr-2">
                    {message.role === 'user' ? 'you' : 'gw'}
                  </span>
                  <ReactMarkdown className="prose prose-sm dark:prose-invert max-w-none inline">
                    {message.content}
                  </ReactMarkdown>
                </div>
              ))}
              {isLoading && (
                <p className="font-mono text-[12px] text-muted dark:text-muted-dark">
                  …
                </p>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={handleSubmit}
              className="border-t border-hairline dark:border-hairline-dark px-4 py-3 flex gap-3"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Gaston’s work…"
                className="field py-2 flex-1"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="btn-ghost px-0 disabled:opacity-40"
              >
                Send
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
