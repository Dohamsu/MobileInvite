'use client'

import { Heart, Instagram, Mail, ExternalLink } from "lucide-react"
import Link from 'next/link'
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  Stack,
} from '@mui/material'

export default function Footer() {
  const quickLinks = [
    { href: '/create', label: '청첩장 만들기' },
    { href: '/templates', label: '템플릿 보기' },
    { href: '/pricing', label: '가격 안내' },
    { href: '/guide', label: '사용법 가이드' },
  ]

  const supportLinks = [
    { href: '/faq', label: '자주 묻는 질문' },
    { href: '/contact', label: '문의하기' },
    { href: '/guide', label: '사용자 가이드' },
    { href: '/support', label: '기술 지원' },
  ]

  const legalLinks = [
    { href: '/terms', label: '이용약관' },
    { href: '/privacy', label: '개인정보처리방침' },
    { href: '/cookies', label: '쿠키정책' },
  ]

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.900',
        color: 'white',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr' },
          gap: 4,
          mb: 4 
        }}>
          {/* Brand */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Heart style={{ width: 32, height: 32, color: '#f472b6', marginRight: 12 }} />
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Mobile Invite
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'grey.300', mb: 3, lineHeight: 1.6 }}>
              당신의 특별한 날을 더 특별하게 만드는 
              모바일 청첩장 서비스입니다.
              <br />
              5분만에 감성적이고 아름다운 청첩장을 만들어보세요.
            </Typography>
            <Stack direction="row" spacing={2}>
              <IconButton
                component="a"
                href="https://instagram.com/mobileinvite"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: 'grey.800',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'primary.main',
                  },
                }}
              >
                <Instagram style={{ width: 20, height: 20 }} />
              </IconButton>
              <IconButton
                component="a"
                href="mailto:hello@mobileinvite.com"
                sx={{
                  bgcolor: 'grey.800',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'primary.main',
                  },
                }}
              >
                <Mail style={{ width: 20, height: 20 }} />
              </IconButton>
            </Stack>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              빠른 링크
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'grey.300',
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Support */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              고객지원
            </Typography>
            <Stack spacing={1}>
              {supportLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'grey.300',
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Box>
        </Box>

        {/* Contact Info */}
        <Divider sx={{ borderColor: 'grey.700', mb: 4 }} />
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 4,
          mb: 4 
        }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              연락처
            </Typography>
            <Stack spacing={1}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Mail style={{ width: 16, height: 16, marginRight: 8, color: '#9ca3af' }} />
                <Typography variant="body2" sx={{ color: 'grey.300' }}>
                  hello@mobileinvite.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Instagram style={{ width: 16, height: 16, marginRight: 8, color: '#9ca3af' }} />
                <Typography variant="body2" sx={{ color: 'grey.300' }}>
                  @mobileinvite
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              운영시간
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" sx={{ color: 'grey.300' }}>
                평일: 오전 9시 - 오후 6시
              </Typography>
              <Typography variant="body2" sx={{ color: 'grey.300' }}>
                주말: 오전 10시 - 오후 4시
              </Typography>
              <Typography variant="caption" sx={{ color: 'grey.400' }}>
                * 공휴일 제외, 이메일 문의는 24시간 접수
              </Typography>
            </Stack>
          </Box>
        </Box>

        {/* Legal Links */}
        <Divider sx={{ borderColor: 'grey.700', mb: 4 }} />
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: 2
        }}>
          <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap' }}>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: 'grey.400',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {link.label}
                  <ExternalLink style={{ width: 12, height: 12, marginLeft: 4 }} />
                </Typography>
              </Link>
            ))}
          </Stack>
          
          <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography variant="caption" sx={{ color: 'grey.400', display: 'block' }}>
              &copy; 2024 Mobile Invite. All rights reserved.
            </Typography>
            <Typography variant="caption" sx={{ color: 'grey.400', display: 'block', mt: 0.5 }}>
              Made with ❤️ for couples everywhere
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}