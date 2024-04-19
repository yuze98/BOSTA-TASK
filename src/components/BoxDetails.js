import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { AppContext } from "../AppContext";
import CheckpointProgressBar from "./CheckpointProgressBar";

export default function BoxDetails() {

    const {inputValue, shippingDataValue} = useContext(AppContext)
    // const state = shippingDataValue.
    const progress = 0; // Example progress value (in percentage)
    const {CurrentStatus,provider,PromisedDate} = shippingDataValue
  const checkpoints = ['TICKET_CREATED', 'PACKAGE_RECEIVED', 'OUT_FOR_DELIVERY','DELIVERED'];
  const checkponts_progress={
    TICKET_CREATED:0,
    PACKAGE_RECEIVED:45,
    OUT_FOR_DELIVERY:60,
    OUT_FOR_DELIVERY:80,
    DELIVERED:100
  }
    useEffect(()=>{
        console.log(shippingDataValue)
        
    })
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Box style={styles.root}>
            {/* this code be looped but fast coding purposes */}
            <div style={styles.content}>
              <span style={{color:'#a1a1a1'}}>track number {inputValue}</span>
              <h3> {CurrentStatus.state} </h3>
            </div>
            <div style={styles.content}>
              <span style={{color:'#a1a1a1'}}>update</span>
              <h3>date</h3>
            </div>
            <div style={styles.content}>
              <span style={{color:'#a1a1a1'}}>vendor</span>
              <h3> vendoer name</h3>
            </div>
            <div style={styles.content}>
              <span style={{color:'#a1a1a1'}}> Recieving time</span>
              <h3> date </h3>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box style={styles.root}>
            
          <CheckpointProgressBar progress={checkponts_progress[CurrentStatus.state]} checkpoints={checkpoints} />
            
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
