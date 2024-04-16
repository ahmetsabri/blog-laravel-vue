<template>
  <div class="flex justify-center pt-7">
    <div class="space-x-3">
      <RouterLink class="font-bold hover:text-blue-500 text-indigo-700" to="/dashboard">Dashboard</RouterLink>
      <RouterLink class="font-bold hover:text-blue-500 text-indigo-700" to="/">Home</RouterLink>
      <RouterLink v-if="!authenticated" class="font-bold hover:text-blue-500 text-indigo-700" to="/login">Login
      </RouterLink>
    </div>
  </div>
  <RouterView />
</template>

<script setup>
import { computed } from 'vue';
import { userState } from './store/user';

const store = userState()

const authenticated = computed(() => {
  return store.getUser
})
</script>