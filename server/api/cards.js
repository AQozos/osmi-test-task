import { useCard } from "../composables/useCard";

export default defineEventHandler(() => {
    return useCard();
})