'use client'

import { Heart, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@mui/material"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100"></div>
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Heart className="w-16 h-16 mx-auto mb-6 text-pink-500" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
        >
          당신의 특별한 날을
          <br />
          <span className="text-pink-500">더 특별하게</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 mb-12"
        >
          5분 만에 만드는 감성 모바일 청첩장
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="large" 
            sx={{
              width: { xs: '100%', sm: 'auto' },
              fontSize: '1.125rem',
              px: 4,
              py: 2,
              background: 'linear-gradient(45deg, #ec4899 30%, #f43f5e 90%)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(45deg, #db2777 30%, #e11d48 90%)',
              },
            }}
          >
            <Heart style={{ width: 20, height: 20, marginRight: 8 }} />
            청첩장 만들기
          </Button>
          <Button 
            variant="outlined" 
            size="large" 
            sx={{
              width: { xs: '100%', sm: 'auto' },
              fontSize: '1.125rem',
              px: 4,
              py: 2,
              borderColor: 'grey.300',
              color: 'grey.700',
              '&:hover': {
                borderColor: 'pink.500',
                color: 'pink.500',
              },
            }}
          >
            샘플 보기
            <ArrowRight style={{ width: 20, height: 20, marginLeft: 8 }} />
          </Button>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-3 h-3 bg-pink-300 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-32 right-16 w-2 h-2 bg-purple-300 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <motion.div
        className="absolute bottom-32 left-20 w-4 h-4 bg-blue-300 rounded-full"
        animate={{
          y: [0, -25, 0],
          opacity: [0.4, 0.9, 0.4]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  )
}