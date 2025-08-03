'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, Menu, X, User, LogOut } from 'lucide-react'
import { useUser, SignInButton, SignOutButton } from '@clerk/nextjs'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
  Button,
} from '@mui/material'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isSignedIn, user } = useUser()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { href: '/templates', label: '템플릿' },
    { href: '/gallery', label: '갤러리' },
    { href: '/pricing', label: '요금안내' },
    { href: '/support', label: '고객지원' },
  ]

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Toolbar sx={{ maxWidth: '1200px', mx: 'auto', width: '100%' }}>
        {/* 로고 */}
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Heart style={{ width: 32, height: 32, color: '#ec4899' }} />
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700,
                background: 'linear-gradient(45deg, #ec4899 30%, #f43f5e 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Mobile Invite
            </Typography>
          </Box>
        </Link>

        {/* 데스크톱 메뉴 */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
              <Button 
                // variant="outline"
                className="mx-1 text-gray-700 hover:text-pink-500 hover:bg-transparent"
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </Box>

        {/* 데스크톱 로그인/회원가입 버튼 */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
          {isSignedIn ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                  <User style={{ width: 16, height: 16 }} />
                </Avatar>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {user?.firstName || user?.emailAddresses[0]?.emailAddress?.split('@')[0]}
                </Typography>
              </Box>
              <SignOutButton>
                <Button 
                  variant="outlined" 
                  size="small"
                  sx={{
                    borderColor: 'grey.300',
                    color: 'grey.600',
                    '&:hover': {
                      borderColor: 'pink.500',
                      color: 'pink.500',
                    },
                  }}
                >
                  <LogOut style={{ width: 16, height: 16, marginRight: 8 }} />
                  로그아웃
                </Button>
              </SignOutButton>
              <Link href="/create">
                <Button 
                  sx={{
                    background: 'linear-gradient(45deg, #ec4899 30%, #f43f5e 90%)',
                    color: 'white',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #db2777 30%, #e11d48 90%)',
                    },
                  }}
                >
                  청첩장 만들기
                </Button>
              </Link>
            </>
          ) : (
            <>
              <SignInButton mode="modal">
                <Button 
                  variant="outlined"
                  sx={{
                    borderColor: 'grey.300',
                    color: 'grey.600',
                    '&:hover': {
                      borderColor: 'pink.500',
                      color: 'pink.500',
                    },
                  }}
                >
                  로그인
                </Button>
              </SignInButton>
              <Link href="/create">
                <Button 
                  sx={{
                    background: 'linear-gradient(45deg, #ec4899 30%, #f43f5e 90%)',
                    color: 'white',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #db2777 30%, #e11d48 90%)',
                    },
                  }}
                >
                  청첩장 만들기
                </Button>
              </Link>
            </>
          )}
        </Box>

        {/* 모바일 메뉴 버튼 */}
        <IconButton
          onClick={toggleMenu}
          sx={{ display: { md: 'none' }, color: 'text.primary' }}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </IconButton>
      </Toolbar>

      {/* 모바일 메뉴 */}
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={toggleMenu}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            p: 2,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            메뉴
          </Typography>
          
          <List>
            {menuItems.map((item) => (
              <ListItem 
                key={item.href}
                component={Link}
                href={item.href}
                onClick={toggleMenu}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          {isSignedIn ? (
            <Box sx={{ spaceY: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                  <User style={{ width: 16, height: 16 }} />
                </Avatar>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {user?.firstName || user?.emailAddresses[0]?.emailAddress?.split('@')[0]}
                </Typography>
              </Box>
              <SignOutButton>
                <Button 
                  variant="outlined" 
                  sx={{
                    width: '100%',
                    mb: 2,
                    borderColor: 'grey.300',
                    color: 'grey.600',
                    '&:hover': {
                      borderColor: 'pink.500',
                      color: 'pink.500',
                    },
                  }}
                  onClick={toggleMenu}
                >
                  <LogOut style={{ width: 16, height: 16, marginRight: 8 }} />
                  로그아웃
                </Button>
              </SignOutButton>
              <Link href="/create" onClick={toggleMenu}>
                <Button 
                  sx={{
                    width: '100%',
                    background: 'linear-gradient(45deg, #ec4899 30%, #f43f5e 90%)',
                    color: 'white',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #db2777 30%, #e11d48 90%)',
                    },
                  }}
                >
                  청첩장 만들기
                </Button>
              </Link>
            </Box>
          ) : (
            <Box sx={{ spaceY: 2 }}>
              <SignInButton mode="modal">
                <Button 
                  variant="outlined" 
                  sx={{
                    width: '100%',
                    mb: 2,
                    borderColor: 'grey.300',
                    color: 'grey.600',
                    '&:hover': {
                      borderColor: 'pink.500',
                      color: 'pink.500',
                    },
                  }}
                  onClick={toggleMenu}
                >
                  로그인
                </Button>
              </SignInButton>
              <Link href="/create" onClick={toggleMenu}>
                <Button 
                  sx={{
                    width: '100%',
                    background: 'linear-gradient(45deg, #ec4899 30%, #f43f5e 90%)',
                    color: 'white',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #db2777 30%, #e11d48 90%)',
                    },
                  }}
                >
                  청첩장 만들기
                </Button>
              </Link>
            </Box>
          )}
        </Box>
      </Drawer>
    </AppBar>
  )
}