import {onMounted} from "vue";


export default function usePageTitle(title :string) {
    onMounted(() => {
        document.title = title;
    });
}