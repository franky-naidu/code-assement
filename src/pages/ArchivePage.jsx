import React, { useState } from 'react';
import { BasicDashboardLayout } from '../components/layouts';
import {
  Paper,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Stack,
  Grid,
  Box,
  Modal,
  Button,
  Pagination,
  Card,
  CardMedia
} from "@mui/material";
import GridViewIcon from '@mui/icons-material/GridView';
import ListIcon from '@mui/icons-material/List';
import ArtworkCard from '../components/artworks/ArtworkCard';
import UploadArtworkCard from '../components/artworks/UploadArtworkCard';
import UploadArtworkModal from '../components/artworks/UploadArtworkModal';
import EditArtworkModal from '../components/artworks/EditArtworkModal';

import img1 from '../assets/art/1.png';
import img2 from '../assets/art/2.png';
import img3 from '../assets/art/3.png';
import img4 from '../assets/art/4.png';
import img5 from '../assets/art/5.jpg';
import img6 from '../assets/art/6.png';
import img7 from '../assets/art/7.png';
import img8 from '../assets/art/8.png';
import img9 from '../assets/art/9.png';
import img10 from '../assets/art/10.png';
import img11 from '../assets/art/11.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

// Create dummy artwork data with all details
const artworkData = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  title: `Artwork ${index + 1}`,
  artist: `Artist ${index + 1}`,
  medium: "Oil on Canvas",
  year: 2020 + (index % 5),
  height: "100cm",
  width: "80cm",
  depth: "2cm",
  price: `$${500 + index * 10}`,
  condition: "Undamaged",
  edition: `1/${50}`,
  description: `This is a description for Artwork ${index + 1}.`,
  allTeams: true,
  image: images[index % images.length],
}));

