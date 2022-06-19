import React from "react";
import { Box, CircularProgress } from "@mui/material";

export function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        flex: "auto",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
