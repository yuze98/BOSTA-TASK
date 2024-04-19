import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

export default function BoxAddress() {
  return (
    <div>
      <h3 align="right"> عنوان التسليم</h3>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box style={styles.coloredBox}>
              {/* the address is not provided I assume for privacy for customers */}
              الدقي شارع محي الدين ابو العز بجوار ماكدونالدز منزل 30 بلوك 22,
              cairo
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box style={styles.root}>
              <div style={styles.content}>
                <h4>!هل يوجد مشكلة في شحنتك؟</h4>
                <Button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: 20,
                    width: 150,
                    height: 35,
                  }}
                >
                  ابلاغ عن مشكلة
                </Button>
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNc80rinpEpoJ5X3eF2N-YDFR2ddtYSVmv-pvqdx5XcA&s"
                alt="help"
                style={{ width: "50px", height: "50px", marginRight: "10px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

const styles = {
  root: {
    border: "1px solid #F1F1F1",
    padding: "50px",
    borderRadius: "5px",
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "30%",
    width: "40%",
  },
  coloredBox: {
    border: "1px solid #F1F1F1",
    padding: "50px",
    borderRadius: "5px",
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#F5F5F5",
    width: "40%",
    height: "30%",
  },
  content: { flexDirection: "column", display: "flex" },
};
