'use client'

import { Button } from "@/components/ui/button"
import { Heart, Plus, Star, Clock, Palette, Share2, Gift, Camera } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  const features = [
    {
      icon: Clock,
      title: "3분 만에 완성",
      description: "간단한 정보 입력으로 빠르게 청첩장을 제작하세요"
    },
    {
      icon: Palette,
      title: "다양한 템플릿",
      description: "50가지 이상의 아름다운 디자인 템플릿을 제공합니다"
    },
    {
      icon: Share2,
      title: "간편한 공유",
      description: "카카오톡, SNS로 손쉽게 청첩장을 공유하세요"
    },
    {
      icon: Gift,
      title: "무료 제작",
      description: "기본 기능은 무료로 이용할 수 있습니다"
    }
  ]

  const templates = [
    { id: 1, name: "로맨틱 플라워", color: "from-pink-100 to-rose-200" },
    { id: 2, name: "모던 미니멀", color: "from-gray-100 to-slate-200" },
    { id: 3, name: "빈티지 클래식", color: "from-amber-100 to-orange-200" },
    { id: 4, name: "엘레간트 골드", color: "from-yellow-100 to-amber-200" }
  ]

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-rose-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Heart className="w-20 h-20 mx-auto mb-6 text-pink-500" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
                  특별한 순간을
                </span>
                <br />
                <span className="text-gray-900">더 특별하게</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                아름다운 모바일 청첩장을 3분만에 만들어보세요. 
                소중한 사람들에게 특별한 초대를 보내세요.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link href="/create">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white px-8 py-4 text-lg">
                  <Plus className="w-5 h-5 mr-2" />
                  무료로 시작하기
                </Button>
              </Link>
              <Link href="/templates">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  <Camera className="w-5 h-5 mr-2" />
                  템플릿 보기
                </Button>
              </Link>
            </motion.div>

            {/* 평점 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center gap-2 text-sm text-gray-600"
            >
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">4.9</span>
              <span>• 10,000+ 만족한 고객</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              왜 Mobile Invite인가요?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              복잡한 과정 없이 누구나 쉽게 아름다운 청첩장을 만들 수 있습니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-pink-500" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 템플릿 미리보기 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              아름다운 템플릿
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              다양한 스타일의 템플릿 중에서 마음에 드는 디자인을 선택하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {templates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className={`h-64 rounded-2xl bg-gradient-to-br ${template.color} mb-4 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center`}>
                  <Heart className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center">
                  {template.name}
                </h3>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/templates">
              <Button variant="outline" size="lg" className="px-8">
                모든 템플릿 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-br from-pink-500 to-rose-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              지금 바로 시작해보세요
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              무료로 청첩장을 만들고 소중한 사람들을 초대하세요
            </p>
            <Link href="/create">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg bg-white text-pink-500 hover:bg-gray-50">
                <Plus className="w-5 h-5 mr-2" />
                청첩장 만들기
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}