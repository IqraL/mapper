import React from "react";

import {
  AzureMap,
  AzureMapsProvider,
  IAzureMapOptions,
} from "react-azure-maps";
import { AuthenticationType } from "azure-maps-control";

const option = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: "Awr0ZM1qOOrNpq8sBxfE68_cpc4DuEuHacPtJvtveCQ",
  },
  zoom: 6,
  showLogo: false,
  center: [-2.3517, 53.4215],
};

function App() {
  return (
    <div className="App">
      <div style={{ height: "100vh" }}>
        <DefaultMap />
      </div>
    </div>
  );
}

const DefaultMap = () => (
  <AzureMapsProvider showLogo={false}>
    <AzureMap options={option}></AzureMap>
  </AzureMapsProvider>
);

export default App;
