import { ref } from "vue";

export default function useCopied() {
    const copied = ref<boolean>(false);

    const setCopied = (value : boolean) => {
        copied.value = value
    }

    const handleCopied = (copyValue :string) => {
        navigator.clipboard.writeText(copyValue);
        setCopied(true);
        setTimeout(() => {setCopied(false)}, 1500);
    }

    return {copied, setCopied, handleCopied}
}