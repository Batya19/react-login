import { Typography, Box, Avatar } from '@mui/material';
import { Info as InfoIcon, People, EmojiEvents, Timer } from '@mui/icons-material';

const About = () => {
  const stats = [
    { icon: <People sx={{ fontSize: 40, color: 'primary.light' }} />, value: '10,000+', label: 'Active Users' },
    { icon: <EmojiEvents sx={{ fontSize: 40, color: 'secondary.main' }} />, value: '500+', label: 'Premium Recipes' },
    { icon: <Timer sx={{ fontSize: 40, color: 'primary.dark' }} />, value: '24/7', label: 'Support' }
  ];

  const team = [
    { name: 'John Smith', role: 'Founder & CEO', image: '/api/placeholder/80/80' },
    { name: 'Sarah Johnson', role: 'Head Chef', image: '/api/placeholder/80/80' },
    { name: 'Mike Wilson', role: 'Lead Developer', image: '/api/placeholder/80/80' }
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mb: 6 }}>
        <InfoIcon sx={{ fontSize: 60, color: '#4caf50' }} />
        <Typography variant="h2" sx={{ color: '#37474f' }}>About Us</Typography>
        <Typography variant="h5" color="text.secondary" textAlign="center">
          We bridge technology and culinary arts, creating a community of food enthusiasts and learners.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center', mb: 6 }}>
        {stats.map((stat, index) => (
          <Box key={index} sx={{
            flex: '1 1 300px',
            maxWidth: 350,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            {stat.icon}
            <Typography variant="h3" sx={{ mt: 2, mb: 1, color: '#37474f' }}>{stat.value}</Typography>
            <Typography variant="h6" sx={{ color: '#78909c' }}>{stat.label}</Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 4, color: '#37474f' }}>Our Team</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
          {team.map((member, index) => (
            <Box key={index} sx={{
              flex: '1 1 300px',
              maxWidth: 350,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Avatar src={member.image} sx={{ width: 80, height: 80, mb: 2 }} />
              <Typography variant="h6" sx={{ color: '#37474f' }}>{member.name}</Typography>
              <Typography sx={{ color: '#78909c' }}>{member.role}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default About;