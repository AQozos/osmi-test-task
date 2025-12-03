<template>
  <div
    class="w-full ss:px-8 px-2 grid sm:grid-cols-(--grid-auto-cols) justify-items-center gap-x-2 gap-y-10"
  >
    <ProductCard :cards="cards"/>
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

defineProps({
  cards: {
    type: Array,
    required: true
  }
})
</script>
