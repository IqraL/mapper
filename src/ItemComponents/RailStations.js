import React, { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_RAILSTATIONS = gql`
  query getRailwayStations {
    getRailwayStations {
      name
      points
    }
  }
`;

const trainIcon = new Icon({
  iconUrl:
    "data:image/png;base64,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",
  iconSize: [20, 20],
});
function RailStaions() {
  const [railLocations, setRailLocations] = useState([]);
  const { data, error } = useQuery(GET_RAILSTATIONS);

  useEffect(() => {
    if (error) setRailLocations([]);
    if (data && data.getRailwayStations)
      setRailLocations(data.getRailwayStations);
  }, [data, error]);

  return (
    <div>
      {railLocations.map((railStation) => (
        <Marker
          key={`${railStation.points[1]}`}
          icon={trainIcon}
          position={[railStation.points[0], railStation.points[1]]}
        >
          <Popup>{railStation.name}</Popup>
        </Marker>
      ))}
    </div>
  );
}

export default RailStaions;
