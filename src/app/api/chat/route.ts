import { Pinecone } from '@pinecone-database/pinecone'
import { OpenAI } from 'openai'
import { NextResponse } from 'next/server'

// Validate environment variables
const requiredEnvVars = {
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  PINECONE_API_KEY: process.env.PINECONE_API_KEY,
}

const missingVars = Object.entries(requiredEnvVars)
  .filter(([_, value]) => !value)
  .map(([key]) => key)

// Only initialize clients if all environment variables are present
let openai: OpenAI | null = null
let pinecone: Pinecone | null = null
let index: ReturnType<Pinecone['Index']> | null = null

if (missingVars.length === 0) {
  try {
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
    })

    pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY!,
    })

    index = pinecone.Index('cv-data-2')
  } catch (error) {
    console.error('Failed to initialize Pinecone:', error)
  }
} else {
  console.error('Missing required environment variables:', missingVars.join(', '))
}

export async function POST(req: Request) {
  try {
    // Check if all required environment variables are set
    if (missingVars.length > 0) {
      return NextResponse.json(
        { error: `Missing required environment variables: ${missingVars.join(', ')}` },
        { status: 500 }
      )
    }

    const { message } = await req.json()

    if (!openai || !pinecone || !index) {
      return NextResponse.json(
        { error: 'Service not properly initialized. Please check your environment variables and try again.' },
        { status: 500 }
      )
    }

    // Get relevant context from Pinecone
    let context = ''
    try {
      const queryResponse = await index.query({
        vector: await getEmbedding(message),
        topK: 3,
        includeMetadata: true,
      })

      context = queryResponse.matches
        ?.map((match: any) => match.metadata?.text)
        .join('\n\n') || ''
    } catch (error) {
      console.error('Error querying Pinecone:', error)
      return NextResponse.json(
        { error: 'Failed to retrieve context from Pinecone. Please try again later.' },
        { status: 500 }
      )
    }

    // Generate response using OpenAI
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: `You are a recruiter assistant for Gaston Woollands's CV web page. 
            Only respond to questions related to Gaston's experience, skills, and projects.
            Be detailed and professional in your responses.
            Use the following context to inform your answers:
            ${context}`
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0,
        max_tokens: 500,
      })

      return NextResponse.json({ 
        response: completion.choices[0].message.content 
      })
    } catch (error) {
      console.error('Error with OpenAI:', error)
      return NextResponse.json(
        { error: 'Failed to generate response. Please try again later.' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('General error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}

async function getEmbedding(text: string): Promise<number[]> {
  if (!openai) {
    throw new Error('OpenAI client not initialized')
  }
  
  const response = await openai.embeddings.create({
    model: 'text-embedding-ada-002',
    input: text,
  })
  return response.data[0].embedding
} 