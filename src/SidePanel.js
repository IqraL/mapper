import React from "react";

import Button from "@material-ui/core/Button";

const mapControlLayerUI = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "0fr 0fr 0fr",
  gridRowGap: "10px",
};

const subHeading = {
  textDecorationLine: "underline",
};

const itemPickerUI = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridRowGap: "10px",
};

function SidePanel(props) {
  const itemChange = (item) => {
    props.setItems(item);
    props.resetZoom();
  };

  return (
    <div style={mapControlLayerUI}>
      <h1>Mapper</h1>
      <div style={subHeading}>What would you like to map</div>
      <div style={itemPickerUI}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => itemChange("All")}
        >
          Everything
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => itemChange("ConservationAreas")}
        >
          Conservation Areas
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => itemChange("Libraries")}
        >
          Plymouth City Council Libraries
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => itemChange("CCTV")}
        >
          Trafford Council CCTVs
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => itemChange("Clear")}
        >
          Clear Map
        </Button>
      </div>
    </div>
  );
}

export default SidePanel;
