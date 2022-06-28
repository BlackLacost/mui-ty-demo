import { Box, Typography } from '@mui/material'

const Dummy = () => {
  return (
    <Box sx={{ maxWidth: 500, m: 10, border: '1px solid black' }}>
      <Typography variant="h2" component="h1" gutterBottom noWrap>
        Heading humpty dumpty sat on a wall, humpty dumpty had a great fall
      </Typography>
    </Box>
  )
}

export default Dummy
