'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Heart, ArrowLeft, Calendar, Users, CreditCard } from 'lucide-react'
import Link from 'next/link'

interface Template {
  id: string
  name: string
  description: string
  thumbnail: string
}

export default function CreatePage() {
  const router = useRouter()
  const { user } = useUser()
  const [templates, setTemplates] = useState<Template[]>([])
  const [selectedTemplate, setSelectedTemplate] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    groomName: '',
    brideName: '',
    weddingDate: '',
    weddingTime: '',
    venue: '',
    venueAddress: '',
    message: '',
    accountInfo: '',
  })

  // 템플릿 목록 로드
  useEffect(() => {
    async function fetchTemplates() {
      try {
        const response = await fetch('/api/templates')
        if (response.ok) {
          const data = await response.json()
          setTemplates(data)
          if (data.length > 0) {
            setSelectedTemplate(data[0].id)
          }
        }
      } catch (error) {
        console.error('Error fetching templates:', error)
      }
    }
    fetchTemplates()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/invitations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          templateId: selectedTemplate,
        }),
      })

      if (response.ok) {
        const invitation = await response.json()
        router.push(`/invite/${invitation.slug}`)
      } else {
        console.error('Failed to create invitation')
      }
    } catch (error) {
      console.error('Error creating invitation:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>로그인이 필요합니다.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              돌아가기
            </Button>
          </Link>
          <div className="flex items-center space-x-3 ml-6">
            <Heart className="w-6 h-6 text-pink-500" />
            <h1 className="text-xl font-bold">새 청첩장 만들기</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* 템플릿 선택 */}
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold mb-4">템플릿 선택</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedTemplate === template.id
                      ? 'border-pink-500 bg-pink-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <div className="aspect-[3/4] bg-gray-100 rounded-md mb-3 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="font-medium">{template.name}</h3>
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 기본 정보 */}
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              기본 정보
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">청첩장 제목</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="예: 진원 ♥ 미나의 결혼식"
                  required
                />
              </div>
              <div></div>
              <div>
                <Label htmlFor="groomName">신랑 이름</Label>
                <Input
                  id="groomName"
                  name="groomName"
                  value={formData.groomName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="brideName">신부 이름</Label>
                <Input
                  id="brideName"
                  name="brideName"
                  value={formData.brideName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* 예식 정보 */}
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              예식 정보
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="weddingDate">예식 날짜</Label>
                <Input
                  id="weddingDate"
                  name="weddingDate"
                  type="date"
                  value={formData.weddingDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="weddingTime">예식 시간</Label>
                <Input
                  id="weddingTime"
                  name="weddingTime"
                  type="time"
                  value={formData.weddingTime}
                  onChange={handleInputChange}
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="venue">예식장</Label>
                <Input
                  id="venue"
                  name="venue"
                  value={formData.venue}
                  onChange={handleInputChange}
                  placeholder="예식장 이름"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="venueAddress">예식장 주소</Label>
                <Input
                  id="venueAddress"
                  name="venueAddress"
                  value={formData.venueAddress}
                  onChange={handleInputChange}
                  placeholder="예식장 상세 주소"
                />
              </div>
            </div>
          </div>

          {/* 인사말 */}
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              인사말
            </h2>
            <div>
              <Label htmlFor="message">축사 메시지</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="하객분들께 전하고 싶은 인사말을 작성해주세요"
                rows={4}
              />
            </div>
          </div>

          {/* 계좌 정보 */}
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              계좌 정보
            </h2>
            <div>
              <Label htmlFor="accountInfo">축의금 계좌</Label>
              <Textarea
                id="accountInfo"
                name="accountInfo"
                value={formData.accountInfo}
                onChange={handleInputChange}
                placeholder="은행명: 신한은행&#10;계좌번호: 110-123-456789&#10;예금주: 김진원"
                rows={3}
              />
            </div>
          </div>

          {/* 제출 버튼 */}
          <div className="flex justify-center">
            <Button
              type="submit"
              size="lg"
              disabled={isLoading || !selectedTemplate}
              className="w-full md:w-auto min-w-[200px]"
            >
              {isLoading ? '생성 중...' : '청첩장 생성하기'}
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}