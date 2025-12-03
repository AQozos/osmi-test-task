<template>
  <div>
    <SelectCategory />
    <CardList :cards="cards"/>
  </div>
</template>

<script setup>
import CardList from './CardList.vue'
import SelectCategory from './SelectCategory.vue'

defineProps({
  cards: {
    type: Array,
    required: true
  }
})
</script>
