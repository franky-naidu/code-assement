import React from "react";
import { Box, Paper, Typography, Avatar, AvatarGroup, Button, Chip, Stack, CardMedia } from "@mui/material";
import ImageCollage from "./ImageCollage";

const CollectionCard = ({
  collection,
  isListView,
  avatarSx,
  viewButtonSx,
  onDragStart,
  onDragOver,
  onDrop,
  onClick,
}) => {
  // This component is used in grid view (you can extend it for list view as needed)
  return (
    <Box
      draggable
      onDragStart={(e) => onDragStart(e, collection.id)}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, collection.id)}
      onClick={onClick}
    >
      <Paper
        sx={{
          p: 2,
          borderRadius: 2,
          boxShadow: 1,
          minHeight: "450px",
          maxWidth: "550px",
          margin: "auto",
        }}
      >
        <Box sx={{ mb: 1 }}>
          <ImageCollage images={collection.images} />
        </Box>
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 1, color: "black" }}>
          {collection.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "black" }}>
          {collection.description}
        </Typography>
        <Box sx={{ mt: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <AvatarGroup max={3}>
            {collection.contributors.map((contributor, index) => (
              <Avatar key={index} sx={avatarSx}>
                {contributor}
              </Avatar>
            ))}
          </AvatarGroup>
          <Button variant="outlined" size="small" sx={viewButtonSx}>
            View Collection
          </Button>
        </Box>
        {collection.children && collection.children.length > 0 && (
          <Box sx={{ mt: 1 }}>
            <Typography variant="caption" sx={{ color: "black", fontWeight: "bold", mb: 0.5, display: "block" }}>
              Sub Collections:
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
              {collection.children.map((child) => (
                <Chip key={child.id} label={child.title} variant="outlined" size="small" sx={{ borderColor: "black", color: "black" }} />
              ))}
            </Stack>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default CollectionCard;
