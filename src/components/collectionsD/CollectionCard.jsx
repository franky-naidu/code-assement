import React from 'react'
import {
    Box,
    Typography,
    Button,
    Grid,
    Paper,
    Avatar,
    AvatarGroup,
    Chip,
    ToggleButtonGroup,
    ToggleButton,
    Stack,
    CardMedia,
    List,
    ListItem,
    Pagination,
    Dialog,
    DialogContent,
    DialogActions,
    TextField,
  } from "@mui/material";
import ImageCollage from './ImageCollage';


// Updated avatar styling: smaller avatars (32x32)
const avatarSx = {
    width: 32,
    height: 32,
    bgcolor: "#d3d3d3",
    color: "black",
    fontSize: "1rem",
    boxShadow: 2,
  };

  const viewButtonSx = {
    borderColor: "black",
    color: "black",
    "&:hover": {
      borderColor: "black",
      backgroundColor: "rgba(0, 0, 0, 0.05)",
    },
  };


const CollectionCard = ({collection,  isListView}) => {


    // Drag and Drop handlers
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetId) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData("text/plain");
    if (draggedId.toString() === targetId.toString()) return;
    const dId = parseInt(draggedId, 10);
    const draggedCollection = collections.find((col) => col.id === dId);
    if (!draggedCollection) return;
    // Remove dragged collection from top-level
    const newCollections = collections.filter((col) => col.id !== dId);
    // Add the dragged collection as a child of the target collection
    const updatedCollections = newCollections.map((col) => {
      if (col.id === targetId) {
        return {
          ...col,
          children: col.children ? [...col.children, draggedCollection] : [draggedCollection],
        };
      }
      return col;
    });
    setCollections(updatedCollections);
  };

  // Modal handlers
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setCollectionName("");
    setCollectionDescription("");
    setTeam("");
    setPreferences("");
    setTags("");
    setOpenModal(false);
  };
  const handleCreateCollection = () => {
    console.log("Creating Collection with values:");
    console.log("Name:", collectionName);
    console.log("Description:", collectionDescription);
    console.log("Assign to Team:", team);
    console.log("Preferences:", preferences);
    console.log("Tags:", tags);
    handleCloseModal();
  };

    return (
      <Box
        draggable
        onDragStart={(e) => handleDragStart(e, collection.id)}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, collection.id)}
      >
        {isListView ? (
          <ListItem
            sx={{
              display: "flex",
              gap: 2,
              mb: 2,
              p: 2,
              bgcolor: "#fff",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            {/* Left Column: Image Collage */}
            <Box sx={{ width: 150 }}>
              <ImageCollage images={collection.images} />
            </Box>
            {/* Right Column: Collection Details */}
            <Box sx={{ flex: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6" fontWeight="bold" sx={{ color: "black" }}>
                  {collection.title}
                </Typography>
                <Button variant="outlined" size="small" sx={viewButtonSx}>
                  View Collection
                </Button>
              </Box>
              <Box sx={{ mt: 1 }}>
              
                <AvatarGroup max={3}>
                  {collection.contributors.map((contributor, index) => (
                    <Avatar key={index} sx={{ width: 30, height: 30 }}>
                      
                      <span className="text-sm font-semibold"> {contributor}</span>
                    </Avatar>
                  ))}
                </AvatarGroup>
              </Box>
              <Typography variant="body2" sx={{ mt: 1, color: "black" }}>
                {collection.description}
              </Typography>
              {/* Render subcollections as Chips */}
              {collection.children && collection.children.length > 0 && (
                <Box sx={{ mt: 1 }}>
                  <Typography
                    variant="caption"
                    sx={{ color: "black", fontWeight: "bold", mb: 0.5, display: "block" }}
                  >
                    Sub Collections:
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
                    {collection.children.map((child) => (
                      <Chip
                        key={child.id}
                        label={child.title}
                        variant="outlined"
                        size="small"
                        sx={{ borderColor: "black", color: "black" }}
                      />
                    ))}
                  </Stack>
                </Box>
              )}
            </Box>
          </ListItem>
        ) : (
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
            <Box
              sx={{
                mt: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
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
            {/* Render subcollections as Chips */}
            {collection.children && collection.children.length > 0 && (
              <Box sx={{ mt: 1 }}>
                <Typography
                  variant="caption"
                  sx={{ color: "black", fontWeight: "bold", mb: 0.5, display: "block" }}
                >
                  Sub Collections:
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
                  {collection.children.map((child) => (
                    <Chip
                      key={child.id}
                      label={child.title}
                      variant="outlined"
                      size="small"
                      sx={{ borderColor: "black", color: "black" }}
                    />
                  ))}
                </Stack>
              </Box>
            )}
          </Paper>
        )}
      </Box>
    );
  }

export default CollectionCard