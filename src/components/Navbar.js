import {
  AppBar,
  Box,
  IconButton,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

export const Navbar = ({ change, check }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Taskfy
          </Typography>
          <Switch
            color="default"
            defaultChecked
            onChange={change}
            checked={check}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
