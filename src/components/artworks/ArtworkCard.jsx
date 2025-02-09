import React from 'react';
import { Card, CardMedia, Box, Typography } from '@mui/material';

const ArtworkCard = ({ title, image, onClick }) => (
  <Card
    onClick={onClick}
    sx={{
      maxWidth: 300,
      boxShadow: 3,
      position: 'relative',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
      '&:hover': { transform: 'scale(1.05)' },
      '&:hover .overlay': { opacity: 1 },
    }}
  >
    <CardMedia component="img" height="200" image={image} alt={title} />
    <Box
      className="overlay"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0,
        transition: 'opacity 0.3s ease',
      }}
    >
      <Typography variant="h6" component="div">
        {title}
      </Typography>
    </Box>
  </Card>
);

export default ArtworkCard;
