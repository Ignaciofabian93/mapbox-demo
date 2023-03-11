import React from "react";

import Navbar from "./components/Navbar/Navbar";
import MapView from "./components/Map/Map";
import { Container, Box } from "@mui/material";

import "./styles.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ marginTop: "100px" }}>
        <Box>
          <MapView />
        </Box>
      </Container>
    </>
  );
};

export default App;
