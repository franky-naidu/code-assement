import React from 'react';
import { Card, Box, Typography } from '@mui/material';

const UploadArtworkCard = ({ onClick }) => (
  <Card
    onClick={onClick}
    sx={{
      maxWidth: 300,
      height: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px dashed #9e9e9e',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      '&:hover': { backgroundColor: '#f5f5f5' },
    }}
  >
    <Box textAlign="center">
      <Typography variant="h6" sx={{ color: '#757575' }}>+</Typography>
      <Typography variant="body2" sx={{ color: '#757575' }}>Upload Artwork</Typography>
    </Box>
  </Card>
);

export default UploadArtworkCard;
