import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RedeemIcon from "@mui/icons-material/Redeem";
const styles = {
  root: {
    width: "100%",
    marginTop: "20px",
  },
  checkpoints: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
};

export default function CheckpointProgressBar({ progress, checkpoints }) {
  return (
    <div style={styles.root}>
      <LinearProgress variant="determinate" value={progress} color="primary" />
      <div style={styles.checkpoints}>
        {checkpoints.map((checkpoint, index) => (
          <div>
            {checkpoint === "OUT_FOR_DELIVERY" ? (
              <LocalShippingIcon />
            ) : checkpoint === "DELIVERED" ? (
              <RedeemIcon />
            ) : (
              <CheckCircleIcon />
            )}

            <Typography key={index} variant="body2">
              {checkpoint}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
