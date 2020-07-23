import React from "react";

import {
  AzureMap,
  AzureMapsProvider,
  IAzureMapOptions,
} from "react-azure-maps";
import { AuthenticationType } from "azure-maps-control";

const option: IAzureMapOptions = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: "Awr0ZM1qOOrNpq8sBxfE68_cpc4DuEuHacPtJvtveCQ",
  },
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

const DefaultMap: React.FC = () => (
  <AzureMapsProvider>
    <AzureMap options={option}></AzureMap>
  </AzureMapsProvider>
);

export default App;
