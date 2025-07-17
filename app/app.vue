<template>
  <NuxtPage />
</template>

<script setup lang="ts">
import { initUserObserver } from './composables/useAuth';

onMounted(() => {
  initUserObserver()
})
</script>