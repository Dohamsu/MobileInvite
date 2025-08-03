'use client'

import { motion } from "framer-motion"
import { Palette, FileText, Share2, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Palette,
    title: "템플릿 선택",
    description: "다양한 감성적인 템플릿 중에서 마음에 드는 디자인을 선택하세요",
    color: "text-pink-500"
  },
  {
    icon: FileText,
    title: "사진과 정보 입력",
    description: "커플 사진과 결혼식 정보를 간단하게 입력하면 청첩장이 완성됩니다",
    color: "text-purple-500"
  },
  {
    icon: Share2,
    title: "공유 링크 생성",
    description: "카카오톡이나 문자로 쉽게 공유할 수 있는 링크를 자동으로 생성해드려요",
    color: "text-blue-500"
  },
  {
    icon: CheckCircle,
    title: "하객 RSVP 확인",
    description: "참석 여부와 축하 메시지를 실시간으로 확인하고 관리할 수 있어요",
    color: "text-green-500"
  }
]

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            어떻게 만들어지나요?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            복잡한 과정 없이 4단계만 거치면 나만의 감성 청첩장이 완성됩니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              이제 종이 청첩장은 안녕! 📱
            </h3>
            <p className="text-lg text-gray-600">
              환경을 생각하고, 비용을 절약하며, 더 많은 사람들과 쉽게 공유할 수 있는 
              <br className="hidden sm:block" />
              디지털 청첩장으로 특별한 순간을 더욱 특별하게 만들어보세요.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}