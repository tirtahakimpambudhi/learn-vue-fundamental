import { computed, ref } from "vue";

export default function useActive(activeClass : string, nonActiveClass : string) {
    const isActive = ref<boolean>(false);

    const setActive = (value :boolean ) => {
        isActive.value = value;
    };

    const active = computed(() :string => {
        return isActive.value ? activeClass :nonActiveClass
    })

    return {
        isActive,
        setActive,
        active
    }
}