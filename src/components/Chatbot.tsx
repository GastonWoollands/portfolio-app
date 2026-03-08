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
  onOpen: () => void
}

export default function Chatbot({ isOpen, onClose, onOpen }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
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
      const assistantMessage: Message = { role: 'assistant', content: data.response }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          aria-label="Open chat"
          className="fixed bottom-4 right-4 z-50 bg-accent dark:bg-accent-dark text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
        >
          <div className="relative">
            {/* Pulsing background effect */}
            <motion.div
              className="absolute inset-0 bg-accent/20 dark:bg-accent-dark/20 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Main chat icon */}
            <svg
              className="w-8 h-8 transform group-hover:scale-110 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
          {/* Tooltip */}
          <div className="absolute right-0 bottom-0 mb-2 mr-16 px-2 py-1 bg-neutral-800 dark:bg-neutral-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Chat with me
          </div>
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-4 right-4 left-4 z-50 w-[calc(100%-2rem)] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
          >
            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-xl w-full max-h-[600px] flex flex-col">
              <div className="p-4 border-b border-neutral-200 dark:border-neutral-700">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary dark:text-primary-dark">
                      Chat with Gaston&apos;s Assistant
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Ask about my experience and projects.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    aria-label="Close chat"
                    className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors duration-200 p-1 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50 dark:bg-neutral-900">
                <AnimatePresence>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.role === 'user'
                            ? 'bg-accent dark:bg-accent-dark text-white'
                            : 'bg-white dark:bg-neutral-800 text-primary dark:text-primary-dark shadow-sm border border-neutral-200 dark:border-neutral-700'
                        }`}
                      >
                        <ReactMarkdown className="prose dark:prose-invert max-w-none prose-sm">
                          {message.content}
                        </ReactMarkdown>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white dark:bg-neutral-800 rounded-lg p-3 shadow-sm border border-neutral-200 dark:border-neutral-700">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce delay-100" />
                        <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={handleSubmit} className="p-4 border-t border-neutral-200 dark:border-neutral-700">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about Gaston's experience..."
                    className="flex-1 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-primary dark:text-primary-dark px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-800"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-accent dark:bg-accent-dark text-white px-4 py-2 rounded-lg font-medium hover:bg-accent/90 dark:hover:bg-accent-dark/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 