<template>
  <h1 class="heading-first-level">Welcome to the News Page!</h1>
  <div v-if="!articles.length" class="flex justify-center">
    <div class="lds-dual-ring"></div>
  </div>
  <template v-else>
    <div
      class="container mx-auto text-center mb-5 py-5"
      v-for="article in articles"
      :key="article.publishedAt"
    >
      <p>{{article.title}}</p>
    </div>
  </template>

</template>

<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'

export default {
  setup () {
    const articles = ref([])
    onMounted(async () => {
      const key = process.env.VUE_APP_NEWS_API_KEY
      const data = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`)
      articles.value = data.data.articles
    })
    return {
      articles
    }
  }
}
</script>

<style scoped>

</style>
