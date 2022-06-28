import { Box, Button, Divider, Stack } from '@mui/material'

const Dummy = () => {
  return (
    <Box sx={{ ml: 5 }}>
      <Stack
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
      >
        <Button variant="text">Home</Button>
        <Button variant="text">About</Button>
        <Button variant="text">Contact</Button>
      </Stack>
    </Box>
  )
}

export default Dummy
