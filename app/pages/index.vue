<template>
  <div class="home">
    <h1 class="text-3xl font-bold mb-4">Welcome to Nuxt 3 + Firebase Auth</h1>
    <p class="mb-6">This is the homepage. Try accessing the <code>/dashboard</code> route or <code>/login</code> to get started.</p>

    <NuxtLink to="/login" class="btn">Go to Login</NuxtLink>
  </div>
</template>

<style scoped>
.home {
  max-width: 600px;
  margin: 100px auto;
  padding: 24px;
  text-align: center;
}
.btn {
  padding: 10px 20px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  text-decoration: none;
}
</style>
