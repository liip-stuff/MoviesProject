import { Movie } from "../models/Movie.Model";

const axios = require("axios");

axios.defaults.baseURL = "http://drupalvm.test/jsonapi/node/movies";
// axios.defaults.withCredentials = true;

export async function getMovieData() {
  try {
    const response = await axios.get(axios.defaults.baseURL)
      .then(function (response) {
        console.log(response);
        return response;
        // const movieItem = new Movie(response.data);
      });

  } catch (error) {
    console.error(error);
  }
  cd
}


// https://jsonplaceholder.typicode.com/todos/
// http://drupalvm.test/api/movies?_format=json