import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import ufoSvg from './assets/svg/ufo.svg';

const NotFound: FC = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: 'auto',
        }}>
        <Box sx={{ width: '350px', height: 'auto', margin: '40px 0' }}>
          <img src={ufoSvg} alt="UFO - Page Not Found" style={{ width: '100%', height: 'auto' }} />
        </Box>
        <Typography variant="h1" fontSize={'2.5rem'}>
          Page Not Found
        </Typography>
      </Box>
    </>
  );
};

export default NotFound;
