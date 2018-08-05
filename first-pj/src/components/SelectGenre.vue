<template>
  <div>
    <v-btn @click="selectGenre('ALL')">ALL</v-btn>
    <v-btn v-for="(genre, idx) in genreList" :key="idx" @click="selectGenre(genre)">{{genre}}</v-btn>
  </div>
</template>

<script>
import {getGenreList} from '@/static/api/index.js'
  export default {
    data() {
      return {
        genreList: {}
      }
    },
    methods: {
      selectGenre(genre) {
        this.$emit('selectGenre', genre)
      }
    },
    mounted() {
      this.genreList = getGenreList();
      console.log(this.genreList)
    }
    
  }
</script>

<style scoped>

</style>