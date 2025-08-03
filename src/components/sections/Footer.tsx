'use client'

import { Heart, Instagram, Mail, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-pink-400 mr-3" />
              <h3 className="text-2xl font-bold">Mobile Invite</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              당신의 특별한 날을 더 특별하게 만드는 
              모바일 청첩장 서비스입니다.
              <br />
              5분만에 감성적이고 아름다운 청첩장을 만들어보세요.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/mobileinvite" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-pink-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:hello@mobileinvite.com"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-pink-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  청첩장 만들기
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  템플릿 보기
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  가격 안내
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  사용법 가이드
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">고객지원</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  문의하기
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  사용자 가이드
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  기술 지원
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">연락처</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  hello@mobileinvite.com
                </p>
                <p className="flex items-center">
                  <Instagram className="w-4 h-4 mr-2" />
                  @mobileinvite
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">운영시간</h4>
              <div className="space-y-2 text-gray-300">
                <p>평일: 오전 9시 - 오후 6시</p>
                <p>주말: 오전 10시 - 오후 4시</p>
                <p className="text-sm text-gray-400">
                  * 공휴일 제외, 이메일 문의는 24시간 접수
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <a 
                href="#" 
                className="text-gray-400 hover:text-pink-400 transition-colors text-sm flex items-center"
              >
                이용약관
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-pink-400 transition-colors text-sm flex items-center"
              >
                개인정보처리방침
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-pink-400 transition-colors text-sm flex items-center"
              >
                쿠키정책
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
            
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>&copy; 2024 Mobile Invite. All rights reserved.</p>
              <p className="mt-1">Made with ❤️ for couples everywhere</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}