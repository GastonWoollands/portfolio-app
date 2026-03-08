# Professional Portfolio

A modern, responsive portfolio website built with Next.js, featuring a chatbot powered by OpenAI that answers questions using your CV as context.

## Features

- 🎨 Modern UI with dark/light mode
- 🤖 AI-powered chatbot for CV queries
- 📱 Fully responsive design
- 📧 Contact form with email integration
- ⚡ Fast and optimized performance

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **AI Integration**: OpenAI
- **Email**: Resend
- **Deployment**: Vercel

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with:
   ```
   OPENAI_API_KEY=your_openai_key
   RESEND_API_KEY=your_resend_key
   EMAIL_RECIPIENT=your_email
   ```
   The chatbot uses your CV from `src/content/cv-context.ts` as context (no Pinecone required).
4. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

The project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel and add the required environment variables.

## License

MIT
