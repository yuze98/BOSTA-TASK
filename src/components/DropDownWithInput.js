import React, { useState, useContext } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import { AppContext } from "../AppContext.js";
export default function DropdownWithInput() {
  const [anchorEl, setAnchorEl] = useState(null);
  const {setInputValue } = useContext(AppContext); // Use context provided by AppProvider instead of local state
  const [currentInputValue, setCurrentInputValue] = useState();
  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setCurrentInputValue('');
    setInputValue(currentInputValue); 
  };
  const handleChange = (event) => {
    setCurrentInputValue(event.target.value);
  };
  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <InputBase
        defaultValue="تتبع شحنتك"
        startAdornment={
          anchorEl ? (
            <ChevronLeftIcon fontSize="xs" />
          ) : (
            <ExpandMoreIcon fontSize="xs" />
          )
        }
        style={{
          padding: "20px",
          border: `3px solid ${anchorEl ? "#ff0000" : "#ccc"}`,
          borderRadius: "10px",
          width: 150,
          transition: "border-color 0.2s",
        }}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        keepMounted
      >
        <MenuItem>
          <div>
            <SearchIcon />
            <InputBase
              placeholder="Select option"
              value={currentInputValue}
              onChange={handleChange}
              style={{
                padding: "10px",
                borderRadius: "4px",
              }}
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
