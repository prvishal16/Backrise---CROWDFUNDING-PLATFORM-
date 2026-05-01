import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ marginTop: '60px' }}>
      
      {/* About Section */}
      <Box sx={{
        backgroundColor: '#f9f4ff',
        padding: '50px 80px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '30px',
      }}>
        <Box sx={{ maxWidth: '350px' }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#7b1fa2', mb: 1 }}>
            🚀 BackRise Nexus
          </Typography>
          <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.8 }}>
            A crowdfunding platform where bold ideas meet real backers. 
            Launch your campaign, fund your vision, and rise together.
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: '#333' }}>PLATFORM</Typography>
          <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>Browse Campaigns</Typography>
          <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>Create Campaign</Typography>
          <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>How it Works</Typography>
        </Box>

        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: '#333' }}>TEST LOGIN</Typography>
          <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>📧 test@test.com</Typography>
          <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>🔑 password123</Typography>
        </Box>
      </Box>

      {/* Copyright Bar */}
      <Box sx={{
        backgroundColor: '#7b1fa2',
        padding: '16px',
        textAlign: 'center',
      }}>
        <Typography variant="body2" sx={{ color: 'white' }}>
          © 2026 P R Vishal - Crowdfunding Platform. All rights reserved.
        </Typography>
      </Box>

    </Box>
  );
};

export default Footer;