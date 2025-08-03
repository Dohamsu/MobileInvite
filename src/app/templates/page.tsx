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
  Grid,
  Chip,
} from '@mui/material'
import {
  ArrowBack,
  Visibility,
  Create,
  Favorite,
  Star,
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import Link from 'next/link'

const MotionCard = motion(Card)

const templates = [
  {
    id: 'seoul',
    name: '서울',
    englishName: 'Seoul',
    description: '모던한 폴라로이드',
    category: '폴라로이드',
    preview: '🌸',
    color: '#FF69B4',
    gradient: 'linear-gradient(135deg, #FFE4E1 0%, #FFF0F5 100%)',
    isPopular: true,
  },
  {
    id: 'dubai',
    name: '두바이',
    englishName: 'Dubai',
    description: '정갈한 엽서형',
    category: '엽서형',
    preview: '🌅',
    color: '#FF8C00',
    gradient: 'linear-gradient(135deg, #FFF8DC 0%, #FFE4B5 100%)',
    isPopular: false,
  },
  {
    id: 'porto',
    name: '포르투',
    englishName: 'Porto',
    description: '풀커버 엽서형',
    category: '엽서형',
    preview: '🍷',
    color: '#8B4513',
    gradient: 'linear-gradient(135deg, #F5DEB3 0%, #DEB887 100%)',
    isPopular: true,
  },
  {
    id: 'seychelles',
    name: '세이셸',
    englishName: 'Seychelles',
    description: '우아한 세련된',
    category: '세련형',
    preview: '🌊',
    color: '#00CED1',
    gradient: 'linear-gradient(135deg, #E0FFFF 0%, #B0E0E6 100%)',
    isPopular: false,
  },
  {
    id: 'copenhagen',
    name: '코펜하겐',
    englishName: 'Copenhagen',
    description: '고급스러운 섬세한',
    category: '고급형',
    preview: '❄️',
    color: '#4682B4',
    gradient: 'linear-gradient(135deg, #F0F8FF 0%, #E6E6FA 100%)',
    isPopular: true,
  },
  {
    id: 'nice',
    name: '니스',
    englishName: 'Nice',
    description: '폴라로이드 깨끗한',
    category: '폴라로이드',
    preview: '🌺',
    color: '#FF1493',
    gradient: 'linear-gradient(135deg, #FFE4E1 0%, #FFB6C1 100%)',
    isPopular: false,
  },
  {
    id: 'barcelona',
    name: '바르셀로나',
    englishName: 'Barcelona',
    description: '모던한 심플한',
    category: '모던형',
    preview: '🏛️',
    color: '#FF4500',
    gradient: 'linear-gradient(135deg, #FFE4E1 0%, #FFA07A 100%)',
    isPopular: true,
  },
  {
    id: 'venice',
    name: '베니스',
    englishName: 'Venice',
    description: '정갈한 사랑스러운',
    category: '로맨틱',
    preview: '🛶',
    color: '#9370DB',
    gradient: 'linear-gradient(135deg, #E6E6FA 0%, #DDA0DD 100%)',
    isPopular: false,
  },
  {
    id: 'jeju',
    name: '제주',
    englishName: 'Jeju',
    description: '텍스트 담백한',
    category: '심플형',
    preview: '🌿',
    color: '#228B22',
    gradient: 'linear-gradient(135deg, #F0FFF0 0%, #90EE90 100%)',
    isPopular: true,
  },
  {
    id: 'martinique',
    name: '마르티니크',
    englishName: 'Martinique',
    description: '풀커버 모던한',
    category: '풀커버',
    preview: '🌴',
    color: '#32CD32',
    gradient: 'linear-gradient(135deg, #F0FFF0 0%, #98FB98 100%)',
    isPopular: false,
  },
  {
    id: 'miami',
    name: '마이애미',
    englishName: 'Miami',
    description: '모던한 엽서형',
    category: '엽서형',
    preview: '🌴',
    color: '#FF6347',
    gradient: 'linear-gradient(135deg, #FFE4E1 0%, #FFB6C1 100%)',
    isPopular: true,
  },
  {
    id: 'amalfi',
    name: '아말피',
    englishName: 'Amalfi',
    description: '담백한 정중한',
    category: '엘레간트',
    preview: '🏖️',
    color: '#4169E1',
    gradient: 'linear-gradient(135deg, #E6F3FF 0%, #B0C4DE 100%)',
    isPopular: false,
  },
  {
    id: 'newyork',
    name: '뉴욕',
    englishName: 'Newyork',
    description: '풀커버 엽서형',
    category: '엽서형',
    preview: '🗽',
    color: '#FFD700',
    gradient: 'linear-gradient(135deg, #FFFACD 0%, #F0E68C 100%)',
    isPopular: true,
  },
  {
    id: 'sydney',
    name: '시드니',
    englishName: 'Sydney',
    description: '깨끗한 순수한',
    category: '클린형',
    preview: '🏙️',
    color: '#87CEEB',
    gradient: 'linear-gradient(135deg, #F0F8FF 0%, #87CEEB 100%)',
    isPopular: false,
  },
  {
    id: 'bali',
    name: '발리',
    englishName: 'Bali',
    description: '풀커버 엽서형',
    category: '엽서형',
    preview: '🌺',
    color: '#FF69B4',
    gradient: 'linear-gradient(135deg, #FFE4E1 0%, #FFB6C1 100%)',
    isPopular: true,
  },
]

export default function TemplatesPage() {
  return (
    <Box sx={{ minHeight: '100vh', py: 4, backgroundColor: '#fafafa' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton component={Link} href="/" sx={{ color: 'primary.main' }}>
            <ArrowBack />
          </IconButton>
          <Box>
            <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
              모바일 청첩장
            </Typography>
            <Typography variant="h6" color="text.secondary">
              두 분의 결혼을 위한 가장 특별한 초대를 전해보세요
            </Typography>
          </Box>
        </Box>

        {/* Templates Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 3 }}>
          {templates.map((template, index) => (
            <MotionCard
              key={template.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 8px 25px ${template.color}20`,
              }}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                overflow: 'hidden',
                border: '1px solid #e0e0e0',
                transition: 'all 0.3s ease',
                backgroundColor: 'white',
                '&:hover': {
                  borderColor: template.color,
                  transform: 'translateY(-4px)',
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
                  overflow: 'hidden',
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: 60,
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                  }}
                >
                  {template.preview}
                </Typography>
                
                {/* Popular Badge */}
                {template.isPopular && (
                  <Chip
                    icon={<Star sx={{ fontSize: 16 }} />}
                    label="인기"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      backgroundColor: '#FFD700',
                      color: '#333',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                    }}
                  />
                )}
                
                {/* Overlay on hover */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
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
                    샘플 보기
                  </Button>
                </Box>
              </Box>

              <CardContent sx={{ flexGrow: 1, p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 0.5,
                    color: template.color,
                  }}
                >
                  {template.name}
                </Typography>
                
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1, fontWeight: 500 }}
                >
                  {template.englishName}
                </Typography>
                
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, lineHeight: 1.4 }}
                >
                  {template.description}
                </Typography>

                {/* Category */}
                <Chip
                  label={template.category}
                  size="small"
                  sx={{
                    backgroundColor: `${template.color}15`,
                    color: template.color,
                    fontWeight: 600,
                    fontSize: '0.75rem',
                  }}
                />
              </CardContent>

              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button
                  component={Link}
                  href="/create"
                  variant="outlined"
                  fullWidth
                  startIcon={<Create />}
                  sx={{
                    borderColor: template.color,
                    color: template.color,
                    '&:hover': {
                      backgroundColor: `${template.color}10`,
                      borderColor: template.color,
                    },
                  }}
                >
                  디자인 변경 무료
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
              border: '1px solid rgba(255, 105, 180, 0.2)',
            }}
          >
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
              청첩장 무료 시안 만들기
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              마음에 드는 템플릿을 선택하고 지금 바로 청첩장 제작을 시작해보세요!
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