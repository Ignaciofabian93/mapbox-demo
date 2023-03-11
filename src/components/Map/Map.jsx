import React, { useRef, useState, useEffect } from "react";

import mapboxgl from "mapbox-gl";
import { Box } from "@mui/material";

import MapSelect from "./MapSelect/MapSelect";
import DataDisplay from "./DataDisplay/DataDisplay";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaWduYWNpb2ZhYmlhbjkzIiwiYSI6ImNsZjJ0NzYycTBhMGEzem80czR4OWI5eGwifQ.gcf1eR9C-rdUBGB_D6pDXw";

const MapView = () => {
  const [mapType, setMapType] = useState("satellite-v9");
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.6469);
  const [lat, setLat] = useState(-33.4511);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    // if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: `mapbox://styles/mapbox/${mapType}`,
      center: [lng, lat],
      zoom,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapType]);

  useEffect(() => {
    if (!map.current) return;
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <>
      <MapSelect mapType={mapType} setMapType={setMapType} />
      <DataDisplay lng={lng} lat={lat} zoom={zoom} />
      <Box sx={{ borderRadius: "20px" }} boxShadow={6}>
        <div
          ref={mapContainer}
          style={{
            width: "100%",
            height: "400px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        ></div>
      </Box>
    </>
  );
};

export default MapView;
