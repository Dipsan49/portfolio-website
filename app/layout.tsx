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
  title: 'Dipsan Bhattarai | AI Engineer & Researcher',
  description: 'Computer Science graduate pursuing Masters in Applied AI at Deakin University. Experienced in LLMs, Federated Learning, and full-stack development.',
  keywords: ['AI Engineer', 'Machine Learning', 'Software Developer', 'Python', 'LLM', 'Deep Learning'],
  authors: [{ name: 'Dipsan Bhattarai' }],
  openGraph: {
    title: 'Dipsan Bhattarai | AI Engineer & Researcher',
    description: 'Building AI systems that create meaningful, responsible impact.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0d1117',
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
