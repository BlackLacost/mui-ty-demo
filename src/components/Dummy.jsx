import { Box } from '@mui/material'

const Dummy = () => {
  return (
    <Box
      sx={{
        m: 10,
        width: 300,
        height: 300,
        backgroundColor: '#000',
        '&:hover': {
          backgroundColor: '#bbb',
        },
      }}
    />
  )
}

export default Dummy
