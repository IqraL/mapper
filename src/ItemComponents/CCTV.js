import React, { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_CCTV_DATA = gql`
  query getCctvData {
    getCctvLocations {
      points
      location
    }
  }
`;

const cctvIcon = new Icon({
  iconUrl:
    "https://www.pinclipart.com/picdir/middle/44-442890_cctv-clipart-operation-png-cctv-icon-png-transparent.png",
  iconSize: [20, 20],
});
function CCTVS() {
  const [cctvLocationsRaw, setCctvLocationsRaw] = useState({});
  const [cctvProcessedLoc, setCctvProcessedLoc] = useState([]);
  const { data, error } = useQuery(GET_CCTV_DATA);

  useEffect(() => {
    if (error) setCctvProcessedLoc([]);

    if (data && data.getCctvLocations)
      setCctvProcessedLoc(data.getCctvLocations);
  }, [data, error]);

  return (
    <div>
      {cctvProcessedLoc.map((cctv) => (
        <Marker
          key={`${cctv.points[1]}`}
          icon={cctvIcon}
          position={[cctv.points[0], cctv.points[1]]}
        >
          <Popup>{cctv.location}</Popup>
        </Marker>
      ))}
    </div>
  );
}

export default CCTVS;
