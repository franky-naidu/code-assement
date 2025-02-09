import React from "react";
import { Dialog, DialogContent, DialogActions, TextField, Button, Stack, Typography } from "@mui/material";

const AddCollectionModal = ({
  open,
  handleClose,
  collectionName,
  setCollectionName,
  collectionDescription,
  setCollectionDescription,
  team,
  setTeam,
  preferences,
  setPreferences,
  tags,
  setTags,
  handleCreateCollection,
}) => {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogContent dividers>
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
        <Button onClick={handleClose} sx={{ color: "black" }}>
          Cancel
        </Button>
        <Button onClick={handleCreateCollection} variant="outlined" sx={{ borderColor: "black", color: "black" }}>
          Create Collection
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCollectionModal;
