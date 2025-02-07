import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icon
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const MapComponent = ({ latitude, longitude }) => {
  useEffect(() => {
    // Initialize the map
    const map = L.map("map").setView([latitude, longitude], 13);

    // Set up OpenStreetMap tile layer (No API key required)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Define the default icon
    const defaultIcon = L.icon({
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
    });

    // Add a marker at the given latitude and longitude
    const marker = L.marker([latitude, longitude], { icon: defaultIcon }).addTo(
      map
    );

    return () => {
      map.remove();
    };
  }, [latitude, longitude]);

  return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
};

export default MapComponent;
