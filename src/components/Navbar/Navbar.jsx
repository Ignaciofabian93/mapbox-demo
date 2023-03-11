import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography>MapBox</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
