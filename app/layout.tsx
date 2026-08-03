import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Source_Serif_4 } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BioLabs AI HealthHack 2026',
  description:
    'BioLabs AI HealthHack 2026 is a national-level innovation challenge that brings together students, researchers, developers, healthcare professionals, and innovators to solve real-world healthcare problems using Artificial Intelligence and emerging technologies.',
  generator: 'v0.app',
  keywords: [
    'BioLabs',
    'AI HealthHack 2026',
    'Healix Technologies',
    'healthcare hackathon',
    'AI healthcare',
    'innovation challenge',
  ],
  openGraph: {
    title: 'BioLabs AI HealthHack 2026',
    description:
      'Innovate. Research. Present. Win. A national-level AI & Healthcare innovation competition.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0c2a55',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light ${inter.variable} ${sourceSerif.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
