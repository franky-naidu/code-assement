import React from "react";
import { Paper, Stack, Typography } from "@mui/material";
import Add from "@mui/icons-material/Add";

const AddCollectionCard = ({ onClick, addContainerSx }) => (
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
    onClick={onClick}
  >
    <Stack direction="row" alignItems="center" spacing={1}>
      <Add fontSize="large" color="action" />
      <Typography variant="h6" fontWeight="bold" sx={{ color: "black" }}>
        Add Collection
      </Typography>
    </Stack>
  </Paper>
);

export default AddCollectionCard;
