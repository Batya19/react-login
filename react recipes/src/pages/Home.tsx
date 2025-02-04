import { Typography, Box, Card, CardContent, Button, CardMedia, Container } from '@mui/material';
import { Home as HomeIcon, TrendingUp, Security, Speed } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const features = [{
    icon: <TrendingUp sx={{ fontSize: 40, color: 'error.main' }} />,
    title: 'Diverse Recipes',
    description: 'Explore a culinary journey through global cuisines and flavors.',
    image: "src/images/simple.jpg"
  }, {
    icon: <Security sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Easy to Follow',
    description: 'Intuitive step-by-step guides that make cooking a breeze.',
    image: "src/images/healthy.jpg"
  }, {
    icon: <Speed sx={{ fontSize: 40, color: 'success.main' }} />,
    title: 'Quick & Delicious',
    description: 'Discover meals that are fast to prepare and bursting with flavor.',
    image: "src/images/expert.jpg"
  }];

  const sx = {
    flex: { display: 'flex', alignItems: 'center', gap: 4 },
    card: { borderRadius: 4, boxShadow: '0 15px 35px rgba(0,0,0,0.1)', overflow: 'hidden' },
    container: { justifyContent: 'space-between', py: 8 },
    heroImage: {
      height: 400,
      width: '100%',
      objectFit: 'cover',
      transition: 'transform 0.8s ease-in-out',
      '&:hover': { transform: 'scale(1.1)' }
    },
    featureImage: {
      width: '100%',
      objectFit: 'cover',
      transition: 'all 0.5s ease',
      '&:hover': {
        transform: 'scale(1.1) rotate(2deg)',
        filter: 'brightness(1.1) contrast(1.1)'
      }
    },
    button: {
      backgroundColor: '#d32f2f',
      px: 4, py: 1.5,
      borderRadius: 4,
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)',
        backgroundColor: '#b71c1c',
        boxShadow: '0 5px 15px rgba(211, 47, 47, 0.4)'
      },
      '&:active': { transform: 'scale(0.95)' }
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ ...sx.flex, ...sx.container }}>
        <Box sx={{ flex: 1, textAlign: 'left' }}>
          <HomeIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, fontSize: '3rem' }}>
            Welcome to the Velvet Kitchen
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary', mb: 3, fontSize: '1.5rem' }}>
            Where Passion Meets Flavor. Discover, Cook, and Celebrate Every Meal.
          </Typography>
          <Button variant="contained" size="large" onClick={() => navigate('/recipes')} sx={sx.button}>
            Start Your Culinary Journey
          </Button>
        </Box>
        <Box sx={{ flex: 1, maxWidth: 500 }}>
          <Card sx={sx.card}>
            <CardMedia component="img" image="src/images/home.jpg" alt="Culinary Inspiration" sx={sx.heroImage} />
          </Card>
        </Box>
      </Box>

      <Box sx={{ ...sx.flex, ...sx.container }}>
        {features.map((feature, index) => (
          <Card key={index} sx={{ flex: 1, ...sx.card }}>
            <CardMedia component="img" height="200" image={feature.image} alt={feature.title} sx={sx.featureImage} />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', p: 3 }}>
              {feature.icon}
              <Typography variant="h6" sx={{ mt: 2, mb: 1, color: '#2c3e50' }}>{feature.title}</Typography>
              <Typography color="text.secondary">{feature.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default HomePage;