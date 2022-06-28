import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  useMediaQuery,
} from '@mui/material'
import React from 'react'
import { ColorModeContext } from '../context/ThemeContext'

export default function Navbar() {
  const ctx = React.useContext(ColorModeContext)
  const matches = useMediaQuery('(max-width: 600px)')

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {`${matches}` === 'true' && <MenuIcon />}
          </IconButton>
          <Box sx={{ ml: 5 }}>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              orientation="vertical"
              spacing={2}
            >
              <Button sx={{ color: '#fff' }} variant="text">
                Home
              </Button>
              <Button sx={{ color: '#fff' }} variant="text">
                About
              </Button>
              <Button sx={{ color: '#fff' }} variant="text">
                Contact
              </Button>
              <Button
                onClick={ctx.toggleColorMode}
                sx={{ color: '#fff' }}
                variant="text"
              >
                Toggle theme
              </Button>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
