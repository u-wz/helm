import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import xss from 'xss'
import validator from 'validator'

// Initialize Resend lazily to prevent build crashes if API key is missing
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('RESEND_API_KEY is missing. Feedback emails will not be sent.')
    return null
  }
  return new Resend(apiKey)
}

// Simple in-memory rate limiting
const submissions = new Map<string, number[]>()

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 60 * 1000 // 1 minute
  const maxRequests = 3

  if (!submissions.has(ip)) {
    submissions.set(ip, [])
  }

  const userSubmissions = submissions.get(ip)!
  const recentSubmissions = userSubmissions.filter(time => now - time < windowMs)
  
  if (recentSubmissions.length >= maxRequests) {
    return false
  }

  recentSubmissions.push(now)
  submissions.set(ip, recentSubmissions)
  return true
}

export async function POST(request: Request) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Rate limit check
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a minute.' },
        { status: 429 }
      )
    }

    const { name, email, category, message } = await request.json()

    // Basic Validation
    if (!name || !email || !category || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Length validation
    if (name.length > 100 || message.length > 2000) {
      return NextResponse.json(
        { error: 'Input is too long' },
        { status: 400 }
      )
    }

    // Sanitize inputs (prevent XSS)
    const sanitizedName = xss(name.trim())
    const sanitizedMessage = xss(message.trim())
    const sanitizedCategory = xss(category)

    // Allowed survey categories whitelist
    const allowedCategories = ['roadmap', 'content', 'contribution', 'technical']
    if (!allowedCategories.includes(sanitizedCategory)) {
      return NextResponse.json(
        { error: 'Invalid survey category' },
        { status: 400 }
      )
    }

    const resend = getResend()
    if (!resend) {
      return NextResponse.json(
        { error: 'Email service is not configured. Please try again later.' },
        { status: 503 }
      )
    }

    const feedbackEmail = process.env.FEEDBACK_EMAIL || 'onboarding@resend.dev'

    // Send email with survey formatting
    const { error } = await resend.emails.send({
      from: 'Helm Survey <onboarding@resend.dev>',
      to: feedbackEmail,
      replyTo: email,
      subject: `[HELM SURVEY] ${sanitizedCategory.toUpperCase()} - ${sanitizedName}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: auto; border: 8px solid black; padding: 40px; background-color: #FFFFF0; color: #0A0A0A;">
          <div style="background-color: #FFE500; border: 4px solid black; padding: 20px; margin-bottom: 30px; text-align: center;">
            <h1 style="margin: 0; text-transform: uppercase; font-size: 24px;">New Developer Insight ⚡</h1>
          </div>
          
          <div style="margin-bottom: 25px;">
            <p style="text-transform: uppercase; font-weight: 900; font-size: 12px; margin-bottom: 5px; color: #666;">Category</p>
            <div style="display: inline-block; padding: 5px 15px; border: 2px solid black; font-weight: 900; background-color: #4361EE; color: white; text-transform: uppercase;">
              ${sanitizedCategory}
            </div>
          </div>

          <div style="margin-bottom: 25px;">
            <p style="text-transform: uppercase; font-weight: 900; font-size: 12px; margin-bottom: 5px; color: #666;">Contributor</p>
            <p style="font-size: 18px; font-weight: 700; margin: 0;">${sanitizedName}</p>
            <p style="font-size: 14px; color: #3A3A3A; margin: 0;">${email}</p>
          </div>

          <div style="margin-bottom: 30px; padding: 20px; border: 4px solid black; background-color: white; shadow: 4px 4px 0px 0px #0A0A0A;">
            <p style="text-transform: uppercase; font-weight: 900; font-size: 12px; margin-bottom: 15px; color: #666;">The Insight</p>
            <p style="font-size: 16px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${sanitizedMessage}</p>
          </div>

          <div style="border-top: 4px solid black; padding-top: 20px; font-size: 10px; color: #666; text-transform: uppercase; font-weight: 700;">
            Sub-IP: ${ip} | Cairo Time: ${new Date().toLocaleString('en-EG', { timeZone: 'Africa/Cairo' })}
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend Error:', error)
      return NextResponse.json({ error: 'Failed to send survey result' }, { status: 500 })
    }

    return NextResponse.json({ 
      success: true,
      message: 'Survey response recorded!' 
    })

  } catch (error) {
    console.error('Survey processing error:', error)
    return NextResponse.json(
      { error: 'Failed to process response.' },
      { status: 500 }
    )
  }
}
