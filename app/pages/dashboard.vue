<template>
  <div>
    <h1>Welcome, {{ user?.email }}</h1>
    <button @click="logout" class="btn">Logout</button>
  </div>
</template>

<script setup lang="ts">
// @ts-expect-error: definePageMeta is a Nuxt macro
definePageMeta({
  middleware: 'auth',
})

import { signOut } from 'firebase/auth'
import { useAuthUser } from '~/composables/useAuth'

const { $auth } = useNuxtApp()
const router = useRouter()
const user = useAuthUser()

const logout = async () => {
  await signOut($auth)
  router.push('/login')
}
</script>
