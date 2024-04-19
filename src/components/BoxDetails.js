import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { AppContext } from "../AppContext";
import CheckpointProgressBar from "./CheckpointProgressBar";
import { dateExtraction, getCurrentDate } from "../utils/ShipmentUtils";

export default function BoxDetails() {
  const { inputValue, shippingDataValue } = useContext(AppContext);
  // const state = shippingDataValue.
  const { CurrentStatus, provider, PromisedDate } = shippingDataValue;
  const checkpoints = [
    "TICKET_CREATED",
    "PACKAGE_RECEIVED",
    "OUT_FOR_DELIVERY",
    "DELIVERED",
  ];
  const checkponts_progress = {
    TICKET_CREATED: {
      color: "black",
      progress: 0,
    },
    PACKAGE_RECEIVED: {
      color: "green",
      progress: 45,
    },
    OUT_FOR_DELIVERY: {
      color: "yellow",
      progress: 60,
    },
    DELIVERED: {
      color: "green",
      progress: 100,
    },
  };
  const date = dateExtraction(PromisedDate);
  useEffect(() => {
    console.log(shippingDataValue);
  });
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Box style={styles.root}>
            {/* this code be looped but fast coding purposes */}
            <div style={styles.content}>
              <span style={{ color: "#a1a1a1" }}>
                track number {inputValue}
              </span>
              <h4
                style={{
                  color: checkponts_progress[CurrentStatus.state].color,
                }}
              >
                {" "}
                {CurrentStatus.state}{" "}
              </h4>
            </div>
            <div style={styles.content}>
              <span style={{ color: "#a1a1a1" }}>update</span>
              <h3>{getCurrentDate()}</h3>
            </div>
            <div style={styles.content}>
              <span style={{ color: "#a1a1a1" }}>vendor</span>
              <h3> {provider}</h3>
            </div>
            <div style={styles.content}>
              <span style={{ color: "#a1a1a1" }}> Recieving time</span>
              <h3> {date} </h3>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box style={styles.root}>
            <CheckpointProgressBar
              progress={checkponts_progress[CurrentStatus.state].progress}
              checkpoints={checkpoints}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const styles = {
  root: {
    border: "1px solid #F1F1F1",
    padding: "50px",
    borderRadius: "5px",
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-around",
  },
  content: { flexDirection: "column", display: "flex" },
};
