<template>
  <div class="my-2 ss:my-8 mx-auto px-4 overflow-x-auto ss:overflow-hidden">
    <ul class="flex items-center justify-center gap-2 w-max ss:w-full">
      <li v-for="tab of tabs" :key="tab.id">
        <ButtonCategory
          :class="activeTab === tab.id ? 'border-gray-900' : 'border-transparent'"
          @click="toggleTab(tab.id)"
          >{{ tab.label
          }}<span v-if="tab.count" class="text-gray-500">{{ tab.count }}</span></ButtonCategory
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useTabs } from '~/composables/useTabs';
import ButtonCategory from './ui/ButtonCategory.vue'

defineProps({
  toggleTab: {
    type: Function,
    required: true,
  },
  activeTab: {
    type: String,
    required: true,
  },
})

const tabs = useTabs();
</script>
