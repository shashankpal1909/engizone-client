import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Box,
  TextField,
  IconButton,
  InputAdornment,
  styled,
} from "@mui/material";

const RoundedTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    padding: "0rem 0.5rem",
    "& fieldset": {
      borderRadius: 100,
    },
  },
});

const SearchBar = ({ searchQuery, setSearchQuery, searchQuestions }) => {
  return (
    <Box
      component="form"
      onSubmit={(event) => {
        event.preventDefault();
        searchQuestions();
      }}
    >
      <RoundedTextField
        autoFocus
        // id="search-bar"
        // className="text"
        // shape="rounded"
        fullWidth
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        // padding={0}
        // label="Search bar"
        variant="outlined"
        placeholder="Search..."
        // size="small"
        // pa={0}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                type="submit"
                // variant="outline-secondary"
                // aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
