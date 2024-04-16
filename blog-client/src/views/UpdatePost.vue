<template>
    <form action="#" method="post" @submit.prevent="update"
        class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mx-auto space-y-5">
        <div class="col-span-full w-1/3 mx-auto">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Title</label>

            <div class="mt-2">
                <input id="text" v-model="title" type="text" autocomplete="off"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <p class="text-red-500" v-if="errors?.title">
                {{ errors.title[0] }}
            </p>
        </div>
        <div class="col-span-full w-1/3 mx-auto">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Body</label>
            <div class="mt-2">
                <textarea id="about" v-model="body" rows="3" cols="50"
                    class="block w-full mx-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <p class="text-red-500" v-if="errors?.body">
                {{ errors.body[0] }}
            </p>

        </div>
        <div class="mt-6 flex justify-center items-center gap-x-6 w-full">
            <button type="submit"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update</button>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import axios from 'axios';

const title = ref('');
const body = ref('');
const errors = ref({})
const route = useRoute()

const fetchPost = () => {
    axios.get('/api/post/' + route.params.id).then(res => {
        title.value = res.data.post.title
        body.value = res.data.post.body
    })
}
const update = () => {
    axios.put('/api/post/' + route.params.id, {
        title: title.value,
        body: body.value
    }).then(res => {
        if (res.status == 200) {
            errors.value = {}
        }
    }).catch(err => {
        if (err.response.status == 422) {
            errors.value = err.response.data.errors
        }
    })
}
mounted: {
    fetchPost();
}
</script>