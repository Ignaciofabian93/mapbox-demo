import React from "react";
import { Stack, Typography, TextField, MenuItem } from "@mui/material";

const MapSelect = ({ mapType, setMapType }) => {
  return (
    <Stack
      spacing={4}
      alignItems="center"
      sx={{
        marginBottom: "16px",
        display: "flex",
        flexDirection: { sm: "column", md: "row" },
      }}
    >
      <Typography variant="h6" component={"h6"}>
        Tipo de mapa:
      </Typography>
      <TextField
        label="Tipo de mapa"
        select
        sx={{ width: "200px" }}
        value={mapType}
        onChange={(e) => setMapType(e.target.value)}
        size="small"
        color="secondary"
        helperText="Presiona para abrir opciones"
      >
        <MenuItem value={"streets-v12"}>Calles</MenuItem>
        <MenuItem value={"outdoors-v12"}>Afueras</MenuItem>
        <MenuItem value={"light-v11"}>Claro</MenuItem>
        <MenuItem value={"dark-v11"}>Oscuro</MenuItem>
        <MenuItem value={"satellite-v9"}>Satelital</MenuItem>
        <MenuItem value={"satellite-streets-v12"}>Calles Satelital</MenuItem>
        <MenuItem value={"navigation-day-v1"}>Navegar Día</MenuItem>
        <MenuItem value={"navigation-night-v1"}>Navegar Noche</MenuItem>
      </TextField>
    </Stack>
  );
};

export default MapSelect;
