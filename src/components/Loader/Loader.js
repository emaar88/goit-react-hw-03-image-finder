import React from "react";

import Loader from "react-loader-spinner";
import "./Loader.scss";

export default class App extends React.Component {
  //other logic
  render() {
    return (
      <div className="loaderContainer">
        <Loader
          type="Circles"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={1000}
        />
        <p className="loading-text">Loading</p>
      </div>
    );
  }
}
