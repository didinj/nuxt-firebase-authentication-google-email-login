import { onAuthStateChanged, type User } from 'firebase/auth'

export const useAuthUser = () => useState<User | null>('authUser', () => null)

export const initUserObserver = () => {
    const { $auth } = useNuxtApp()
    const authUser = useAuthUser()

    onAuthStateChanged($auth, (user) => {
        authUser.value = user
    })
}
