<template>
  <div class="hello" v-if="list">
    <select-genre v-on:selectGenre="selectGenre"></select-genre>
    <card v-for="post in list" :key="post.id" :post="post"></card>
  </div>
</template>

<script>
import {getMovieList, getMovieListByGenre} from '@/api/index.js'
import Card from './Card'
import SelectGenre from './SelectGenre.vue'

export default {
  name: 'ListContainer',
  components: {
    Card,
    SelectGenre
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    selectGenre(genre) {
      console.log('emit', genre)
      if (genre == 'ALL') {
        getMovieList().then(res => this.list = res.data.movies);
      } 
      getMovieListByGenre(genre).then(res => this.list = res.data.movies)
    }
  },
  mounted() {
    getMovieList().then(res => this.list = res.data.movies);
  }
}
</script>