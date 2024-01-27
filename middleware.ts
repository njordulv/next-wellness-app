import createMiddleware from 'next-intl/middleware'
import { NextMiddleware } from 'next/server'

const middleware: NextMiddleware = createMiddleware({
  locales: ['en', 'de', 'fr'],
  defaultLocale: 'en',
})

export default middleware

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
