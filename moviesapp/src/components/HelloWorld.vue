<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>test</h3>
    <ul>
      <li v-for="key in movies">
        <span>{{key.title}} -</span>
        <span>{{key.body}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { getMovieData } from "@/services/movie.service";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      movies: [
        // {
        //   title: "title 1",
        //   body: "nanöanöan"
        // },
        // {
        //   title: "title2",
        //   body: "aadfdfd"
        // }
      ]
    };
  },

  created() {
    this.movies = getMovieData();
  },
  methods: {}
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
