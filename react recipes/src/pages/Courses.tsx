import { Typography, Box, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { School as SchoolIcon, Star, Timer, Category } from '@mui/icons-material';
const Courses = () => {
  const courses = [
    {
      id: 1, title: 'Italian Cooking Basics',
      description: 'Learn the essentials of Italian cooking, from pasta to classic sauces.',
      image: '/src/images/italian.jpg',
      level: 'Beginner',
      duration: '6 weeks',
      rating: 4.8,
      category: 'Italian Cuisine'
    },
    {
      id: 2, title: 'Smoothie Recipes',
      description: 'Learn to make delicious and healthy smoothies with fresh ingredients.',
      image: '/src/images/smoothie.jpg',
      level: 'Beginner',
      duration: '4 weeks',
      rating: 4.8,
      category: 'Healthy Drinks'
    },
    {
      id: 3, title: 'Vegan Cooking 101',
      description: 'A beginner’s guide to preparing healthy and delicious vegan meals.',
      image: '/src/images/vegan.jpg',
      level: 'Beginner',
      duration: '4 weeks',
      rating: 4.7,
      category: 'Vegan Cooking'
    },
    {
      id: 4, title: 'French Pastry Techniques',
      description: 'Discover the art of French pastry making, from éclairs to macaroons.',
      image: '/src/images/pastry.jpg',
      level: 'Intermediate',
      duration: '5 weeks',
      rating: 4.6,
      category: 'French Pastry'
    },
    {
      id: 5, title: 'Indian Spices and Flavors',
      description: 'Explore the rich flavors of Indian cuisine, focusing on spices and traditional dishes.',
      image: '/src/images/indian.jpg',
      level: 'Advanced',
      duration: '7 weeks',
      rating: 4.8,
      category: 'Indian Cuisine'
    },
    {
      id: 6, title: 'Baking Bread at Home',
      description: 'Learn to bake various types of bread, from sourdough to brioche, in your own kitchen.',
      image: '/src/images/bread.jpg',
      level: 'Beginner',
      duration: '4 weeks',
      rating: 4.5,
      category: 'Baking'
    }
  ];
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mb: 6 }}>
          <SchoolIcon sx={{ fontSize: 60, color: 'primary.main' }} />
          <Typography variant="h2">Our Courses</Typography>
          <Typography variant="h5" color="text.secondary" textAlign="center">
            Enhance your culinary skills with our expert-led cooking courses
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
          {courses.map((course) => (
            <Card key={course.id} sx={{ flex: '1 1 300px', maxWidth: 350, display: 'flex', flexDirection: 'column' }}>
              <CardMedia component="img" height="200" image={course.image} alt={course.title} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ mb: 2 }}>
                  <Chip label={course.level} color="primary" size="small" sx={{ mr: 1 }} />
                  <Chip icon={<Category sx={{ fontSize: 16 }} />} label={course.category} size="small" />
                </Box>
                <Typography variant="h5" gutterBottom>{course.title}</Typography>
                <Typography color="text.secondary">{course.description}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Timer sx={{ fontSize: 20, mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">{course.duration}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Star sx={{ fontSize: 20, mr: 1, color: 'warning.main' }} />
                    <Typography variant="body2">{course.rating}</Typography>
                  </Box>
                </Box>
                <Button variant="contained" fullWidth>Enroll Now</Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Courses;