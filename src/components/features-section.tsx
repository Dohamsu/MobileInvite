'use client'

import { Smartphone, Share2, Palette } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Smartphone,
    title: "모바일 최적화",
    description: "스마트폰에서 완벽하게 보이는 반응형 디자인",
    gradient: "from-pink-500 to-pink-400"
  },
  {
    icon: Palette,
    title: "다양한 템플릿",
    description: "트렌디하고 아름다운 템플릿을 자유롭게 선택",
    gradient: "from-purple-500 to-purple-400"
  },
  {
    icon: Share2,
    title: "간편한 공유",
    description: "링크 하나로 쉽게 공유하고 방문자 확인 가능",
    gradient: "from-cyan-500 to-cyan-400"
  }
]

export function FeaturesSection() {
  return (
    <section className="px-6 py-12 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12"
        >
          왜 Mobile Invite를 선택해야 할까요?
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}