import { Box, Container, CssBaseline } from '@mui/material'

const Dummy = () => {
  return (
    <>
      {/* Normalize */}
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </>
  )
}

export default Dummy
