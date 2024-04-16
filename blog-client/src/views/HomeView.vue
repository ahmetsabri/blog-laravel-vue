<template>
  <main class="flex justify-center flex-col">
    <div class="w-1/2 mx-auto mt-3 border-b p-4 space-y-4" v-for="post in posts">
      <h1 class="text-2xl font-mochiy text-teal-600  hover:text-teal-500">
        <RouterLink :to="{ name: 'post.show', params: { id: post.id } }">
          {{ post.title }}
        </RouterLink>
      </h1>
      <p class="text-gray-500">
        created at : {{ formatDate(post.created_at) }}
      </p>
    </div>

    <div class="flex justify-center space-x-3 mb-10">
      <button v-show="pagination.prev_page_url" :disabled="!pagination.prev_page_url"
        @click="fetchPosts(pagination.prev_page_url)" class="text-blue-600 capitalize">previous</button>
      <button v-show="pagination.next_page_url" :disabled="!pagination.next_page_url"
        @click="fetchPosts(pagination.next_page_url)" class="text-blue-600 capitalize">next</button>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios'
import moment from 'moment';

const posts = ref([])
const pagination = ref({})
const fetchPosts = (url = '/api/post') => {
  axios.get(url).then(res => {
    posts.value = res.data.posts.data
    pagination.value = {
      next_page_url: res.data.posts.next_page_url,
      prev_page_url: res.data.posts.prev_page_url,
    }
  })
}

const formatDate = (date) => {
  return moment(date).format('YYYY-MM-DD')
}
mounted: {
  fetchPosts()
}

</script>