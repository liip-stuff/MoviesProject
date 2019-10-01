import { Movie } from "../models/Movie.Model";

const axios = require("axios");

axios.defaults.baseURL = "http://drupalvm.test/api/movies?_format=json";
// axios.defaults.withCredentials = true;

export async function getMovieData() {
  try {
    const response = await axios.get(axios.defaults.baseURL)
      .then(function (response) {
        console.log(response);
      });

  } catch (error) {
    console.error(error);
  }

}


// https://jsonplaceholder.typicode.com/todos/
// http://drupalvm.test/api/movies?_format=json