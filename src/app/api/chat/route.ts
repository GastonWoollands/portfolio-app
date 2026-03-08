import { OpenAI } from 'openai'
import { NextResponse } from 'next/server'
import { CV_CONTEXT } from '@/content/cv-context'

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null

export async function POST(req: Request) {
  try {
    if (!openai) {
      return NextResponse.json(
        { error: 'Chat is not configured. Missing OPENAI_API_KEY.' },
        { status: 503 }
      )
    }

    const { message } = await req.json()
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required.' },
        { status: 400 }
      )
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are a recruiter assistant for Gaston Woollands's CV web page.
Only respond to questions related to Gaston's experience, skills, and projects.
Be detailed and professional in your responses.
Use the following CV/resume context to inform your answers. If the answer is not in the context, say so politely.

CV CONTEXT:
${CV_CONTEXT}`
        },
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 0,
      max_tokens: 500
    })

    return NextResponse.json({
      response: completion.choices[0].message?.content ?? 'I could not generate a response.'
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to generate response. Please try again later.' },
      { status: 500 }
    )
  }
}
