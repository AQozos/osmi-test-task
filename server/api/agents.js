import { useAgent } from "../composables/useAgent"

export default defineEventHandler(() => {
    return useAgent();
})