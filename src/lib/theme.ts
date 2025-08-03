import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF69B4', // 핑크색 (청첩장 컨셉)
      light: '#FFB3D9',
      dark: '#E91E63',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9C27B0', // 보라색
      light: '#CE93D8',
      dark: '#7B1FA2',
      contrastText: '#ffffff',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: [
      'SUIT Variable',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#333333',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#333333',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#333333',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#666666',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(255, 105, 180, 0.3)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #FF69B4 30%, #FF1493 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #FF1493 30%, #DC143C 90%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          border: '1px solid #f0f0f0',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
          },
        },
      },
    },
  },
})