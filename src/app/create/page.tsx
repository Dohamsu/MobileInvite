'use client'

import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  Paper,
  IconButton,
  Stack,
} from '@mui/material'
import {
  ArrowBack,
  ArrowForward,
  Favorite,
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'

const MotionBox = motion(Box)
const MotionCard = motion(Card)

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

const templates = [
  {
    id: 'classic',
    name: '클래식',
    preview: '🌸',
    description: '우아하고 전통적인 디자인',
  },
  {
    id: 'modern',
    name: '모던',
    preview: '💎',
    description: '세련되고 미니멀한 디자인',
  },
  {
    id: 'romantic',
    name: '로맨틱',
    preview: '💕',
    description: '달콤하고 로맨틱한 디자인',
  },
  {
    id: 'elegant',
    name: '엘레간트',
    preview: '🌹',
    description: '고급스럽고 우아한 디자인',
  },
]

const steps = ['템플릿 선택', '기본 정보', '상세 정보', '완성']

export default function CreatePage() {
  const router = useRouter()
  const { isSignedIn, isLoaded } = useUser()
  const [activeStep, setActiveStep] = useState(0)
  const [invitationData, setInvitationData] = useState<InvitationData>({
    brideName: '',
    groomName: '',
    weddingDate: '',
    weddingTime: '',
    venue: '',
    venueAddress: '',
    message: '',
    groomAccount: '',
    brideAccount: '',
    template: '',
  })

  // 로딩 중이거나 로그인하지 않은 경우
  if (!isLoaded) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography>로딩 중...</Typography>
      </Box>
    )
  }

  if (!isSignedIn) {
    return (
      <Box sx={{ minHeight: '100vh', py: 4 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
              로그인이 필요합니다
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              청첩장을 만들기 위해서는 로그인이 필요합니다.
            </Typography>
            <Button
              component={Link}
              href="/"
              variant="contained"
              size="large"
              sx={{ px: 4 }}
            >
              홈으로 돌아가기
            </Button>
          </Box>
        </Container>
      </Box>
    )
  }

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      const invitationId = Math.random().toString(36).substr(2, 9)
      localStorage.setItem(`invitation_${invitationId}`, JSON.stringify(invitationData))
      router.push(`/invite/${invitationId}`)
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleInputChange = (field: keyof InvitationData, value: string) => {
    setInvitationData(prev => ({ ...prev, [field]: value }))
  }

  const isStepValid = () => {
    switch (activeStep) {
      case 0:
        return invitationData.template !== ''
      case 1:
        return invitationData.brideName && invitationData.groomName && invitationData.weddingDate
      case 2:
        return invitationData.venue && invitationData.venueAddress
      default:
        return true
    }
  }

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h5" align="center" sx={{ mb: 4, fontWeight: 600 }}>
              마음에 드는 템플릿을 선택해주세요
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 3 }}>
              {templates.map((template) => (
                <MotionCard key={template.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    sx={{
                      cursor: 'pointer',
                      border: invitationData.template === template.id ? 3 : 1,
                      borderColor: invitationData.template === template.id ? 'primary.main' : 'divider',
                      transition: 'all 0.3s ease',
                    }}
                    onClick={() => handleInputChange('template', template.id)}
                  >
                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                      <Typography variant="h2" sx={{ fontSize: 60, mb: 2 }}>
                        {template.preview}
                      </Typography>
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                        {template.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {template.description}
                      </Typography>
                    </CardContent>
                  </MotionCard>
              ))}
            </Box>
          </MotionBox>
        )

      case 1:
        return (
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h5" align="center" sx={{ mb: 4, fontWeight: 600 }}>
              기본 정보를 입력해주세요
            </Typography>
            <Stack spacing={3}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <TextField
                  fullWidth
                  label="신부 이름"
                  value={invitationData.brideName}
                  onChange={(e) => handleInputChange('brideName', e.target.value)}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="신랑 이름"
                  value={invitationData.groomName}
                  onChange={(e) => handleInputChange('groomName', e.target.value)}
                  variant="outlined"
                />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <TextField
                  fullWidth
                  label="결혼식 날짜"
                  type="date"
                  value={invitationData.weddingDate}
                  onChange={(e) => handleInputChange('weddingDate', e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="결혼식 시간"
                  type="time"
                  value={invitationData.weddingTime}
                  onChange={(e) => handleInputChange('weddingTime', e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Stack>
            </Stack>
          </MotionBox>
        )

      case 2:
        return (
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h5" align="center" sx={{ mb: 4, fontWeight: 600 }}>
              상세 정보를 입력해주세요
            </Typography>
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="예식장 이름"
                value={invitationData.venue}
                onChange={(e) => handleInputChange('venue', e.target.value)}
                variant="outlined"
              />
              <TextField
                fullWidth
                label="예식장 주소"
                value={invitationData.venueAddress}
                onChange={(e) => handleInputChange('venueAddress', e.target.value)}
                variant="outlined"
              />
              <TextField
                fullWidth
                label="인사말"
                multiline
                rows={4}
                value={invitationData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="초대 메시지를 입력해주세요..."
                variant="outlined"
              />
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <TextField
                  fullWidth
                  label="신랑 계좌번호"
                  value={invitationData.groomAccount}
                  onChange={(e) => handleInputChange('groomAccount', e.target.value)}
                  variant="outlined"
                  placeholder="은행명 계좌번호"
                />
                <TextField
                  fullWidth
                  label="신부 계좌번호"
                  value={invitationData.brideAccount}
                  onChange={(e) => handleInputChange('brideAccount', e.target.value)}
                  variant="outlined"
                  placeholder="은행명 계좌번호"
                />
              </Stack>
            </Stack>
          </MotionBox>
        )

      case 3:
        return (
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box textAlign="center">
              <Favorite sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                청첩장이 완성되었습니다!
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                이제 사랑하는 사람들에게 초대장을 공유해보세요.
              </Typography>
              
              <Paper sx={{ p: 3, mb: 4, backgroundColor: 'background.default' }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {invitationData.groomName} ♥ {invitationData.brideName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {invitationData.weddingDate} {invitationData.weddingTime}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {invitationData.venue}
                </Typography>
              </Paper>
            </Box>
          </MotionBox>
        )

      default:
        return null
    }
  }

  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxWidth="md">
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton component={Link} href="/" sx={{ color: 'primary.main' }}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h4" sx={{ fontWeight: 600, color: 'primary.main' }}>
            청첩장 만들기
          </Typography>
        </Box>

        <Paper sx={{ p: 3, mb: 4 }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>

        <Paper sx={{ p: { xs: 3, md: 6 }, mb: 4, minHeight: 400 }}>
          {renderStepContent()}
        </Paper>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="outlined"
            startIcon={<ArrowBack />}
            sx={{ px: 4 }}
          >
            이전
          </Button>
          <Button
            onClick={handleNext}
            variant="contained"
            disabled={!isStepValid()}
            endIcon={activeStep === steps.length - 1 ? <Favorite /> : <ArrowForward />}
            sx={{ px: 4 }}
          >
            {activeStep === steps.length - 1 ? '청첩장 보기' : '다음'}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}