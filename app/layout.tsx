import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Dipsan Bhattarai | AI Engineer',
  description: 'Master of Applied AI student at Deakin University and AI Development Intern at PowerPlus Energy. Experience in RAG, LLMs, federated learning and full-stack development.',
  keywords: ['AI Engineer', 'Machine Learning', 'Software Developer', 'Python', 'LLM', 'Deep Learning'],
  authors: [{ name: 'Dipsan Bhattarai' }],
  openGraph: {
    title: 'Dipsan Bhattarai | AI Engineer',
    description: 'Building AI systems that create meaningful, responsible impact.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#f6f5ef',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
