import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const requestBody = await request.json()
    const checkoutData = requestBody.checkoutData

    if (!checkoutData) throw new Error('Checkout data is required')

    const {
      cardNumber,
      expDate,
      cvv,
      firstName,
      lastName,
      email,
      total,
      totalDiscount,
    } = checkoutData

    if (
      !cardNumber ||
      !expDate ||
      !cvv ||
      !firstName ||
      !lastName ||
      !email ||
      !total ||
      !totalDiscount
    ) {
      throw new Error('All fields are required')
    }

    await sql`
      INSERT INTO Checkout (cardNumber, expDate, cvv, firstName, lastName, email, total, totalDiscount)
      VALUES (${cardNumber}, ${expDate}, ${cvv}, ${firstName}, ${lastName}, ${email}, ${total}, ${totalDiscount});
    `

    return NextResponse.json(
      { message: 'Checkout successfully added', checkoutData },
      { status: 200 }
    )
  } catch (error) {
    let errorMessage = 'An unexpected error occurred'

    if (error instanceof Error) {
      errorMessage = error.message
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
