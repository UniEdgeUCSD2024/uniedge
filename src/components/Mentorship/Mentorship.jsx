import { People, School, Star } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Grid,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Mentorship = () => {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        py: 5,
      }}
    >
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={6}
        >
          <Stack spacing={2}>
            <Typography variant='h4' fontWeight={'bold'}>
              Mentorship
            </Typography>
            <Typography variant='body1'>
              Hey, we know that the right guidance can be a game-changer in your personal and professional growth. Whether you're on the lookout for a mentor to help you climb the career ladder or eager to share your wisdom and shape the future of others, we've got your back. Explore tailored mentoring, gain insights from seasoned mentors, and connect with a community of like-minded individuals.
            </Typography>

            <Stack direction={'row'} spacing={1}>
              <Button
                variant='contained'
                onClick={() => {
                  navigate(`/mentorship/mentor/profile`);
                }}
              >
                Mentor
              </Button>
              <Button variant='contained'>Mentee</Button>
            </Stack>
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
        ></Grid>

        <Grid item xs={12}>
          <Stack spacing={4} justifyContent={'center'} py={6}>
            <Typography variant='h4' fontWeight={'bold'} textAlign={'center'}>
              Our Benefits
            </Typography>

            <Stack
              direction={'row'}
              spacing={2}
              justifyContent={'space-around'}
            >
              {[
                {
                  title: 'Mentoring',
                  description: 'Personalized guidance',
                  icon: <School fontSize='large' />,
                },
                {
                  title: 'Mentee Programs',
                  description: 'Learn from experts',
                  icon: <People fontSize='large' />,
                },
                {
                  title: 'Skill Enhancement',
                  description: 'Boost your skills',
                  icon: <Star fontSize='large' />,
                },
              ].map((item) => (
                <Stack key={item.title} spacing={1} alignItems={'center'}>
                  {item.icon}
                  <Typography variant='h6' fontWeight={'bold'}>
                    {item.title}
                  </Typography>
                  <Typography variant='body2'>{item.description}</Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Mentorship;
