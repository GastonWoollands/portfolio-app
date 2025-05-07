import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Validate environment variables
if (!process.env.RESEND_API_KEY) {
  console.error('RESEND_API_KEY is not set in environment variables')
}

// Test email configuration
async function testEmailConfiguration() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <contact@gwoollands.com>',
      to: ['contact@gwoollands.com'],
      subject: 'Test Email Configuration',
      html: '<p>This is a test email to verify your Resend configuration.</p>',
    })

    if (error) {
      console.error('Email configuration test failed:', error)
      return false
    }

    console.log('Email configuration test successful:', data)
    return true
  } catch (error) {
    console.error('Error testing email configuration:', error)
    return false
  }
}

export async function POST(request: Request) {
  try {
    // Test email configuration first
    const isConfigured = await testEmailConfiguration()
    if (!isConfigured) {
      return NextResponse.json(
        { error: 'Email service is not properly configured. Please check your Resend setup.' },
        { status: 500 }
      )
    }

    const { name, email, message } = await request.json()

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Log the attempt to send email
    console.log('Attempting to send email:', {
      from: 'contact@gwoollands.com',
      to: 'contact@gwoollands.com',
      subject: `New Contact Form Submission from ${name}`,
    })

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <contact@gwoollands.com>',
      to: ['contact@gwoollands.com'],
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from your website's contact form.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Error sending email:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    // Log successful email send
    console.log('Email sent successfully:', data)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error in contact route:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    )
  }
} 