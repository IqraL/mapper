import React, { useEffect, useState } from "react";
import librariesRaw from "./LibrariesData";

import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

export const bookIcon = new Icon({
  iconUrl:
    "https://toppng.com/uploads/preview/open-book-svg-free-115494209952k9hksaijn.png",
  iconSize: [20, 20],
});

function Libraries() {
  const [librariesProcessed, setlibrariesProcessed] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <div>
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
    </div>
  );
}

export default Libraries;
