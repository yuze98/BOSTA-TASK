import React, { useEffect, useState } from "react";
import ToolBar from "../components/ToolBar";
import TableDetails from "../components/TableDetails";
import BoxDetails from "../components/BoxDetails";

export default function TrackScreen() {
  return (
    <div>
      <ToolBar />
      <div style={{ paddingTop: 100 }} />
      <div style={{width:'90%'}}>

      <BoxDetails/>
      </div>
      <div style={{ width: "40%" }}>
        <h3 align="right">تفاصيل الشحنة</h3>
        <TableDetails />
      </div>
    </div>
  );
}
