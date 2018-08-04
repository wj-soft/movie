<template>
  <div class="hello">
    helloWorld
    {{res}}
    <h1>hello</h1>
  </div>
</template>

<script>
import {getMovieList, detailMovieInfo} from '@/api/index.js'
export default {
  name: 'HelloWorld',

  data() {
    return {
      res: ''
    }
  },

  mounted() {
    detailMovieInfo(16).then(res => this.res = res.data);
    console.log('hello', getMovieList());
  }
}
</script>