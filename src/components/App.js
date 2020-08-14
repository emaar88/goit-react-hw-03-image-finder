import React, { Component } from "react";
import Loader from "./Loader/";
import Button from "./Button/";
import ButtonUp from "./ButtonUp/";
import SearchBar from "./SearchBar/";
import imagesApi from "./services/";
import "./App.scss";
import ImageGallery from "./ImageGallery/";

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchImages(nextQuery);
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    imagesApi
      .fetchImagesWithQuery(searchQuery, page)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  fetchGallery = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
    this.fetchImages();
    setTimeout(() => {
      window.scrollTo({
        top: +window.scrollY + 1162,
        behavior: "smooth",
      });
    }, 700);
  };

  toUp = () => {
    setTimeout(() => {
      let windowHeight = document.documentElement.clientHeight;
      console.log(windowHeight);
      window.scrollTo({
        top: windowHeight - 1162,
        behavior: "smooth",
      });
    }, 800);
  };

  handleSearchBarSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  render() {
    const { images, loading } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSearchBarSubmit} />​
        {images.length > 0 ? (
          <ImageGallery images={images} />
        ) : (
          <p className="alert">
            If pixabay have photos for you, they will be here!
          </p>
        )}
        ​{loading && <Loader />}
        {images.length > 0 && !loading && (
          <>
            <div className="buttonContainer">
              <Button onClick={this.fetchGallery}></Button>
              <ButtonUp onClick={this.toUp}></ButtonUp>
            </div>
          </>
        )}
      </>
    );
  }
}
