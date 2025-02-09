import React from 'react';
import {
  Box,
  Typography,
  Stack,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Button
} from '@mui/material';

const UploadArtworkModal = ({
  uploadTitle, setUploadTitle,
  uploadArtist, setUploadArtist,
  uploadMedium, setUploadMedium,
  uploadYear, setUploadYear,
  uploadHeight, setUploadHeight,
  uploadWidth, setUploadWidth,
  uploadDepth, setUploadDepth,
  uploadPrice, setUploadPrice,
  uploadCondition, setUploadCondition,
  uploadEdition, setUploadEdition,
  uploadDescription, setUploadDescription,
  uploadAllTeams, setUploadAllTeams,
  uploadImage,
  handleUploadImage,
  modalButtonSx
}) => {
  return (
    <Stack spacing={2}>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        required
        value={uploadTitle}
        onChange={(e) => setUploadTitle(e.target.value)}
        size="small"
        InputLabelProps={{
          style: { fontSize: '0.8rem', fontWeight: 'bold', color: 'black' }
        }}
        inputProps={{ style: { fontSize: '0.8rem', color: 'black' } }}
      />
      <TextField
        label="Artist"
        variant="outlined"
        fullWidth
        required
        value={uploadArtist}
        onChange={(e) => setUploadArtist(e.target.value)}
        size="small"
        InputLabelProps={{
          style: { fontSize: '0.8rem', fontWeight: 'bold', color: 'black' }
        }}
        inputProps={{ style: { fontSize: '0.8rem', color: 'black' } }}
      />
      <TextField
        label="Medium"
        variant="outlined"
        fullWidth
        required
        value={uploadMedium}
        onChange={(e) => setUploadMedium(e.target.value)}
        size="small"
        InputLabelProps={{
          style: { fontSize: '0.8rem', fontWeight: 'bold', color: 'black' }
        }}
        inputProps={{ style: { fontSize: '0.8rem', color: 'black' } }}
      />
      <TextField
        label="Year"
        variant="outlined"
        fullWidth
        required
        value={uploadYear}
        onChange={(e) => setUploadYear(e.target.value)}
        size="small"
        InputLabelProps={{
          style: { fontSize: '0.8rem', fontWeight: 'bold', color: 'black' }
        }}
        inputProps={{ style: { fontSize: '0.8rem', color: 'black' } }}
      />
      <TextField
        label="Height"
        variant="outlined"
        fullWidth
        required
        value={uploadHeight}
        onChange={(e) => setUploadHeight(e.target.value)}
        size="small"
        InputLabelProps={{
          style: { fontSize: '0.8rem', fontWeight: 'bold', color: 'black' }
        }}
        inputProps={{ style: { fontSize: '0.8rem', color: 'black' } }}
      />
      <TextField
        label="Width"
        variant="outlined"
        fullWidth
        required
        value={uploadWidth}
        onChange={(e) => setUploadWidth(e.target.value)}
        size="small"
        InputLabelProps={{
          style: { fontSize: '0.8rem', fontWeight: 'bold', color: 'black' }
        }}
        inputProps={{ style: { fontSize: '0.8rem', color: 'black' } }}
      />
      <TextField
        label="Depth"
        variant="outlined"
        fullWidth
        required
        value={uploadDepth}
        onChange={(e) => setUploadDepth(e.target.value)}
        size="small"
        InputLabelProps={{
          style: { fontSize: '0.8rem', fontWeight: 'bold', color: 'black' }
        }}
        inputProps={{ style: { fontSize: '0.8rem', color: 'black' } }}
      />
      <TextField
        label="Price"
        variant="outlined"
        fullWidth
        required
        value={uploadPrice}
        onChange={(e) => setUploadPrice(e.target.value)}
        size="small"
        InputLabelProps={{
          style: { fontSize: '0.8rem', fontWeight: 'bold', color: 'black' }
        }}
        inputProps={{ style: { fontSize: '0.8rem', color: 'black' } }}
      />
      <FormControl fullWidth size="small">
        <InputLabel sx={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'black' }}>Condition</InputLabel>
        <Select
          value={uploadCondition}
          onChange={(e) => setUploadCondition(e.target.value)}
          inputProps={{ style: { fontSize: '0.8rem', color: 'black' } }}
        >
          <MenuItem value="Undamaged">Undamaged</MenuItem>
          <MenuItem value="Slight Damage">Slight Damage</MenuItem>
          <MenuItem value="Heavily Damaged">Heavily Damaged</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Edition Number"
        variant="outlined"
        fullWidth
        required
        value={uploadEdition}
        onChange={(e) => setUploadEdition(e.target.value)}
        size="small"
        InputLabelProps={{
          style: { fontSize: '0.8rem', fontWeight: 'bold', color: 'black' }
        }}
        inputProps={{ style: { fontSize: '0.8rem', color: 'black' } }}
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        required
        multiline
        rows={4}
        value={uploadDescription}
        onChange={(e) => setUploadDescription(e.target.value)}
        size="small"
        InputLabelProps={{
          style: { fontSize: '0.8rem', fontWeight: 'bold', color: 'black' }
        }}
        inputProps={{ style: { fontSize: '0.8rem', color: 'black' } }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={uploadAllTeams}
            onChange={(e) => setUploadAllTeams(e.target.checked)}
          />
        }
        label="All Teams"
        sx={{ '& .MuiTypography-root': { fontSize: '0.8rem', color: 'black', fontWeight: 'bold' } }}
      />
      <Button
        variant="outlined"
        component="label"
        sx={modalButtonSx}
      >
        Choose Image
        <input type="file" accept="image/*" hidden onChange={handleUploadImage} />
      </Button>
      {uploadImage && (
        <Box>
          <img
            src={uploadImage}
            alt="Preview"
            style={{ width: '100%', maxHeight: '40vh', objectFit: 'contain' }}
          />
        </Box>
      )}
    </Stack>
  );
};

export default UploadArtworkModal;
