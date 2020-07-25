import React from "react";
import { Map, TileLayer } from "react-leaflet";

import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";

import ConservationAreas from "./ConservationAreas";

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

          <ConservationAreas />
        </Map>
      </div>
    </ApolloProvider>
  );
}

export default App;
