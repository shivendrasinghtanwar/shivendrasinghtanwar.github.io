import type { Metadata } from 'next'
import { Sora, Instrument_Sans, JetBrains_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import ThemeProvider from '@/components/ThemeProvider'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Shivendra Singh Tanwar — Technology Lead',
  description:
    'Technology Lead specialising in engineering leadership, distributed systems, and open-source development. Based in Hyderabad, India.',
  keywords: ['technology lead', 'engineering leader', 'software engineer', 'Node.js', 'Kotlin', 'fintech'],
  authors: [{ name: 'Shivendra Singh Tanwar', url: 'https://shivendrasinghtanwar.github.io' }],
  openGraph: {
    title: 'Shivendra Singh Tanwar — Technology Lead',
    description: 'Technology Lead · Hyderabad, India',
    url: 'https://shivendrasinghtanwar.github.io',
    siteName: 'Shivendra Singh Tanwar',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased relative">
        <ThemeProvider>
          <CustomCursor />
          <Navbar />
          <div className="relative z-10 pt-16">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
