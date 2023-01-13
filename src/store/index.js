import { defineStore } from "pinia";
import axios from "axios";

export const useStore = defineStore("store", {
  state: () => ({
      movies: [],
      cart: new Map(),
  }),
  actions: {
    async getMovies() {
      let data = (
        await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
          params: {
            api_key: "779ebe30f392f779f18a739e5df2f414",
            include_adult: "false",
          },
        })
      )
      for(let movie of data.data.results){
      this.movies.push({
        id: movie.id,
        poster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
      });
    }
    },
  addToCart(id, data) {
    this.cart.set(id,data)
  }
  },
});
 