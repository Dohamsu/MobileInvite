import type { Metadata } from 'next'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Navigation } from '@/components/navigation'
import Footer from '@/components/sections/Footer'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Mobile Invite - 모바일 청첩장',
  description: '아름다운 모바일 청첩장을 쉽게 만드세요',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="ko">
        <head>
          <link href="https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/variable/woff2/SUIT-Variable.css" rel="stylesheet" />
          <style>
            {`
              body {
                font-family: 'SUIT Variable', sans-serif;
              }
            `}
          </style>
        </head>
        <body className="antialiased min-h-screen flex flex-col">
          <ThemeProvider>
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}