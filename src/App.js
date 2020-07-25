import React, { useEffect, useState } from "react";
import {
  Map,
  Marker,
  Popup,
  TileLayer,
  CircleMarker,
  Polyline,
} from "react-leaflet";
import { Icon } from "leaflet";

import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";

import ConservationAreas from "./ConservationAreas";
import Libraries from "./Libraries";
import "./App.css";
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

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Map
          style={leafletContainer}
          center={[51.5150432, -0.1020398]}
          zoom={11}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Libraries />
          <ConservationAreas />
        </Map>
      </div>
    </ApolloProvider>
  );
}

export default App;
