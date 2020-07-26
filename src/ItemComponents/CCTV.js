import React, { useEffect, useState } from "react";
import cctvDataraw from "../data/CctvData.json";
import { Marker } from "react-leaflet";
import { Icon } from "leaflet";

const cctvIcon = new Icon({
  iconUrl:
    "https://www.pinclipart.com/picdir/middle/44-442890_cctv-clipart-operation-png-cctv-icon-png-transparent.png",
  iconSize: [20, 20],
});
function CCTVS() {
  const [cctvLocationsRaw, setCctvLocationsRaw] = useState({});
  const [cctvProcessedLoc, setCctvProcessedLoc] = useState([]);

  useEffect(() => {
    setCctvLocationsRaw(cctvDataraw);
  }, []);

  useEffect(() => {
    if (
      Object.keys(cctvLocationsRaw).length !== 0 &&
      cctvLocationsRaw.constructor === Object
    )
      processCCTVdata();
  }, [cctvLocationsRaw]);

  const processCCTVdata = () => {
    const rawCctv = cctvLocationsRaw.features;
    setCctvProcessedLoc(
      rawCctv.map((cctvData) => cctvData.geometry.coordinates)
    );
  };

  return (
    <div>
      {cctvProcessedLoc.map((point) => (
        <Marker
          key={`${point[1]}`}
          icon={cctvIcon}
          position={[point[1], point[0]]}
        ></Marker>
      ))}
    </div>
  );
}
export default CCTVS;
