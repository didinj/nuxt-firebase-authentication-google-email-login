<template>
  <div class="login-container">
    <h1 class="text-2xl font-bold mb-4">Login</h1>

    <form @submit.prevent="loginWithEmail" class="space-y-3">
      <input v-model="email" type="email" placeholder="Email" class="input" required />
      <input v-model="password" type="password" placeholder="Password" class="input" required />
      <button type="submit" class="btn">Login</button>
    </form>

    <button @click="signInWithGoogle" class="btn-google mt-4">Sign in with Google</button>

    <p class="mt-4">
      Don't have an account?
      <button @click="signupWithEmail" class="text-blue-600 underline">Sign Up</button>
    </p>
  </div>
</template>

<script setup lang="ts">
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth'

const { $auth } = useNuxtApp()

const email = ref('')
const password = ref('')
const router = useRouter()

const loginWithEmail = async () => {
  try {
    await signInWithEmailAndPassword($auth, email.value, password.value)
    router.push('/dashboard')
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    } else {
      alert('An unexpected error occurred')
    }
  }
}

const signupWithEmail = async () => {
  try {
    await createUserWithEmailAndPassword($auth, email.value, password.value)
    router.push('/dashboard')
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    } else {
      alert('An unexpected error occurred')
    }
  }
}

const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider()
    await signInWithPopup($auth, provider)
    router.push('/dashboard')
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    } else {
      alert('An unexpected error occurred')
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 80px auto;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin: 5px auto;
}
.btn {
  width: 100%;
  padding: 10px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  margin: 5px auto;
}
.btn-google {
  width: 100%;
  padding: 10px;
  background-color: #db4437;
  color: white;
  border: none;
  border-radius: 6px;
  margin: 5px auto;
}
</style>
