import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Polyline } from "react-leaflet";

const CONVERSATION_AREAS = gql`
  query getConversationAreas {
    getConservationAreas
  }
`;

function ConservationAreas() {
  const { loading, error, data } = useQuery(CONVERSATION_AREAS);
  const [polylines, setpolylines] = useState([]);

  useEffect(() => {
    try {
      if (error) throw error;
      setpolylines(data.getConservationAreas);
    } catch (e) {
      console.log(e);
    }
  }, [data, loading, error]);

  return (
    <div>
      {polylines.map((line) => (
        <Polyline color="lime" fillOpacity="1" weight="5" positions={line} />
      ))}
    </div>
  );
}

export default ConservationAreas;
