<template>
  <div @click="goAboutPage(post.id)">
    <v-card class="my-3" hover>
      <v-card-media height="200px" :src="post.large_cover_image"></v-card-media>
      <v-card-text>
        <h1>{{post.title}}</h1>
        <p>{{post.summary}}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
    props: ['post'],
    methods: {
      goAboutPage(id) {
        console.log(id)
        this.$router.push({ name: 'about', params: { id : id }})
      }
    }
  }
</script>

<style scoped>

</style>