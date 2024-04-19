import React, { useContext, useEffect, useState } from "react";
import ToolBar from "../components/ToolBar";
import TableDetails from "../components/TableDetails";
import BoxDetails from "../components/BoxDetails";
import { AppContext } from "../AppContext";
import BoxAddress from "../components/BoxAddress";
import fetchData from "../api/Shipments";
import { ShippingData } from "../utils/ShipmentUtils";
import DropdownWithInput from "../components/DropDownWithInput";

export default function TrackScreen() {
  const { shippingDataValue, inputValue, setShippingDataValue } =
    useContext(AppContext);

  useEffect(() => {
    const fetchShipmentData = () => {
      if (!inputValue) return;
      const url = `https://tracking.bosta.co/shipments/track/${inputValue}`;
      fetchData(url)
        .then((data) => {
          const shippingData = ShippingData(data);
          setShippingDataValue(data); // sets it globally
          console.log("Fetched data:", shippingData);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    fetchShipmentData(inputValue);
  }, [inputValue]);
  return (
    <div
      style={{
        paddingBottom: 100,
        paddingRight: "15%",
        paddingLeft: "15%",
        paddingTop: "2%",
      }}
    >
      <ToolBar />
      <div style={{ paddingTop: 100 }} />
      <div>{shippingDataValue ? <BoxDetails /> : null}</div>
     { shippingDataValue?<div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        
        <BoxAddress />
        <TableDetails />
      </div>: <div style={{flexDirection:'row'}}>
      <img
          src="https://avatars.githubusercontent.com/u/70472277?s=200&v=4"
          alt="Logo"
          style={{ width: "150px", height: "150px", marginRight: "10px" }}
        />
        <h2> Type tracking number in toolBar</h2>
        </div>}
    </div>
  );
}
