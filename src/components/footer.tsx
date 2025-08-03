import Link from 'next/link'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 브랜드 섹션 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-pink-500" />
              <span className="font-bold text-xl bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
                Mobile Invite
              </span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              아름다운 모바일 청첩장을 쉽고 빠르게 만들어보세요. 
              소중한 순간을 더욱 특별하게 공유할 수 있습니다.
            </p>
            <div className="flex flex-col space-y-2 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1588-0000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@mobileinvite.kr</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>서울특별시 강남구 테헤란로 123</span>
              </div>
            </div>
          </div>

          {/* 서비스 링크 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">서비스</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/templates" className="text-gray-600 hover:text-pink-500 transition-colors">
                  템플릿
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-pink-500 transition-colors">
                  갤러리
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-pink-500 transition-colors">
                  요금안내
                </Link>
              </li>
              <li>
                <Link href="/create" className="text-gray-600 hover:text-pink-500 transition-colors">
                  청첩장 만들기
                </Link>
              </li>
            </ul>
          </div>

          {/* 고객지원 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">고객지원</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/support/faq" className="text-gray-600 hover:text-pink-500 transition-colors">
                  자주묻는질문
                </Link>
              </li>
              <li>
                <Link href="/support/guide" className="text-gray-600 hover:text-pink-500 transition-colors">
                  이용가이드
                </Link>
              </li>
              <li>
                <Link href="/support/contact" className="text-gray-600 hover:text-pink-500 transition-colors">
                  문의하기
                </Link>
              </li>
              <li>
                <Link href="/support/notice" className="text-gray-600 hover:text-pink-500 transition-colors">
                  공지사항
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500">
              © 2025 Mobile Invite. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-sm text-gray-500 hover:text-pink-500 transition-colors">
                이용약관
              </Link>
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-pink-500 transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/business" className="text-sm text-gray-500 hover:text-pink-500 transition-colors">
                사업자정보
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}