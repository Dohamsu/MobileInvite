'use client'

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "김*희",
    rating: 5,
    comment: "정말 예쁘고 간편해요! 하객들도 모두 만족했습니다. 특히 RSVP 기능이 너무 편리했어요.",
    date: "2024.01.15",
    template: "로맨틱 가든"
  },
  {
    id: 2,
    name: "박*수",
    rating: 5,
    comment: "디자인이 정말 세련되고 모바일에서 보기 완벽해요. 비용도 절약되고 환경에도 좋고!",
    date: "2024.01.28",
    template: "모던 미니멀"
  },
  {
    id: 3,
    name: "이*영",
    rating: 5,
    comment: "5분만에 정말 청첩장이 완성되네요. 사진 업로드도 쉽고 공유도 간단했습니다.",
    date: "2024.02.03",
    template: "빈티지 클래식"
  },
  {
    id: 4,
    name: "최*민",
    rating: 5,
    comment: "하객들이 참석 여부를 바로바로 알려줘서 준비하기 정말 편했어요. 추천합니다!",
    date: "2024.02.14",
    template: "파스텔 드림"
  },
  {
    id: 5,
    name: "정*아",
    rating: 5,
    comment: "감성적이고 예쁜 템플릿들이 많아요. 우리 결혼식 분위기와 딱 맞았습니다.",
    date: "2024.02.20",
    template: "엘레간트 골드"
  }
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

export default function ReviewSection() {
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
            신혼부부들의 생생한 후기
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            이미 많은 커플들이 Mobile Invite로 특별한 순간을 더욱 특별하게 만들었어요
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {reviews.slice(0, 3).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 relative hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-4 right-4 w-6 h-6 text-pink-200" />
              
              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                &ldquo;{review.comment}&rdquo;
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.template} 템플릿</p>
                  </div>
                  <p className="text-sm text-gray-400">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden space-y-6 mb-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 relative"
            >
              <Quote className="absolute top-4 right-4 w-6 h-6 text-pink-200" />
              
              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                &ldquo;{review.comment}&rdquo;
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.template} 템플릿</p>
                  </div>
                  <p className="text-sm text-gray-400">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-pink-100">완성된 청첩장</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-pink-100">평균 만족도</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-pink-100">추천 의사</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}