<template>
    <div class="flex flex-col justify-center items-center px-10 space-y-10 my-3">
        <h1 class="text-2xl font-mochiy text-teal-600  hover:text-teal-500">
            {{ post.title }}
        </h1>
        <p class="text-gray-500">
            created at : {{ formatDate(post.created_at) }}
        </p>
        <p class="text-gray-700 text-xl">
            {{ post.body }}

        </p>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import axios from 'axios';
import { ref } from 'vue';
import moment from 'moment';
const route = useRoute()
const post = ref({})
const fetchPost = () => {
    axios.get('/api/post/' + route.params.id).then(res => {
        post.value = res.data.post
    })
}
const formatDate = (date) => {
    return moment(date).format('YYYY-MM-DD H:m')
}
mounted: {
    fetchPost();
}
</script>