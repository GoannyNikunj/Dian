import React from "react";
import { MapContainer, Marker, Popup, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const BasicMap = ({ props }) => {
 
  // Coordinates to center the map around Pune
  const center = [18.5204, 73.8567];
  // Zoom level for the map
  const zoom = 12;
  // Coordinates for Baner and Kharadi
  const banerCoords = [18.5640, 73.7798];
  const kharadiCoords = [18.5446, 73.9391];
  // Radius for the circles in meters
  const circleRadius = 1500; // 1 km

  return (
  

    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: "350px", width: "100%",borderRadius:"20px" }} // Set height and width here
    >
      {/* TileLayer for the base map */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Marker for Pune */}
      <Marker position={center}>
        <Popup>
          Pune, the cultural capital of Maharashtra.
        </Popup>
      </Marker>
      {/* Circle for Baner */}
      {props.map((item, i) => (
      <Circle center={[item.x,item.y]} radius={item.circleRadius} color="green">
      <Popup>
        {item.popup}
      </Popup>
    </Circle>
    ))}
      {/* <Circle center={banerCoords} radius={circleRadius} color="green">
        <Popup>
          Baner
        </Popup>
      </Circle> */}
      {/* Circle for Kharadi */}
      {/* <Circle center={kharadiCoords} radius={circleRadius} color="green">
        <Popup>
          Kharadi
        </Popup>
      </Circle> */}
    </MapContainer>

  );
};

export default BasicMap;
