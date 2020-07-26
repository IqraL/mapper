import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const GET_LIBRARIES_DATA = gql`
  query getLibraries {
    getLibraries {
      name
      address
      postcode
      telepone
      points
    }
  }
`;

export const bookIcon = new Icon({
  iconUrl:
    "https://toppng.com/uploads/preview/open-book-svg-free-115494209952k9hksaijn.png",
  iconSize: [20, 20],
});

function Libraries() {
  const [librariesProcessed, setlibrariesProcessed] = useState([]);
  const { data, error } = useQuery(GET_LIBRARIES_DATA);

  useEffect(() => {
    if (error) setlibrariesProcessed();
    if (data && data.getLibraries) setlibrariesProcessed(data.getLibraries);
  }, [data, error]);

  return (
    <div>
      {librariesProcessed.map((library) => (
        <Marker
          key={`${library.name}_${library.telepone}`}
          position={[library.points[0], library.points[1]]}
          icon={bookIcon}
        >
          <Popup>
            {library.name}
            <br></br>
            {library.address}
            <br></br>
            {library.postcode}
            <br></br>
            {library.telepone}
          </Popup>
        </Marker>
      ))}
    </div>
  );
}

export default Libraries;
