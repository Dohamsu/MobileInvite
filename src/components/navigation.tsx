'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heart, Menu, X } from 'lucide-react'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-pink-500" />
            <span className="font-bold text-xl bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              Mobile Invite
            </span>
          </Link>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/templates" 
              className="text-gray-700 hover:text-pink-500 transition-colors"
            >
              템플릿
            </Link>
            <Link 
              href="/gallery" 
              className="text-gray-700 hover:text-pink-500 transition-colors"
            >
              갤러리
            </Link>
            <Link 
              href="/pricing" 
              className="text-gray-700 hover:text-pink-500 transition-colors"
            >
              요금안내
            </Link>
            <Link 
              href="/support" 
              className="text-gray-700 hover:text-pink-500 transition-colors"
            >
              고객지원
            </Link>
          </div>

          {/* 로그인/회원가입 버튼 (데스크톱) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">로그인</Button>
            </Link>
            <Link href="/create">
              <Button className="bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500">
                청첩장 만들기
              </Button>
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-pink-500 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/templates" 
                className="text-gray-700 hover:text-pink-500 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                템플릿
              </Link>
              <Link 
                href="/gallery" 
                className="text-gray-700 hover:text-pink-500 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                갤러리
              </Link>
              <Link 
                href="/pricing" 
                className="text-gray-700 hover:text-pink-500 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                요금안내
              </Link>
              <Link 
                href="/support" 
                className="text-gray-700 hover:text-pink-500 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                고객지원
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">로그인</Button>
                </Link>
                <Link href="/create" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500">
                    청첩장 만들기
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}