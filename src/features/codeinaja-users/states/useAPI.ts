import profileOne from '@assets/profile-1.png'
import useLoading from "@states/useLoading"
import { ref } from "vue"
import { type User } from "@codeinaja-users/types/User"

export default function useAPI() {
  const { isLoading, setLoading } = useLoading(false)

  const user = ref<User | null>(null)

  const setUser = (value : User) => {
    user.value = {
        ...value
    }
  }

  const loadUser = async () => {
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))

      setUser({
        id: Date.now().toString(),
        email: "johndoe@gmail.com",
        username: "johndoe",
        role: "student",
        profile: {
          about: "lorem ipsum",
          gender: "male",
          photo: profileOne
        }
      })
    } catch (error) {
      console.error("Failed to load user:", error)
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    setLoading(true);
    try {
        user.value = null;
    } catch (error) {
        console.error("Failed to logout user:", error);
    } finally {
        setLoading(false);
    }
  }

  return {
    user,
    loadUser,
    isLoading,
    setLoading,
    logout
  }
}
