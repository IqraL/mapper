import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
const leafletContainer = {
  height: "100vh",
  width: "100vw",
};
function App() {
  return (
    <div className="App">
      <Map style={leafletContainer} center={[53.480709, -2.23438]} zoom={8}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </div>
  );
}

export default App;
