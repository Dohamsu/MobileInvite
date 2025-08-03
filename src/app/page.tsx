'use client'

import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Rating,
  Stack,
} from '@mui/material'
import { Heart, Plus, Clock, Palette, Share2, Gift, Camera } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionCard = motion(Card)

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
    { id: 1, name: "로맨틱 플라워", color: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)" },
    { id: 2, name: "모던 미니멀", color: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)" },
    { id: 3, name: "빈티지 클래식", color: "linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)" },
    { id: 4, name: "엘레간트 골드", color: "linear-gradient(135deg, #fefce8 0%, #fef3c7 100%)" }
  ]

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* 히어로 섹션 */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #fdf2f8 0%, #ffffff 50%, #fff1f2 100%)',
        py: 10
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              sx={{ mb: 4 }}
            >
              <Box sx={{ mb: 3 }}>
                <Heart style={{ width: 80, height: 80, color: '#ec4899' }} />
              </Box>
              <Typography variant="h2" sx={{ 
                fontWeight: 700, 
                background: 'linear-gradient(45deg, #ec4899 30%, #f43f5e 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}>
                특별한 순간을
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 700, color: 'text.primary', mb: 3 }}>
                더 특별하게
              </Typography>
              <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4, maxWidth: 600, mx: 'auto' }}>
                아름다운 모바일 청첩장을 3분만에 만들어보세요. 
                소중한 사람들에게 특별한 초대를 보내세요.
              </Typography>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              sx={{ mb: 6 }}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                <Button
                  component={Link}
                  href="/create"
                  variant="contained"
                  size="large"
                  startIcon={<Plus />}
                  sx={{
                    background: 'linear-gradient(45deg, #ec4899 30%, #f43f5e 90%)',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #db2777 30%, #e11d48 90%)',
                    }
                  }}
                >
                  무료로 시작하기
                </Button>
                <Button
                  component={Link}
                  href="/templates"
                  variant="outlined"
                  size="large"
                  startIcon={<Camera />}
                  sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
                >
                  템플릿 보기
                </Button>
              </Stack>
            </MotionBox>

            {/* 평점 */}
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}
            >
              <Rating value={5} readOnly size="small" />
              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                4.9
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                • 10,000+ 만족한 고객
              </Typography>
            </MotionBox>
          </Box>
        </Container>
      </Box>

      {/* 특징 섹션 */}
      <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              왜 Mobile Invite인가요?
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
              복잡한 과정 없이 누구나 쉽게 아름다운 청첩장을 만들 수 있습니다
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 4 }}>
            {features.map((feature, index) => (
              <MotionCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                sx={{
                  textAlign: 'center',
                  p: 3,
                  height: '100%',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    <feature.icon style={{ width: 48, height: 48, margin: '0 auto', color: '#ec4899' }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 템플릿 미리보기 섹션 */}
      <Box sx={{ py: 10, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              아름다운 템플릿
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
              다양한 스타일의 템플릿 중에서 마음에 드는 디자인을 선택하세요
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 3, mb: 6 }}>
            {templates.map((template, index) => (
              <MotionCard
                key={template.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  transition: 'transform 0.3s ease',
                }}
              >
                <Box
                  sx={{
                    height: 200,
                    background: template.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 1,
                  }}
                >
                  <Heart style={{ width: 64, height: 64, color: '#9ca3af' }} />
                </Box>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {template.name}
                  </Typography>
                </CardContent>
              </MotionCard>
            ))}
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Button
              component={Link}
              href="/templates"
              variant="outlined"
              size="large"
              sx={{ px: 4 }}
            >
              모든 템플릿 보기
            </Button>
          </Box>
        </Container>
      </Box>

      {/* CTA 섹션 */}
      <Box sx={{ 
        py: 10,
        background: 'linear-gradient(45deg, #ec4899 30%, #f43f5e 90%)',
      }}>
        <Container maxWidth="md">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{ textAlign: 'center' }}
          >
            <Typography variant="h3" sx={{ fontWeight: 700, color: 'white', mb: 2 }}>
              지금 바로 시작해보세요
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)', mb: 4 }}>
              무료로 청첩장을 만들고 소중한 사람들을 초대하세요
            </Typography>
            <Button
              component={Link}
              href="/create"
              variant="contained"
              size="large"
              startIcon={<Plus />}
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  bgcolor: 'grey.50',
                }
              }}
            >
              청첩장 만들기
            </Button>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  )
}