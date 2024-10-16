import { Typography } from '@mui/material';

function HomePage() {
  return (
    <div>
      <Typography
        component="h1"
        variant="h1"
        color="primary"
        sx={{ color: (theme) => theme.palette.primary.contrastText }}
        //   sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
        HomePage
      </Typography>
    </div>
  );
}

export default HomePage;
