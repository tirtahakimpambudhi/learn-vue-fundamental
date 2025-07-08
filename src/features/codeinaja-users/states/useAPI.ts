import useLoading from "@states/useLoading";
import { reactive } from "vue"

export default function useAPI() {
    const user = reactive({value: false});
    const { isLoading, setLoading } = useLoading(false)
    const loadUser = () => {
        setLoading(true);
        try {
            user.value = true;
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    return {
        // Dummy Data
        user,
        loadUser,
         isLoading
    }
}