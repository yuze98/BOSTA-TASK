import React from "react";
import DropDownWithInput from "./DropDownWithInput";

export default function ToolBar() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        zIndex: 1000,
        flexDirection: "row-reverse",
        justifyContent: "space-around",
      }}
    >
      <div style={{ paddingRight: 100, paddingLeft: "10%" }}>
        <img
          src="https://avatars.githubusercontent.com/u/70472277?s=200&v=4"
          alt="Logo"
          style={{ width: "80px", height: "80px", marginRight: "10px" }}
        />
      </div>
      <div style={{ paddingLeft: "10%" }}>
        <span style={{ marginRight: "20px" }}>الرئيسية</span>
        <span style={{ marginRight: "20px" }}>الاسعار</span>
        <span style={{ marginRight: "20px" }}>كلم المبيعات</span>
      </div>
      <div>
        <DropDownWithInput />
      </div>
      <div>
        <span style={{ marginRight: "20px", color: "red" }}>EN</span>
        <span style={{ marginRight: "20px" }}>تسجيل الدخول</span>
      </div>
    </div>
  );
}
