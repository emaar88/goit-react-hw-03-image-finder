import React from "react";
import ImageGalleryItem from "./../ImageGalleryItem/ImageGalleryItem";
import "./ImageGallery.scss";

const ImageGallery = ({ images, imageModal }) => {
  return (
    <ul className="ImageGallery">
      {images.length > 0 ? (
        images.map((image) => <ImageGalleryItem {...image} key={image.id} />)
      ) : (
        <li className="alert">No have contacts!</li>
      )}
    </ul>
  );
};

export default ImageGallery;
