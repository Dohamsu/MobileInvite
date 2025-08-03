import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Simple utility functions for the app
export function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  })
}

export function formatTime(timeString: string) {
  const [hours, minutes] = timeString.split(':')
  const hour24 = parseInt(hours)
  const period = hour24 >= 12 ? '오후' : '오전'
  const hour12 = hour24 > 12 ? hour24 - 12 : hour24 === 0 ? 12 : hour24
  
  return `${period} ${hour12}시 ${minutes}분`
}