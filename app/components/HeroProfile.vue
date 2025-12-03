<template>
  <div class="mx-auto max-w-[560px]">
    <ProfileCard :company="company"/>
    <ProfileFilter :toggle-tab="toggleTab" :active-tab="activeTab" />
  </div>
</template>

<script setup>
import ProfileCard from './ProfileCard.vue'
import ProfileFilter from './ProfileFilter.vue'

defineProps({
  company: {
    type: Object,
    required: true,
  },
  toggleTab: {
    type: Function,
    required: true,
  },
  activeTab: {
    type: String,
    required: true,
  },
})
</script>
