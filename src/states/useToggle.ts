import { ref } from 'vue'

export default function useToggle(initialValue = false) {
  const state = ref<boolean>(initialValue)

  const toggle = () => {
    state.value = !state.value
  }

  const setTrue = () => {
    state.value = true
  }

  const setFalse = () => {
    state.value = false
  }

  const setState = (value : boolean) => {
    state.value = value
  }

  return {
    state,
    toggle,
    setTrue,
    setFalse, 
    setState
  }
}