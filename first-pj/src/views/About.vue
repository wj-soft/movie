<template>
  <div class="about">
    <h1>This is an about page {{$route.params.id}}</h1>
    <p>
      {{res}}
    </p>
    <div>
      {{res.large_cover_image}}
    </div>
    <ul>
      <li>제목 {{res.title}}</li>
      <li>상세페이지링크 {{res.url}}</li>
      <li>장르 {{res.genres}}</li>
      <li>연도 {{res.year}}</li>
      <li>국기 {{res.language}}</li>
      <li>설명 {{res.description_intro}}</li>
    </ul>
  </div>
</template>

<script>
import {detailMovieInfo} from '@/api/index.js'

export default {
  name: 'ListContainer',
  data() {
    return {
      res: ''
    }
  },
  mounted() {
    detailMovieInfo(this.$route.params.id).then(res => this.res = res.data.movie);
  }
}
</script>
