import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  let email

  try {
    const requestBody = await request.json()
    email = requestBody.email
    if (!email) throw new Error('Email is required')

    await sql`INSERT INTO subscribers (email) VALUES (${email});`
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }

  return NextResponse.json(
    { message: 'Email successfully added', email },
    { status: 200 }
  )
}
