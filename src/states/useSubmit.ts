import { ref } from "vue";

export default function useSubmit(defaultValue :boolean|null) {
    const isSubmit = ref<boolean>(defaultValue ?? false);

    const setSubmit = (value :boolean) => {
        isSubmit.value = value;
    };

    return {
        isSubmit,
        setSubmit
    };
};