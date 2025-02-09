import React from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Stack,
  Button
} from '@mui/material';

const EditArtworkModal = ({
  selectedArtwork,
  editTitle, setEditTitle,
  editArtist, setEditArtist,
  editMedium, setEditMedium,
  editYear, setEditYear,
  editHeight, setEditHeight,
  editWidth, setEditWidth,
  editDepth, setEditDepth,
  editPrice, setEditPrice,
  editCondition, setEditCondition,
  editEdition, setEditEdition,
  editDescription, setEditDescription,
  editAllTeams, setEditAllTeams,
  modalButtonSx,
  handleSaveChanges,
  closeEditModal
}) => {
  return (
    <>
      <img
        src={selectedArtwork.image}
        alt={selectedArtwork.title}
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '40vh',
          objectFit: 'contain'
        }}
      />
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Title"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            size="small"
            inputProps={{ style: { fontSize: '0.8rem', color: 'black' } }}
            sx={{
              '& .MuiInputLabel-root': {
                fontSize: '0.8rem',
                fontWeight: 'bold',
                color: 'black'
              }
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Artist"
            value={editArtist}
            onChange={(e) => setEditArtist(e.target.value)}
            size="small"
            inputProps={{ style: { fontSize: '0.8rem', color: 'black' } }}
            sx={{
              '& .MuiInputLabel-root': {
                fontSize: '0.8rem',
                fontWeight: 'bold',
                color: 'black'
              }
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Medium"
            value={editMedium}
            onChange={(e) => setEditMedium(e.target.value)}
            size="small"
            inputProps={{ style: { fontSize: '0.8rem', color: 'black' } }}
            sx={{
              '& .MuiInputLabel-root': {
                fontSize: '0.8rem',
                fontWeight: 'bold',
                color: 'black'
              }
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Year"
            value={editYear}
            onChange={(e) => setEditYear(e.target.value)}
            size="small"
            inputProps={{ style: { fontSize: '0.8rem', color: 'black' } }}
            sx={{
              '& .MuiInputLabel-root': {
                fontSize: '0.8rem',
                fontWeight: 'bold',
                color: 'black'
              }
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Height"
            value={editHeight}
            onChange={(e) => setEditHeight(e.target.value)}
            size="small"
            inputProps={{ style: { fontSize: '0.8rem', color: 'black' } }}
            sx={{
              '& .MuiInputLabel-root': {
                fontSize: '0.8rem',
                fontWeight: 'bold',
                color: 'black'
              }
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Width"
            value={editWidth}
            onChange={(e) => setEditWidth(e.target.value)}
            size="small"
            inputProps={{ style: { fontSize: '0.8rem', color: 'black' } }}
            sx={{
              '& .MuiInputLabel-root': {
                fontSize: '0.8rem',
                fontWeight: 'bold',
                color: 'black'
              }
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Depth"
            value={editDepth}
            onChange={(e) => setEditDepth(e.target.value)}
            size="small"
            inputProps={{ style: { fontSize: '0.8rem', color: 'black' } }}
            sx={{
              '& .MuiInputLabel-root': {
                fontSize: '0.8rem',
                fontWeight: 'bold',
                color: 'black'
              }
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Price"
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
            size="small"
            inputProps={{ style: { fontSize: '0.8rem', color: 'black' } }}
            sx={{
              '& .MuiInputLabel-root': {
                fontSize: '0.8rem',
                fontWeight: 'bold',
                color: 'black'
              }
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth size="small">
            <InputLabel sx={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'black' }}>
              Condition
            </InputLabel>
            <Select
              value={editCondition}
              onChange={(e) => setEditCondition(e.target.value)}
              inputProps={{ style: { fontSize: '0.8rem', color: 'black' } }}
            >
              <MenuItem value="Undamaged">Undamaged</MenuItem>
              <MenuItem value="Slight Damage">Slight Damage</MenuItem>
              <MenuItem value="Heavily Damaged">Heavily Damaged</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Edition Number"
            value={editEdition}
            onChange={(e) => setEditEdition(e.target.value)}
            size="small"
            inputProps={{ style: { fontSize: '0.8rem', color: 'black' } }}
            sx={{
              '& .MuiInputLabel-root': {
                fontSize: '0.8rem',
                fontWeight: 'bold',
                color: 'black'
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            size="small"
            inputProps={{ style: { fontSize: '0.8rem', color: 'black' } }}
            sx={{
              '& .MuiInputLabel-root': {
                fontSize: '0.8rem',
                fontWeight: 'bold',
                color: 'black'
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={editAllTeams}
                onChange={(e) => setEditAllTeams(e.target.checked)}
              />
            }
            label="All Teams"
            sx={{
              '& .MuiTypography-root': {
                fontSize: '0.8rem',
                color: 'black',
                fontWeight: 'bold'
              }
            }}
          />
        </Grid>
      </Grid>
      <Stack direction="row" spacing={2} sx={{ mt: 4, justifyContent: 'flex-end' }}>
        <Button onClick={closeEditModal} sx={modalButtonSx}>
          Cancel
        </Button>
        <Button onClick={handleSaveChanges} variant="contained" sx={modalButtonSx}>
          Save Changes
        </Button>
      </Stack>
    </>
  );
};

export default EditArtworkModal;
