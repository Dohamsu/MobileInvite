import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'

export default async function Home() {
  const user = await currentUser()
  
  // 로그인된 사용자는 대시보드로 리디렉션
  if (user) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200/30 via-white to-purple-200/30">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-pink-500" />
          <span className="text-xl font-bold text-gray-800">Mobile Invite</span>
        </div>
        <Link href="/sign-in">
          <Button variant="outline" size="sm" className="text-pink-500 border-pink-500 hover:bg-pink-500 hover:text-white">
            로그인
          </Button>
        </Link>
      </header>

      <HeroSection />
      <FeaturesSection />

      {/* CTA Section */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            지금 바로 시작해보세요
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            몇 분만에 완성되는 아름다운 모바일 청첩장
          </p>
          
          <Link href="/sign-up">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0 text-lg py-6 px-12"
            >
              <Heart className="w-5 h-5 mr-2" />
              청첩장 만들기
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-gray-50 text-center">
        <p className="text-gray-500">
          © 2024 Mobile Invite. 모든 권리 보유.
        </p>
      </footer>
    </div>
  )
}