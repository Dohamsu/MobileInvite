'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Eye } from "lucide-react"

const templates = [
  {
    id: 1,
    name: "로맨틱 가든",
    description: "꽃과 자연을 테마로 한 로맨틱한 디자인",
    image: "bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300",
    color: "pink"
  },
  {
    id: 2,
    name: "모던 미니멀",
    description: "깔끔하고 세련된 미니멀 디자인",
    image: "bg-gradient-to-br from-gray-100 via-slate-50 to-gray-200",
    color: "gray"
  },
  {
    id: 3,
    name: "빈티지 클래식",
    description: "고전적이고 우아한 빈티지 스타일",
    image: "bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-200",
    color: "amber"
  },
  {
    id: 4,
    name: "파스텔 드림",
    description: "부드럽고 몽환적인 파스텔 컬러",
    image: "bg-gradient-to-br from-purple-100 via-indigo-50 to-blue-200",
    color: "purple"
  },
  {
    id: 5,
    name: "엘레간트 골드",
    description: "고급스러운 골드 포인트 디자인",
    image: "bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-200",
    color: "yellow"
  }
]

export default function DesignSampleSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % templates.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + templates.length) % templates.length)
  }

  const getVisibleTemplates = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % templates.length
      visible.push(templates[index])
    }
    return visible
  }

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            다양한 디자인 템플릿
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            여러분의 스타일에 맞는 템플릿을 선택하세요. 
            모든 템플릿은 모바일에 최적화되어 있습니다.
          </p>
        </motion.div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative">
          <div className="flex items-center justify-center gap-6 mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full w-12 h-12"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-6 overflow-hidden">
              {getVisibleTemplates().map((template, index) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: index === 1 ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                  className={`relative w-64 h-96 rounded-2xl shadow-lg overflow-hidden cursor-pointer group ${
                    index === 1 ? 'ring-4 ring-pink-300' : ''
                  }`}
                >
                  <div className={`w-full h-full ${template.image} p-6 flex flex-col justify-between`}>
                    {/* Mock phone interface */}
                    <div className="bg-white/90 rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-pink-400 rounded-full mx-auto mb-2"></div>
                      <div className="h-2 bg-gray-300 rounded mb-1"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4 mx-auto"></div>
                    </div>
                    
                    <div className="bg-white/90 rounded-lg p-4">
                      <div className="h-3 bg-gray-300 rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Button 
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      size="sm"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      미리보기
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full w-12 h-12"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {getVisibleTemplates()[1]?.name}
            </h3>
            <p className="text-gray-600 mb-4">
              {getVisibleTemplates()[1]?.description}
            </p>
            <Button variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              샘플 보기
            </Button>
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative w-full h-80 rounded-2xl shadow-lg overflow-hidden group"
            >
              <div className={`w-full h-full ${template.image} p-4 flex flex-col justify-between`}>
                <div className="bg-white/90 rounded-lg p-3 text-center">
                  <div className="w-6 h-6 bg-pink-400 rounded-full mx-auto mb-2"></div>
                  <div className="h-2 bg-gray-300 rounded mb-1"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/4 mx-auto"></div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">{template.name}</h4>
                  <Button size="sm" className="w-full">
                    <Eye className="w-4 h-4 mr-2" />
                    미리보기
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            더 많은 템플릿이 준비되어 있어요!
          </p>
          <Button size="lg">
            모든 템플릿 보기
          </Button>
        </motion.div>
      </div>
    </section>
  )
}