import type { Metadata } from 'next'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Navigation } from '@/components/navigation'
import Footer from '@/components/sections/Footer'

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
        <body className="antialiased min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}