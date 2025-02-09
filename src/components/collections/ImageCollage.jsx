import React from "react";
import { Box, CardMedia } from "@mui/material";

const ImageCollage = ({ images }) => {
  const collageImages = images.slice(0, 3);
  return (
    <Box>
      <Box display="flex" gap={1}>
        <Box flex={1}>
          {collageImages[0] && (
            <CardMedia
              component="img"
              src={collageImages[0]}
              alt="Image 1"
              sx={{
                width: "100%",
                height: 150,
                objectFit: "cover",
                borderRadius: 1,
              }}
            />
          )}
        </Box>
        <Box flex={1}>
          {collageImages[1] && (
            <CardMedia
              component="img"
              src={collageImages[1]}
              alt="Image 2"
              sx={{
                width: "100%",
                height: 150,
                objectFit: "cover",
                borderRadius: 1,
              }}
            />
          )}
        </Box>
      </Box>
      <Box mt={1}>
        {collageImages[2] && (
          <CardMedia
            component="img"
            src={collageImages[2]}
            alt="Image 3"
            sx={{
              width: "100%",
              height: 150,
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default ImageCollage;
