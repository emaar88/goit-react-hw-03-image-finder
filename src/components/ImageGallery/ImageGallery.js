import React from "react";
import ImageGalleryItem from "./../ImageGalleryItem/ImageGalleryItem";
import "./ImageGallery.scss";

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <ImageGalleryItem {...image} key={image.id} />
      ))}
    </ul>
  );
};

export default ImageGallery;
