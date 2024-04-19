import React, { useState, useEffect, useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import fetchData from "../api/Shipments";
import { AppContext } from "../AppContext.js";
import { ShippingData } from "../utils/ShipmentUtils.js";

export default function TableDetails() {
  const [shipmentData, setShipmentData] = useState([]);
  const { inputValue, setShippingDataValue } = useContext(AppContext); // Use the AppProvider context to access inputValue
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5); // Number of rows per page

  useEffect(() => {
    const fetchShipmentData = () => {
      const url = `https://tracking.bosta.co/shipments/track/7234258`; //${inputValue}`;
      fetchData(url)
        .then((data) => {
          const shippingData = ShippingData(data);
          setShipmentData(shippingData);
          setShippingDataValue(data); // sets it globally
          console.log("Fetched data:", shippingData);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    fetchShipmentData(inputValue);
  }, [inputValue]);

  // Calculate pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = shipmentData.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const headers = ["branch", "date", "time", "details"];

  const Pagination = () => {
    return (
      <div style={{ textAlign: "right", marginTop: "20px" }}>
        {currentPage > 1 && (
          <Button
            style={styles.buttonStyle}
            onClick={() => paginate(currentPage - 1)}
          >
            Previous
          </Button>
        )}
        {Array.from({
          length: Math.min(Math.ceil(shipmentData.length / rowsPerPage), 3),
        }).map((_, index) => (
          <Button
            style={styles.buttonStyle}
            key={index}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
        {Math.ceil(shipmentData.length / rowsPerPage) > 3 && <span>...</span>}
        {currentPage < Math.ceil(shipmentData.length / rowsPerPage) && (
          <Button
            style={styles.buttonStyle}
            onClick={() => paginate(currentPage + 1)}
          >
            Next
          </Button>
        )}
      </div>
    );
  };
  return (
    <div style={{width:'68%'}}>
      <h3 align="right">تفاصيل الشحنة</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: "#F5F5F5" }}>
            <TableRow>
              {headers.map((header) => (
                <TableCell align="center" key={header}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentRows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {headers.map((header) => (
                  <TableCell align="center" key={header}>
                    {row[header]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Pagination */}
      <Pagination />
    </div>
  );
}
const styles = {
  buttonStyle: {
    fontSize: 12,
    color: "red",
  },
};
