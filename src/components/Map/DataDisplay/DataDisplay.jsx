import React from "react";
import { Stack, Divider, ListItem, Typography } from "@mui/material";

const DataDisplay = ({ lng, lat, zoom }) => {
  return (
    <Stack
      direction={"row"}
      divider={<Divider orientation="vertical" flexItem color="#eee" />}
      sx={{
        backgroundColor: "#2e424d",
        color: "#fff",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        width: "100%",
      }}
    >
      <ListItem sx={{ display: "flex", justifyContent: "center" }}>
        <Typography>Longitud: {lng}</Typography>
      </ListItem>
      <ListItem sx={{ display: "flex", justifyContent: "center" }}>
        <Typography>Latitud: {lat}</Typography>
      </ListItem>
      <ListItem sx={{ display: "flex", justifyContent: "center" }}>
        <Typography>Zoom: {zoom}</Typography>
      </ListItem>
    </Stack>
  );
};

export default DataDisplay;
