import { ref } from "vue";

export default function useMenuOpen(defaultValue : boolean | null | undefined) {
    const isMenuOpen = ref<boolean>(defaultValue ?? false);

    const setMenuOpen = (value : boolean) => {
        isMenuOpen.value = value;
    }

    return {
        isMenuOpen,
        setMenuOpen,
    }
}