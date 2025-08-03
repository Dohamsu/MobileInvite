'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Stack,
  Divider,
  IconButton,
  Fab,
  Snackbar,
  Alert,
  Card,
  CardContent,
} from '@mui/material'
import {
  Share,
  LocationOn,
  CalendarToday,
  AccessTime,
  AccountBalance,
  ContentCopy,
} from '@mui/icons-material'
import { motion } from 'framer-motion'

const MotionPaper = motion(Paper)

interface InvitationData {
  brideName: string
  groomName: string
  weddingDate: string
  weddingTime: string
  venue: string
  venueAddress: string
  message: string
  groomAccount: string
  brideAccount: string
  template: string
}

const templateStyles = {
  classic: {
    backgroundColor: '#FFF0F5',
    primaryColor: '#FF69B4',
    gradient: 'linear-gradient(135deg, #FFE4E1 0%, #FFF0F5 100%)',
    emoji: '🌸',
  },
  modern: {
    backgroundColor: '#F3E5F5',
    primaryColor: '#9C27B0',
    gradient: 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)',
    emoji: '💎',
  },
  romantic: {
    backgroundColor: '#FCE4EC',
    primaryColor: '#E91E63',
    gradient: 'linear-gradient(135deg, #FCE4EC 0%, #F8BBD9 100%)',
    emoji: '💕',
  },
  elegant: {
    backgroundColor: '#EDE7F6',
    primaryColor: '#673AB7',
    gradient: 'linear-gradient(135deg, #EDE7F6 0%, #D1C4E9 100%)',
    emoji: '🌹',
  },
}

export default function InvitePage() {
  const params = useParams()
  const [invitation, setInvitation] = useState<InvitationData | null>(null)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  useEffect(() => {
    const id = params.id as string
    const stored = localStorage.getItem(`invitation_${id}`)
    if (stored) {
      setInvitation(JSON.parse(stored))
    }
  }, [params.id])

  const handleShare = async () => {
    const url = window.location.href
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${invitation?.groomName} ♥ ${invitation?.brideName} 결혼식 초대장`,
          text: '결혼식에 초대합니다',
          url: url,
        })
      } catch {
        console.log('공유 취소됨')
      }
    } else {
      navigator.clipboard.writeText(url)
      setSnackbarMessage('링크가 복사되었습니다!')
      setSnackbarOpen(true)
    }
  }

  const handleCopyAccount = (account: string) => {
    navigator.clipboard.writeText(account)
    setSnackbarMessage('계좌번호가 복사되었습니다!')
    setSnackbarOpen(true)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const weekdays = ['일', '월', '화', '수', '목', '금', '토']
    const weekday = weekdays[date.getDay()]
    
    return `${year}년 ${month}월 ${day}일 (${weekday})`
  }

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':')
    const hour24 = parseInt(hours)
    const period = hour24 >= 12 ? '오후' : '오전'
    const hour12 = hour24 > 12 ? hour24 - 12 : hour24 === 0 ? 12 : hour24
    
    return `${period} ${hour12}시 ${minutes}분`
  }

  if (!invitation) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6" color="text.secondary">
          청첩장을 불러오는 중...
        </Typography>
      </Box>
    )
  }

  const style = templateStyles[invitation.template as keyof typeof templateStyles] || templateStyles.classic

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: style.gradient,
        position: 'relative',
      }}
    >
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <MotionPaper
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-effect"
          sx={{
            p: 0,
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
          }}
        >
          {/* Header */}
          <Box
            sx={{
              background: `linear-gradient(135deg, ${style.primaryColor}AA, ${style.primaryColor}FF)`,
              color: 'white',
              p: 4,
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <Typography variant="h1" sx={{ fontSize: 60, mb: 2 }}>
              {style.emoji}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              {invitation.groomName} ♥ {invitation.brideName}
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              We&apos;re Getting Married
            </Typography>
          </Box>

          {/* Date & Time */}
          <Box sx={{ p: 4, textAlign: 'center' }}>
            <Card sx={{ mb: 3, backgroundColor: style.backgroundColor }}>
              <CardContent>
                <Stack spacing={2} alignItems="center">
                  <CalendarToday sx={{ fontSize: 32, color: style.primaryColor }} />
                  <Typography variant="h5" sx={{ fontWeight: 600, color: style.primaryColor }}>
                    {formatDate(invitation.weddingDate)}
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <AccessTime sx={{ color: 'text.secondary' }} />
                    <Typography variant="h6" color="text.secondary">
                      {formatTime(invitation.weddingTime)}
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>

            {/* Message */}
            {invitation.message && (
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                    color: 'text.secondary',
                    fontSize: '1.1rem',
                  }}
                >
                  {invitation.message}
                </Typography>
              </Box>
            )}

            <Divider sx={{ my: 4 }} />

            {/* Venue */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Stack spacing={2} alignItems="center">
                  <LocationOn sx={{ fontSize: 32, color: style.primaryColor }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {invitation.venue}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" textAlign="center">
                    {invitation.venueAddress}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{ mt: 2, color: style.primaryColor, borderColor: style.primaryColor }}
                    onClick={() => {
                      const query = encodeURIComponent(invitation.venueAddress)
                      window.open(`https://map.kakao.com/link/search/${query}`)
                    }}
                  >
                    길찾기
                  </Button>
                </Stack>
              </CardContent>
            </Card>

            {/* Account Info */}
            {(invitation.groomAccount || invitation.brideAccount) && (
              <Card>
                <CardContent>
                  <Stack spacing={2} alignItems="center">
                    <AccountBalance sx={{ fontSize: 32, color: style.primaryColor }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      마음 전하실 곳
                    </Typography>
                    
                    {invitation.groomAccount && (
                      <Paper sx={{ p: 2, width: '100%', backgroundColor: 'background.default' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Box>
                            <Typography variant="subtitle2" color="text.secondary">
                              신랑측
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                              {invitation.groomAccount}
                            </Typography>
                          </Box>
                          <IconButton
                            onClick={() => handleCopyAccount(invitation.groomAccount)}
                            sx={{ color: style.primaryColor }}
                          >
                            <ContentCopy />
                          </IconButton>
                        </Stack>
                      </Paper>
                    )}

                    {invitation.brideAccount && (
                      <Paper sx={{ p: 2, width: '100%', backgroundColor: 'background.default' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Box>
                            <Typography variant="subtitle2" color="text.secondary">
                              신부측
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                              {invitation.brideAccount}
                            </Typography>
                          </Box>
                          <IconButton
                            onClick={() => handleCopyAccount(invitation.brideAccount)}
                            sx={{ color: style.primaryColor }}
                          >
                            <ContentCopy />
                          </IconButton>
                        </Stack>
                      </Paper>
                    )}
                  </Stack>
                </CardContent>
              </Card>
            )}
          </Box>

          {/* Footer */}
          <Box
            sx={{
              p: 3,
              textAlign: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Mobile Invite로 제작된 청첩장입니다
            </Typography>
          </Box>
        </MotionPaper>
      </Container>

      {/* Floating Share Button */}
      <Fab
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          backgroundColor: style.primaryColor,
          color: 'white',
          '&:hover': {
            backgroundColor: style.primaryColor,
          },
        }}
        onClick={handleShare}
      >
        <Share />
      </Fab>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success" onClose={() => setSnackbarOpen(false)}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  )
}