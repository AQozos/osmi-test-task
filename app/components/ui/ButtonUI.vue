<template>
  <button :class="['rounded-xl bg-blue-500 text-center text-gray-10 cursor-pointer', padding]">
    <slot/>
  </button>
</template>

<script setup>
defineProps({
  padding: {
    type: String,
    default: '',
  },
})
</script>
