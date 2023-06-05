import React, { Component } from "react";
import loading from "./Loading.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src={loading} alt="loading" />
      </div>
    );
  }
}
