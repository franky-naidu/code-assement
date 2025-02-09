import React, { useState } from "react";
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
import { ViewList, ViewModule, Add } from "@mui/icons-material";
import { BasicDashboardLayout } from "../components/layouts/index";

import img1 from "../assets/art/1.png";
import img2 from "../assets/art/2.png";
import img3 from "../assets/art/3.png";
import img4 from "../assets/art/4.png";
import img5 from "../assets/art/5.jpg";
import img6 from "../assets/art/6.png";
import img7 from "../assets/art/7.png";
import img8 from "../assets/art/8.png";
import img9 from "../assets/art/9.png";
import img10 from "../assets/art/10.png";
import img11 from "../assets/art/11.png";
import ImageCollage from "../components/collections/ImageCollage";
import CollectionCard from "../components/collectionsD/CollectionCard";

// Base collections data with contributors (sample initials)
const baseCollections = [
  {
    title: "Nnamdi Test",
    description: "Provide pictures of flowers",
    images: [img1, img2, img3],
    contributors: ["NT", "AB", "XY"],
  },
  {
    title: "DW Test",
    description: "Photographs one or more subjects with a dark background",
    images: [img4, img5, img6],
    contributors: ["DW", "CD", "EF"],
  },
  {
    title: "DT Demo",
    description: "Contemporary art that is oil based.",
    images: [img7, img8, img9],
    contributors: ["DT", "GH", "IJ"],
  },
  {
    title: "Alexander",
    description: "Gloomy portraits with one or more subjects and a dark background",
    images: [img10, img11],
    contributors: ["AL", "KL", "MN"],
  },
];

// Create 12 collection items so that we have 3 pages (itemsPerPage = 4)
const initialCollections = Array.from({ length: 12 }, (_, i) => {
  const base = baseCollections[i % baseCollections.length];
  return {
    id: i + 1,
    title: `${base.title} ${i + 1}`,
    description: base.description,
    images: base.images,
    contributors: base.contributors,
    // Initially, no subcollections.
    children: [],
  };
});


