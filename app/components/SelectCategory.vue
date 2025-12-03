<template>
  <div class="relative max-w-[470px] mx-auto my-6 px-4 py-3">
    <button
      class="w-full p-4 bg-gray-100 text-gray-900 text-left rounded-xl flex items-center justify-between hover:bg-gray-200 transition-colors"
      @click="toggleDropdown"
    >
      <span>Все товары и услуги</span>
      <TriangleIcon :class="{ 'transform rotate-180': isOpen }" />
    </button>

    <!-- Dropdown menu -->
    <div
      class="flex flex-col fixed inset-0 h-screen max-w-screen ss:absolute ss:left-4 ss:right-4 ss:mt-1 bg-bg-primary ss:rounded-xl ss:shadow-2md ss:py-3 px-4 ss:px-2 z-10 ss:max-h-80 overflow-y-auto"
      :class="{ 'ss:top-full': isOpen, hidden: !isOpen }"
    >
      <div class="ss:hidden relative flex items-center justify-between text-center py-4">
        <button class="cursor-pointer absolute top-4 left-4" @click="toggleDropdown">
          <CrossIcon />
        </button>
        <h3 class="w-full">Товары и услуги</h3>
      </div>
      <!-- Selected option -->
      <div>
        <div
          class="p-3 rounded-xl hover:bg-gray-50 cursor-pointer flex items-center justify-between border-b border-gray-100 ss:border-none"
        >
          <span class="text-gray-900">Все товары и услуги</span>
          <RightIcon />
        </div>

        <!-- Category 1 -->
        <div class="px-3 pt-6 pb-2 text-gray-500 text-[13px] leading-5">Категория 1</div>
        <div
          class="p-3 rounded-xl hover:bg-gray-50 cursor-pointer flex items-center gap-2 border-b border-gray-100 ss:border-none"
        >
          <span class="text-gray-900">Гробы</span>
          <span class="text-gray-500">5</span>
        </div>
        <div
          class="p-3 rounded-xl hover:bg-gray-50 cursor-pointer flex items-center gap-2 border-b border-gray-100 ss:border-none"
        >
          <span class="text-gray-900">Урны</span>
          <span class="text-gray-500">12</span>
        </div>

        <!-- Category 2 -->
        <div class="px-3 pt-6 pb-2 text-gray-500 text-[13px] leading-5">Категория 2</div>
        <div
          class="p-3 rounded-xl hover:bg-gray-50 cursor-pointer flex items-center gap-2 border-b border-gray-100 ss:border-none"
        >
          <span class="text-gray-900">Тапки</span>
          <span class="text-gray-500">2</span>
        </div>
        <div
          class="p-3 rounded-xl hover:bg-gray-50 cursor-pointer flex items-center gap-2 border-b border-gray-100 ss:border-none"
        >
          <span class="text-gray-900">Покрывало</span>
          <span class="text-gray-500">1</span>
        </div>
      </div>
      <div class="text-center pt-2 pb-10 mt-auto ss:hidden">
        <ButtonUI padding="px-30.5 py-4">Показать</ButtonUI>
      </div>
    </div>
  </div>
</template>

<script setup>
import CrossIcon from './icons/CrossIcon.vue'
import RightIcon from './icons/RightIcon.vue'
import ButtonUI from './ui/ButtonUI.vue'
import TriangleIcon from './icons/TriangleIcon.vue'
import { ref } from 'vue'

const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}
</script>
