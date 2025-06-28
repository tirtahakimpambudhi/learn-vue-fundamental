import useToggle from "@/states/useToggle";

export default function useCopied() {
    const { state: copied, setState: setCopied, setTrue: startCopied, setFalse: endCopied } = useToggle(false);

    const handleCopied = (copyValue :string) => {
        navigator.clipboard.writeText(copyValue);
        startCopied()
        setTimeout(() => {endCopied}, 1500);
    }

    return {copied, setCopied, handleCopied}
}