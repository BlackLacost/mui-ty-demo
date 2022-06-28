import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'

const photos = [
  {
    id: 1,
    url: 'https://placeimg.com/640/480/animals',
    name: 'Animals',
    desc: 'description 1',
  },
  {
    id: 2,
    url: 'https://placeimg.com/640/480/arch',
    name: 'Architecture',
    desc: 'description 2',
  },
  {
    id: 3,
    url: 'https://placeimg.com/640/480/nature',
    name: 'Nature',
    desc: 'description 3',
  },
  {
    id: 4,
    url: 'https://placeimg.com/640/480/people',
    name: 'People',
    desc: 'description 4',
  },
  {
    id: 5,
    url: 'https://placeimg.com/640/480/tech',
    name: 'Tech',
    desc: 'description 5',
  },
]

const Dummy = () => {
  return (
    <Box>
      {/* <Grid container spacing={1}> */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 4, lg: 8 }}>
        {photos.map((photo) => (
          <Grid key={photo.id} item xs={6} sm={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                height="240"
                image={photo.url}
                alt={photo.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {photo.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {photo.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Dummy
