import { Box, Grid, Typography, Button, Container } from '@mui/material';
import ImgMediaCard from './common/ImgMediaCard';
import { Link } from 'react-router-dom';
import { IContribution } from './interfaces';

const dummyCampaigns = [
  {
    _id: '1',
    title: 'Carved Exotic Wood Bookcase of Curated Holy Books',
    story: 'A curated library of mankind\'s holy scriptures embedded in an exotic carved block of wood to form one level. Features the Tao Te Ching and more.',
    image_url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=200&fit=crop',
    current_amount: 500,
    goal_amount: 12000,
    contributions: [{ amount: 500, fundraiserId: '1' }] as IContribution[],
    published: true,
  },
  {
    _id: '2',
    title: 'A JWST Robotic Replica Model with Real Gold-Plated Beryllium Mirrors',
    story: 'The James Webb Space Telescope — get your own replica that can fold and unfold just like the real thing with gold-plated mirrors.',
    image_url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=200&fit=crop',
    current_amount: 4000,
    goal_amount: 25000,
    contributions: [{ amount: 4000, fundraiserId: '2' }] as IContribution[],
    published: true,
  },
  {
    _id: '3',
    title: 'Building the Middle Earth Metaverse World for Oculus Rift',
    story: 'Wander from The Shire to Rivendell, through the great valleys of Rohan to the White Walls of Gondor in full VR.',
    image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop',
    current_amount: 20000,
    goal_amount: 125000,
    contributions: [{ amount: 20000, fundraiserId: '3' }] as IContribution[],
    published: true,
  },
  {
    _id: '4',
    title: 'Solar-Powered Vertical Farm for Urban Communities',
    story: 'Bringing fresh, organic produce to urban food deserts using cutting-edge vertical farming technology powered entirely by solar energy.',
    image_url: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=200&fit=crop',
    current_amount: 8500,
    goal_amount: 50000,
    contributions: [{ amount: 8500, fundraiserId: '4' }] as IContribution[],
    published: true,
  },
  {
    _id: '5',
    title: 'AI-Powered Braille E-Reader for the Visually Impaired',
    story: 'A revolutionary e-reader that converts any digital text to Braille in real time, making information accessible to millions worldwide.',
    image_url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop',
    current_amount: 15000,
    goal_amount: 75000,
    contributions: [{ amount: 15000, fundraiserId: '5' }] as IContribution[],
    published: true,
  },
  {
    _id: '6',
    title: 'Ocean Plastic to Luxury Furniture — Zero Waste Design Studio',
    story: 'We collect ocean plastic and transform it into stunning, high-end furniture pieces. Every purchase removes 10kg of plastic from the ocean.',
    image_url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=200&fit=crop',
    current_amount: 32000,
    goal_amount: 80000,
    contributions: [{ amount: 32000, fundraiserId: '6' }] as IContribution[],
    published: true,
  },
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{
        background: 'linear-gradient(135deg, #7b1fa2 0%, #9c27b0 50%, #ab47bc 100%)',
        color: 'white',
        py: 10,
        px: 4,
        textAlign: 'center',
        mb: 6,
      }}>
        <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, letterSpacing: '-0.5px' }}>
          Fund the Future,<br /> Back the Bold.
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.85, mb: 4, fontWeight: 400, maxWidth: '550px', mx: 'auto' }}>
          BackRise Nexus connects visionary creators with passionate backers.
          Discover campaigns that matter — or launch your own campaign.
        </Typography>
        <Link to="/campaign/create" style={{ textDecoration: 'none' }}>
          <Button variant="contained" size="large" sx={{
            backgroundColor: 'white',
            color: '#7b1fa2',
            fontWeight: 800,
            px: 5,
            py: 1.5,
            borderRadius: '50px',
            fontSize: '16px',
            '&:hover': { backgroundColor: '#f3e5f5' }
          }}>
            🚀 Start a Campaign
          </Button>
        </Link>
      </Box>

      {/* Stats Bar */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 6, mb: 6, flexWrap: 'wrap' }}>
        {[
          { value: '$2.4k+', label: 'Raised' },
          { value: '120+', label: 'Campaigns' },
          { value: '450+', label: 'Backers' },
        ].map((stat) => (
          <Box key={stat.label} sx={{ textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 900, color: '#7b1fa2' }}>{stat.value}</Typography>
            <Typography variant="body2" sx={{ color: '#888' }}>{stat.label}</Typography>
          </Box>
        ))}
      </Box>

      {/* Campaign Cards */}
      <Container>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: '#222' }}>
          🔥 Trending Campaigns
        </Typography>
        <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
          {dummyCampaigns.map((campaign) => (
            <Grid item key={campaign._id} xs={4} sm={4} md={4}>
              <Link to={`/campaign/${campaign._id}`} style={{ textDecoration: 'none' }}>
                <ImgMediaCard
                  title={campaign.title}
                  story={campaign.story}
                  image={campaign.image_url}
                  currentAmount={campaign.current_amount}
                  goalAmount={campaign.goal_amount}
                  contributions={campaign.contributions}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;