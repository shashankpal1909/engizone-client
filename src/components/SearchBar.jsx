import React, { useState } from "react";
import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ setSearchQuery }) => {
  return (
    <Box
      component="form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <TextField
        // id="search-bar"
        // className="text"
        // shape="rounded"
        fullWidth
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        sx={{ borderRadius: "20" }}
        // padding={0}
        // label="Search bar"
        variant="outlined"
        placeholder="Search..."
        // size="small"
        // pa={0}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton
              // type="submit"
              // variant="outline-secondary"
              // aria-label="search"
              >
                <SearchIcon sx={{ color: "blue" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
