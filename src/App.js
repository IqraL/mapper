import React, { useState } from "react";
import { Map, TileLayer } from "react-leaflet";

import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";

import SidePanel from "./SidePanel";
import ConservationAreas from "./ConservationAreas";
import Libraries from "./Libraries";
import CCTVS from "./CCTV";

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
  const [items, setItems] = useState("All");

  return (
    <ApolloProvider client={client}>
      <div className="App" style={appContainer}>
        <SidePanel setItems={setItems} />
        <Map style={leafletContainer} center={[52.6, -1.2]} zoom={7}>
          {(items === "All" || items === "ConservationAreas") && (
            <ConservationAreas />
          )}
          {(items === "All" || items === "Libraries") && <Libraries />}

          {(items === "All" || items === "CCTV") && <CCTVS />}
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
