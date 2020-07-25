import React from "react";

import { makeStyles } from "@material-ui/core/styles";
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
  return (
    <div style={mapControlLayerUI}>
      <h1>Mapper</h1>
      <div style={subHeading}>What would you like to map</div>
      <div style={itemPickerUI}>
        <button onClick={() => props.setItems("All")}>Everything</button>
        <button onClick={() => props.setItems("ConservationAreas")}>
          ConservationAreas
        </button>
        <button onClick={() => props.setItems("Libraries")}>Libraries</button>
        <Button variant="contained" color="primary">
          Button
        </Button>
      </div>
    </div>
  );
}

export default SidePanel;
