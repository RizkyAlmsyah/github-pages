import React, { Component } from "react";

export default class Default extends Component {
  render() {
    return (
      <div
        style={{
          color: "#000",
          background: "#fff",
          textAlign: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            display: "inline-block",
            borderRight: "1px solid rgba(0, 0, 0,.3)",
            margin: "0",
            marginRight: "20px",
            padding: "10px 23px 10px 0",
            fontSize: "24px",
            fontWeight: "500",
            verticalAlign: "top",
          }}
        >
          404
        </h1>
        <h2 style={{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:"0",padding:"0"}}>
          This page could not be found
        </h2>
      </div>
    );
  }
}
