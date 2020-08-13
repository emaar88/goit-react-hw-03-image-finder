import React, { Component } from "react";
import "./Modal.scss";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.clickModal();
    }
  };
  backdropClick = (e) => {
    if (e.target === e.currentTarget) {
      console.log(e.target);
      console.log(e.currentTarget);
      this.props.clickModal();
    }
  };
  render() {
    return (
      <div className="Overlay" onClick={this.backdropClick}>
        <div className="Modal">
          <img src={this.props.largeImageURL} alt={this.props.tags} />
        </div>
      </div>
    );
  }
}

export default Modal;
