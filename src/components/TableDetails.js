import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import fetchData from "../api/Shipments";
import { AppContext } from "../AppContext.js";
import {ShippingData} from "../utils/ShipmentUtils.js";

export default function TableDetails() {
  const [shipmentData, setShipmentData] = React.useState([]);
  const { inputValue } = React.useContext(AppContext); // Use the AppProvider context to access inputValue

  React.useEffect(() => {
    const fetchShipmentData = () => {
      const url = `https://tracking.bosta.co/shipments/track/7234258`//${inputValue}`;
      fetchData(url)
        .then((data) => {
          const shipping_data = ShippingData(data)
          setShipmentData(shipping_data);
          console.log("Fetched data:", shipping_data);
          
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    fetchShipmentData(inputValue);
  }, [inputValue]);
  const headers = ['branch', 'date', 'time', 'details'];
  
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead style={{ backgroundColor: "#F5F5F5" }}>
        <TableRow>
          {headers.map((header) => (
            <TableCell align='center' key={header}>{header}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {shipmentData.map((row, index) => (
          <TableRow
            key={index}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            {headers.map((header) => (
              <TableCell align='center' key={header}>
                {row[header]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}
