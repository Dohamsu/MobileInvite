'use client'

import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Paper,
} from '@mui/material'
import {
  ArrowBack,
  Visibility,
  Create,
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import Link from 'next/link'

const MotionCard = motion(Card)

const templates = [
  {
    id: 'classic',
    name: '클래식',
    preview: '🌸',
    description: '우아하고 전통적인 디자인으로 고전적인 아름다움을 표현합니다.',
    color: '#FF69B4',
    features: ['전통적인 디자인', '우아한 색상', '고전적인 레이아웃'],
    gradient: 'linear-gradient(135deg, #FFE4E1 0%, #FFF0F5 100%)',
  },
  {
    id: 'modern',
    name: '모던',
    preview: '💎',
    description: '세련되고 미니멀한 디자인으로 현대적인 감각을 담았습니다.',
    color: '#9C27B0',
    features: ['미니멀 디자인', '현대적 감각', '깔끔한 레이아웃'],
    gradient: 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)',
  },
  {
    id: 'romantic',
    name: '로맨틱',
    preview: '💕',
    description: '달콤하고 로맨틱한 디자인으로 사랑의 감정을 표현합니다.',
    color: '#E91E63',
    features: ['로맨틱한 분위기', '달콤한 색상', '감성적 디자인'],
    gradient: 'linear-gradient(135deg, #FCE4EC 0%, #F8BBD9 100%)',
  },
  {
    id: 'elegant',
    name: '엘레간트',
    preview: '🌹',
    description: '고급스럽고 우아한 디자인으로 품격 있는 청첩장을 완성합니다.',
    color: '#673AB7',
    features: ['고급스러운 분위기', '우아한 디자인', '품격 있는 색상'],
    gradient: 'linear-gradient(135deg, #EDE7F6 0%, #D1C4E9 100%)',
  },
]

export default function TemplatesPage() {
  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton component={Link} href="/" sx={{ color: 'primary.main' }}>
            <ArrowBack />
          </IconButton>
          <Box>
            <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
              템플릿 갤러리
            </Typography>
            <Typography variant="h6" color="text.secondary">
              마음에 드는 디자인을 선택해보세요
            </Typography>
          </Box>
        </Box>

        {/* Templates Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 4 }}>
          {templates.map((template, index) => (
              <MotionCard key={template.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: `0 15px 35px ${template.color}30`,
                }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 4,
                  overflow: 'hidden',
                  border: `2px solid transparent`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: template.color,
                  },
                }}
              >
                {/* Preview */}
                <Box
                  sx={{
                    height: 200,
                    background: template.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: 80,
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                    }}
                  >
                    {template.preview}
                  </Typography>
                  
                  {/* Overlay on hover */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      '&:hover': {
                        opacity: 1,
                      },
                    }}
                    className="template-overlay"
                  >
                    <Button
                      variant="contained"
                      startIcon={<Visibility />}
                      sx={{
                        backgroundColor: 'white',
                        color: 'text.primary',
                        '&:hover': {
                          backgroundColor: 'grey.100',
                        },
                      }}
                    >
                      미리보기
                    </Button>
                  </Box>
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: template.color,
                    }}
                  >
                    {template.name}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3, lineHeight: 1.6 }}
                  >
                    {template.description}
                  </Typography>

                  {/* Features */}
                  <Box>
                    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                      주요 특징:
                    </Typography>
                    {template.features.map((feature, featureIndex) => (
                      <Typography
                        key={featureIndex}
                        variant="caption"
                        sx={{
                          display: 'block',
                          color: 'text.secondary',
                          mb: 0.5,
                          '&::before': {
                            content: '"• "',
                            color: template.color,
                            fontWeight: 'bold',
                          },
                        }}
                      >
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>

                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    component={Link}
                    href="/create"
                    variant="contained"
                    fullWidth
                    startIcon={<Create />}
                    sx={{
                      backgroundColor: template.color,
                      '&:hover': {
                        backgroundColor: template.color,
                        filter: 'brightness(0.9)',
                      },
                    }}
                  >
                    이 템플릿으로 시작하기
                  </Button>
                </CardActions>
              </MotionCard>
          ))}
        </Box>

        {/* CTA Section */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Paper
            sx={{
              p: 6,
              borderRadius: 4,
              background: 'linear-gradient(135deg, rgba(255, 105, 180, 0.1) 0%, rgba(156, 39, 176, 0.1) 100%)',
            }}
          >
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
              마음에 드는 템플릿을 찾으셨나요?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              지금 바로 청첩장 제작을 시작해보세요!
            </Typography>
            <Button
              component={Link}
              href="/create"
              variant="contained"
              size="large"
              startIcon={<Create />}
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                background: 'linear-gradient(45deg, #FF69B4, #9C27B0)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #E91E63, #673AB7)',
                },
              }}
            >
              청첩장 만들기
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}