const Collections = () => {
  // Use state for collections so we can update for drag & drop
  const [collections, setCollections] = useState(initialCollections);

  // View toggle and pagination state
  const [isListView, setIsListView] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(collections.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCollections = collections.slice(indexOfFirstItem, indexOfLastItem);

  // Modal state for "Add Collection"
  const [openModal, setOpenModal] = useState(false);
  const [collectionName, setCollectionName] = useState("");
  const [collectionDescription, setCollectionDescription] = useState("");
  const [team, setTeam] = useState("");
  const [preferences, setPreferences] = useState("");
  const [tags, setTags] = useState("");

  const handleViewChange = (event, nextView) => {
    if (nextView !== null) {
      setIsListView(nextView === "list");
    }
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  
  // Styling for the Add Collection container
  const addContainerSx = {
    border: "1px solid black",
    bgcolor: "white",
    cursor: "pointer",
  };

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
    <BasicDashboardLayout>
      <Paper elevation={0} sx={{ background: "#f5f5f5", minHeight: "100vh", p: 3 }}>
        <Stack spacing={3}>
          <Typography variant="h4" fontWeight="300" sx={{ fontFamily: "Roboto, sans-serif", color: "black" }}>
            COLLECTIONS
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <ToggleButtonGroup
              value={isListView ? "list" : "grid"}
              exclusive
              onChange={handleViewChange}
              size="small"
              sx={{ "& .MuiToggleButton-root": { border: "none", borderRadius: 2, p: 1 } }}
            >
              <ToggleButton value="grid">
                <ViewModule />
              </ToggleButton>
              <ToggleButton value="list">
                <ViewList />
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {isListView ? (
            <List>
              {/* Add Collection Container for List View */}
              <ListItem
                sx={{
                  display: "flex",
                  gap: 2,
                  mb: 2,
                  p: 2,
                  bgcolor: "#fff",
                  borderRadius: 2,
                  boxShadow: 1,
                  ...addContainerSx,
                }}
                onClick={handleOpenModal}
              >
                <Box
                  sx={{
                    width: 150,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Add fontSize="large" color="action" />
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" sx={{ color: "black" }}>
                    Add Collection
                  </Typography>
                </Box>
              </ListItem>

              {/* Render paginated collection items in List View */}
              {currentCollections.map((collection) => renderCollectionCard(collection))}
            </List>
          ) : (
            <Grid container spacing={2}>
              {/* Add Collection Container for Grid View */}
              <Grid item xs={12} sm={6} md={4}>
                <Paper
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    boxShadow: 1,
                    ...addContainerSx,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "450px",
                    maxWidth: "550px",
                    margin: "auto",
                  }}
                  onClick={handleOpenModal}
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Add fontSize="large" color="action" />
                    <Typography variant="h6" fontWeight="bold" sx={{ color: "black" }}>
                      Add Collection
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>

              {/* Render paginated collection items in Grid View */}
              {currentCollections.map((collection) => (
                <Grid item xs={12} sm={6} md={4} key={collection.id}>
                  <Box sx={{ minHeight: "450px", maxWidth: "550px", margin: "auto" }}>
                    <CollectionCard isListView={isListView} collection={collection} handleDragOver={handleDragOver} handleDrop={handleDrop} handleDragStart={handleDragStart} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}

          {/* Pagination */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 3,
              "& .MuiPaginationItem-root": {
                backgroundColor: "#d3d3d3",
                color: "black",
                "&.Mui-selected": {
                  backgroundColor: "#c0c0c0",
                },
              },
            }}
          >
            <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
          </Box>
        </Stack>
      </Paper>

      {/* Modal for Creating a New Collection */}
      <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="sm">
        <DialogContent dividers>
          {/* Caption Text */}
          <Typography variant="caption" sx={{ color: "#888", mb: 2, display: "block" }}>
            Start a collection to categorize and manage your content.
          </Typography>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="Collection Name"
              variant="outlined"
              fullWidth
              required
              value={collectionName}
              onChange={(e) => setCollectionName(e.target.value)}
              InputLabelProps={{
                style: { fontSize: "0.8rem", fontWeight: "bold" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: 1 },
                backgroundColor: "#fff",
                "& .MuiInputLabel-root": { color: "#555" },
                input: { color: "black" },
              }}
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={3}
              value={collectionDescription}
              onChange={(e) => setCollectionDescription(e.target.value)}
              InputLabelProps={{
                style: { fontSize: "0.8rem", fontWeight: "bold" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: 1 },
                backgroundColor: "#fff",
                "& .MuiInputLabel-root": { color: "#555" },
                input: { color: "black" },
              }}
            />
            <TextField
              label="Assign to a Team"
              variant="outlined"
              fullWidth
              required
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              InputLabelProps={{
                style: { fontSize: "0.8rem", fontWeight: "bold" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: 1 },
                backgroundColor: "#fff",
                "& .MuiInputLabel-root": { color: "#555" },
                input: { color: "black" },
              }}
            />
            <TextField
              label="Preferences"
              variant="outlined"
              fullWidth
              required
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              InputLabelProps={{
                style: { fontSize: "0.8rem", fontWeight: "bold" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: 1 },
                backgroundColor: "#fff",
                "& .MuiInputLabel-root": { color: "#555" },
                input: { color: "black" },
              }}
            />
            <TextField
              label="Tags"
              variant="outlined"
              fullWidth
              required
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              InputLabelProps={{
                style: { fontSize: "0.8rem", fontWeight: "bold" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: 1 },
                backgroundColor: "#fff",
                "& .MuiInputLabel-root": { color: "#555" },
                input: { color: "black" },
              }}
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={handleCloseModal} sx={{ color: "black" }}>
            Cancel
          </Button>
          <Button onClick={handleCreateCollection} variant="outlined" sx={{ borderColor: "black", color: "black" }}>
            Create Collection
          </Button>
        </DialogActions>
      </Dialog>
    </BasicDashboardLayout>
  );
};

export default Collections;
