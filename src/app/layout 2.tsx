import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mobile Invite - 특별한 순간을 위한 모바일 청첩장',
  description: '아름다운 템플릿과 간편한 편집으로 당신만의 특별한 초대장을 만들어보세요. 무료로 시작하고 3분만에 완성하세요.',
  keywords: ['모바일청첩장', '청첩장', '초대장', '결혼', '웨딩', '모바일초대장'],
  openGraph: {
    title: 'Mobile Invite - 특별한 순간을 위한 모바일 청첩장',
    description: '아름다운 템플릿과 간편한 편집으로 당신만의 특별한 초대장을 만들어보세요.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="ko">
        <body className="antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}