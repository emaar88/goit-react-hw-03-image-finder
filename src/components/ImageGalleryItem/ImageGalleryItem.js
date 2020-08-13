import React, { Component } from "react";
import Modal from "./../Modal/Modal";
import "./ImageGalleryItem.scss";

class ImageGalleryItem extends Component {
  state = {
    imageModal: false,
  };
  toggleModal = () => {
    this.setState((prevState) => ({ imageModal: !prevState.imageModal }));
  };

  render() {
    const { imageModal } = this.state;
    return (
      <li className="ImageGalleryItem">
        {imageModal && (
          <Modal
            largeImageURL={this.props.largeImageURL}
            tags={this.props.tags}
            clickModal={this.toggleModal}
          />
        )}
        <img
          src={this.props.webformatURL}
          alt={this.props.tags}
          className="ImageGalleryItem-image"
          key={this.props.id}
          onClick={this.toggleModal}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
