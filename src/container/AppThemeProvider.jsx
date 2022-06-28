import { createTheme, ThemeProvider } from '@mui/material'
import { amber, deepOrange, deepPurple, grey } from '@mui/material/colors'
import React from 'react'
import { ColorModeContext } from '../context/ThemeContext'

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: deepOrange,
          divider: deepOrange[200],
          background: {
            custom: '#cccccc',
          },
          text: {
            primary: amber[900],
            secondary: amber[800],
          },
        }
      : {
          primary: deepPurple,
          divider: deepPurple[700],
          background: {
            default: deepPurple[900],
            paper: deepPurple[900],
            custom: '#b90b10',
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
})

const AppThemeProvider = (props) => {
  const [mode, setMode] = React.useState('light')

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  const theme = createTheme(getDesignTokens(mode))

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default AppThemeProvider
