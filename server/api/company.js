import useCompany from "../composables/useCompany"

export default defineEventHandler(() => {
    return useCompany();
})