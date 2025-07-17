import { useAuthUser } from "~/composables/useAuth"

export default defineNuxtRouteMiddleware((to, from) => {
    const user = useAuthUser()

    // Skip middleware on the login page
    if (to.path === '/login') return

    // If user is not logged in, redirect to login
    if (!user.value) {
        return navigateTo('/login')
    }
})
