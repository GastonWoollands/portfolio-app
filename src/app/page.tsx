'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Chatbot from '@/components/Chatbot'
import Hero from '@/components/sections/Hero'
import Work from '@/components/sections/Work'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <main>
      <Navbar onChatOpen={() => setIsChatOpen(true)} />
      <Hero />
      <Work />
      <Experience />
      <Contact />
      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </main>
  )
}
