import React, { useEffect, useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import librariesRaw from "./Libraries";
const leafletContainer = {
  height: "100vh",
  width: "100vw",
};

export const bookIcon = new Icon({
  iconUrl:
    "https://toppng.com/uploads/preview/open-book-svg-free-115494209952k9hksaijn.png",
  iconSize: [10, 10],
});

function App() {
  const [librariesProcessed, setlibrariesProcessed] = useState([]);
  useEffect(() => {
    //add id to each library object from the raw data
    setlibrariesProcessed(
      librariesRaw.features.map((libraryObj) => {
        const libraryDetail = `${libraryObj.properties.NAME} ${libraryObj.properties.TELEPHONE}`;
        const id = Math.floor(Math.random() * Math.floor(500));
        return {
          id,
          details: libraryObj.properties,
          coordinates: libraryObj.geometry.coordinates,
        };
      })
    );

    //console.log(addedId);
  }, []);
  return (
    <div className="App">
      <Map style={leafletContainer} center={[53.480709, -2.23438]} zoom={8}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {librariesProcessed.map((library) => (
          <Marker
            position={[library.coordinates[1], library.coordinates[0]]}
            icon={bookIcon}
          >
            <Popup>
              {library.details.NAME}
              <br></br>
              {library.details.ADDRESS_1}
              <br></br>
              {library.details.POSTCODE}
              <br></br>
              {library.details.TELEPHONE}
            </Popup>
          </Marker>
        ))}
      </Map>
    </div>
  );
}

export default App;
