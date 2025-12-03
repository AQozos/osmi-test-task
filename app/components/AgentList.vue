<template>
  <div class="max-w-140 mx-auto">
    <div class="pt-[33px]">
      <ul class="flex flex-col gap-2 sm:gap-3">
        <AgentItem :agents="agents"/>
      </ul>
    </div>
  </div>
</template>

<script setup>
import AgentItem from './AgentItem.vue'

defineProps({
  agents: {
    type: Array,
    required: true,
  }
})
</script>