const ArchivePage = () => {
  // Filter and view state
  const [filter, setFilter] = useState('all');
  const [view, setView] = useState('grid');

  // Pagination state
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(artworkData.length / itemsPerPage);
  const currentItems = artworkData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Modal state for Upload and Edit (separately)
  const [openUploadModal, setOpenUploadModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  // Upload modal state
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadArtist, setUploadArtist] = useState("");
  const [uploadMedium, setUploadMedium] = useState("");
  const [uploadYear, setUploadYear] = useState("");
  const [uploadHeight, setUploadHeight] = useState("");
  const [uploadWidth, setUploadWidth] = useState("");
  const [uploadDepth, setUploadDepth] = useState("");
  const [uploadPrice, setUploadPrice] = useState("");
  const [uploadCondition, setUploadCondition] = useState("Undamaged");
  const [uploadEdition, setUploadEdition] = useState("");
  const [uploadDescription, setUploadDescription] = useState("");
  const [uploadAllTeams, setUploadAllTeams] = useState(true);
  const [uploadImage, setUploadImage] = useState(null);

  // Edit modal state
  const [editTitle, setEditTitle] = useState("");
  const [editArtist, setEditArtist] = useState("");
  const [editMedium, setEditMedium] = useState("");
  const [editYear, setEditYear] = useState("");
  const [editHeight, setEditHeight] = useState("");
  const [editWidth, setEditWidth] = useState("");
  const [editDepth, setEditDepth] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editCondition, setEditCondition] = useState("Undamaged");
  const [editEdition, setEditEdition] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editAllTeams, setEditAllTeams] = useState(true);

  // Styling for Pagination items (grey background, black text, small font)
  const paginationSx = {
    "& .MuiPaginationItem-root": {
      backgroundColor: "#d3d3d3",
      color: "black",
      fontSize: "0.8rem",
      "&.Mui-selected": {
        backgroundColor: "#c0c0c0",
      },
    },
  };

  // Styling for modal action buttons (white background, black text, small font, thin border)
  const modalButtonSx = {
    backgroundColor: 'white',
    color: 'black',
    fontSize: '0.8rem',
    border: '1px solid black',
    textTransform: 'none',
    '&:hover': { backgroundColor: '#f5f5f5' },
  };

  // Handlers for filter, view, and pagination
  const handleFilterChange = (event, newFilter) => setFilter(newFilter);
  const handleViewChange = (event, nextView) => nextView && setView(nextView);
  const handlePageChange = (event, value) => setCurrentPage(value);

  // Handler for file upload in the upload modal
  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadImage(URL.createObjectURL(file));
    }
  };

  // Open the Upload Artwork Modal: clear fields
  const openUpload = () => {
    setOpenUploadModal(true);
    setUploadTitle("");
    setUploadArtist("");
    setUploadMedium("");
    setUploadYear("");
    setUploadHeight("");
    setUploadWidth("");
    setUploadDepth("");
    setUploadPrice("");
    setUploadCondition("Undamaged");
    setUploadEdition("");
    setUploadDescription("");
    setUploadAllTeams(true);
    setUploadImage(null);
  };

  // Open the Edit Artwork Modal: prefill fields from selected artwork
  const openEdit = (artwork) => {
    setSelectedArtwork(artwork);
    setEditTitle(artwork.title);
    setEditArtist(artwork.artist);
    setEditMedium(artwork.medium);
    setEditYear(artwork.year);
    setEditHeight(artwork.height);
    setEditWidth(artwork.width);
    setEditDepth(artwork.depth);
    setEditPrice(artwork.price);
    setEditCondition(artwork.condition);
    setEditEdition(artwork.edition);
    setEditDescription(artwork.description);
    setEditAllTeams(artwork.allTeams);
    setOpenEditModal(true);
  };

  // Close modals
  const closeUpload = () => {
    setOpenUploadModal(false);
    setUploadImage(null);
  };
  const closeEdit = () => setOpenEditModal(false);

  // Dummy handlers for uploading and saving changes
  const handleUploadArtwork = () => {
    console.log("Uploading Artwork with details:", {
      uploadTitle,
      uploadArtist,
      uploadMedium,
      uploadYear,
      uploadHeight,
      uploadWidth,
      uploadDepth,
      uploadPrice,
      uploadCondition,
      uploadEdition,
      uploadDescription,
      uploadAllTeams,
      uploadImage
    });
    closeUpload();
  };

  const handleSaveChanges = () => {
    console.log("Saving changes for artwork:", {
      editTitle,
      editArtist,
      editMedium,
      editYear,
      editHeight,
      editWidth,
      editDepth,
      editPrice,
      editCondition,
      editEdition,
      editDescription,
      editAllTeams
    });
    closeEdit();
  };

  // Render grid view card for existing artworks
  const renderGridCard = (artwork) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={artwork.id}>
      <Box sx={{ minHeight: "450px", maxWidth: "550px", margin: "auto" }}>
        <ArtworkCard
          title={artwork.title}
          image={artwork.image}
          onClick={() => openEdit(artwork)}
        />
      </Box>
    </Grid>
  );

  return (
    <BasicDashboardLayout>
      <Paper elevation={0} className="m-5 p-5" sx={{ background: 'transparent', boxShadow: 'none' }}>
        <Stack spacing={2}>
          <Typography variant="h4" fontWeight="100" sx={{ fontFamily: 'Roboto, sans-serif', color: 'black' }}>
            ARCHIVE
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <ToggleButtonGroup
              value={filter}
              exclusive
              onChange={handleFilterChange}
              size="small"
              sx={{
                '& .MuiToggleButton-root': {
                  border: 'none',
                  borderRadius: '20px',
                  padding: '6px 12px',
                  textTransform: 'capitalize',
                },
                '& .Mui-selected': { backgroundColor: '#cccccc' },
              }}
            >
              <ToggleButton value="art">Art</ToggleButton>
              <ToggleButton value="content">Content</ToggleButton>
              <ToggleButton value="all">All</ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup
              value={view}
              exclusive
              onChange={handleViewChange}
              size="small"
              sx={{
                '& .MuiToggleButton-root': { border: 'none', borderRadius: '10px', padding: '6px' },
                '& .Mui-selected': { backgroundColor: '#cccccc' },
              }}
            >
              <ToggleButton value="grid">
                <GridViewIcon />
              </ToggleButton>
              <ToggleButton value="list">
                <ListIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {view === 'grid' ? (
            <Grid container spacing={2} sx={{ mt: 4 }}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <UploadArtworkCard onClick={openUpload} />
              </Grid>
              {currentItems.map((artwork) => renderGridCard(artwork))}
            </Grid>
          ) : (
            <Stack spacing={2} sx={{ mt: 4 }}>
              <Box onClick={openUpload}>
                <UploadArtworkCard onClick={openUpload} />
              </Box>
              {currentItems.map((artwork) => (
                <Box key={artwork.id} onClick={() => openEdit(artwork)} sx={{ cursor: 'pointer' }}>
                  {/* For list view we display a simplified card */}
                  <Box sx={{ display: 'flex', boxShadow: 3, transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.02)' } }}>
                    <CardMedia
                      component="img"
                      image={artwork.image}
                      alt={artwork.title}
                      sx={{ width: 151, objectFit: 'cover' }}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 2 }}>
                      <Typography variant="h6">{artwork.title}</Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Stack>
          )}

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, ...paginationSx }}>
            <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
          </Box>
        </Stack>
      </Paper>

      {/* Upload Artwork Modal */}
      <Modal
        open={openUploadModal}
        onClose={closeUpload}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            padding: 4,
            borderRadius: 2,
            boxShadow: 24,
            maxWidth: '80vw',
            maxHeight: '90vh',
            width: '100%',
            overflowY: 'auto',
          }}
        >
          <Typography variant="caption" sx={{ color: "#888", mb: 2, display: "block" }}>
            Upload artwork details below.
          </Typography>
          <UploadArtworkModal
            uploadTitle={uploadTitle}
            setUploadTitle={setUploadTitle}
            uploadArtist={uploadArtist}
            setUploadArtist={setUploadArtist}
            uploadMedium={uploadMedium}
            setUploadMedium={setUploadMedium}
            uploadYear={uploadYear}
            setUploadYear={setUploadYear}
            uploadHeight={uploadHeight}
            setUploadHeight={setUploadHeight}
            uploadWidth={uploadWidth}
            setUploadWidth={setUploadWidth}
            uploadDepth={uploadDepth}
            setUploadDepth={setUploadDepth}
            uploadPrice={uploadPrice}
            setUploadPrice={setUploadPrice}
            uploadCondition={uploadCondition}
            setUploadCondition={setUploadCondition}
            uploadEdition={uploadEdition}
            setUploadEdition={setUploadEdition}
            uploadDescription={uploadDescription}
            setUploadDescription={setUploadDescription}
            uploadAllTeams={uploadAllTeams}
            setUploadAllTeams={setUploadAllTeams}
            uploadImage={uploadImage}
            handleUploadImage={handleUploadImage}
            modalButtonSx={modalButtonSx}
          />
          <Stack direction="row" spacing={2} sx={{ mt: 4, justifyContent: 'flex-end' }}>
            <Button onClick={closeUpload} sx={modalButtonSx}>
              Cancel
            </Button>
            <Button onClick={handleUploadArtwork} variant="contained" sx={modalButtonSx}>
              Upload Artwork
            </Button>
          </Stack>
        </Box>
      </Modal>

      {/* Edit Artwork Modal */}
      <Modal
        open={openEditModal}
        onClose={closeEdit}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            padding: 4,
            borderRadius: 2,
            boxShadow: 24,
            maxWidth: '80vw',
            maxHeight: '90vh',
            width: '100%',
            overflowY: 'auto',
          }}
        >
          {selectedArtwork && (
            <EditArtworkModal
              selectedArtwork={selectedArtwork}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              editArtist={editArtist}
              setEditArtist={setEditArtist}
              editMedium={editMedium}
              setEditMedium={setEditMedium}
              editYear={editYear}
              setEditYear={setEditYear}
              editHeight={editHeight}
              setEditHeight={setEditHeight}
              editWidth={editWidth}
              setEditWidth={setEditWidth}
              editDepth={editDepth}
              setEditDepth={setEditDepth}
              editPrice={editPrice}
              setEditPrice={setEditPrice}
              editCondition={editCondition}
              setEditCondition={setEditCondition}
              editEdition={editEdition}
              setEditEdition={setEditEdition}
              editDescription={editDescription}
              setEditDescription={setEditDescription}
              editAllTeams={editAllTeams}
              setEditAllTeams={setEditAllTeams}
              modalButtonSx={modalButtonSx}
              handleSaveChanges={handleSaveChanges}
              closeEditModal={closeEdit}
            />
          )}
        </Box>
      </Modal>
    </BasicDashboardLayout>
  );
};

export default ArchivePage;
