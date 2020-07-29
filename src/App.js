import React, { useState, useEffect, useRef } from "react";
import { Map, TileLayer, Popup } from "react-leaflet";

import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";

import SidePanel from "./SidePanel";
import ConservationAreas from "./ItemComponents/ConservationAreas";
import Libraries from "./ItemComponents/Libraries";
import CCTVS from "./ItemComponents/CCTV";
import RailStaions from "./ItemComponents/RailStations";
import { CENTER, INITAL_ZOOM } from "./consts";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext(() => {
  const token = localStorage.getItem("jwtToken");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const leafletContainer = {
  height: "100vh",
  width: "100vw",
};

const appContainer = {
  display: "grid",
  gridTemplateColumns: "200px 1fr",
};

function App() {
  //which items to display i.e  all, libraires ConservationAreas
  const mapRef = useRef();

  const [items, setItems] = useState("All");

  const resetZoom = () => {
    const { current = {} } = mapRef;
    const { leafletElement } = current;
    if (leafletElement) {
      leafletElement.setView(CENTER, INITAL_ZOOM);
    }
  };

  return (
    <ApolloProvider client={client}>
      <div className="App" style={appContainer}>
        <SidePanel mapRef={mapRef} resetZoom={resetZoom} setItems={setItems} />
        <Map
          ref={mapRef}
          style={leafletContainer}
          center={CENTER}
          zoom={INITAL_ZOOM}
        >
          {(items === "All" || items === "ConservationAreas") && (
            <ConservationAreas />
          )}
          {(items === "All" || items === "Libraries") && <Libraries />}

          {(items === "All" || items === "CCTV") && <CCTVS />}

          {(items === "All" || items === "RailwayStations") && <RailStaions />}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          ></TileLayer>
        </Map>
      </div>
    </ApolloProvider>
  );
}

export default App;
