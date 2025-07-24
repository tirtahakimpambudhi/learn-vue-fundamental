import { ref } from "vue";

export default function useLoading(defaultValue :boolean|null) {
    const isLoading = ref<boolean>(defaultValue ?? true);

    const setLoading = (value : boolean) => {
        isLoading.value = value;
    };

    return {
        isLoading,
        setLoading
    }
}