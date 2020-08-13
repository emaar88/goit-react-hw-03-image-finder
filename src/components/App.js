import React, { Component } from "react";
import Loader from "./Loader/Loader";
import Button from "./Button/Button";
import ButtonUp from "./ButtonUp/ButtonUp";
import SearchBar from "./SearchBar/SearchBar";
import imagesApi from "./services/imagesApi";
import "./App.scss";
import ImageGallery from "./ImageGallery/ImageGallery";

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

    console.log("prevQuery:" + prevQuery, "nextquery:" + nextQuery);
    if (prevQuery !== nextQuery) {
      this.fetchImages();
      this.toUpState();
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.setScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.setScroll);
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    console.log(imagesApi);
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

  toUpState = () => {
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
    console.log(query);
    this.setState({ searchQuery: query, page: 1, images: [] });
    // *ця функція скидає.
  };

  render() {
    const { images, loading } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSearchBarSubmit} />​
        {images.length > 0 && (
          <ImageGallery images={images} imageModal={this.toggleModal} />
        )}
        ​{loading && <Loader message="Loading..." />}
        {images.length > 0 && !loading && (
          <>
            <div className="buttonContainer">
              <Button onClick={this.toUpState}></Button>
              <ButtonUp onClick={this.toUp}></ButtonUp>
            </div>
          </>
        )}
      </>
    );
  }
}
