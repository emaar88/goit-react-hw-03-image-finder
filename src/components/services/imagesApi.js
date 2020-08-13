import axios from "axios";

const fetchImagesWithQuery = (searchQuery, page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=15388993-afe6d4c7cebda1ca737d5f782&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};
console.log({ fetchImagesWithQuery });
export default { fetchImagesWithQuery };
// * в результатів запитів буде багато функц
