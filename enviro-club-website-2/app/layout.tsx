import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'SOFT', 'WONK'],
})

export const metadata: Metadata = {
  title: 'Enviro Club — Growing Ideas. Growing Impact.',
  description:
    'A student-led community working towards a greener campus and a more sustainable future. Environment. Community. Action.',
  generator: 'v0.app',
  keywords: [
    'Enviro Club',
    'environment',
    'sustainability',
    'student club',
    'community service',
    'campus',
  ],
  openGraph: {
    title: 'Enviro Club — Growing Ideas. Growing Impact.',
    description:
      'A student-led community working towards a greener campus and a more sustainable future.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f2ede0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased paper-grain">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
