'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "정말 무료인가요?",
    answer: "네, 기본 템플릿과 기능은 모두 무료로 이용하실 수 있습니다. 프리미엄 템플릿과 고급 기능은 합리적인 가격으로 제공됩니다."
  },
  {
    id: 2,
    question: "청첩장 링크는 어떻게 공유하나요?",
    answer: "청첩장 제작 완료 후 고유한 링크가 생성됩니다. 이 링크를 카카오톡, 문자메시지, 이메일 등으로 쉽게 공유할 수 있어요."
  },
  {
    id: 3,
    question: "하객들의 참석 여부는 어디서 확인하나요?",
    answer: "관리자 페이지에서 실시간으로 참석 여부와 축하 메시지를 확인할 수 있습니다. 엑셀 파일로 다운로드도 가능해요."
  },
  {
    id: 4,
    question: "만든 청첩장은 언제까지 유지되나요?",
    answer: "결혼식 날짜 기준으로 6개월간 무료로 유지됩니다. 필요시 추가 연장도 가능합니다."
  },
  {
    id: 5,
    question: "템플릿을 나중에 변경할 수 있나요?",
    answer: "네, 언제든지 다른 템플릿으로 변경 가능합니다. 입력하신 정보는 그대로 유지되며 디자인만 바뀝니다."
  },
  {
    id: 6,
    question: "사진 업로드에 제한이 있나요?",
    answer: "기본적으로 10MB 이하의 JPG, PNG 파일을 지원합니다. 최대 20장까지 업로드 가능하며, 자동으로 최적화됩니다."
  }
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mobile Invite 이용에 대해 궁금한 점들을 정리했어요
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(faq.id) ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openItems.includes(faq.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              더 궁금한 점이 있으신가요?
            </h3>
            <p className="text-gray-600 mb-6">
              언제든지 편하게 문의해주세요. 빠르게 답변드리겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@mobileinvite.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
              >
                이메일 문의
              </a>
              <a 
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                카카오톡 문의
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}