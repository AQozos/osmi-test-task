<template>
  <div v-for="card in cards" :key="card.id" class="relative p-2 w-full max-w-[430px] bg-gray-0">
    <div
      v-if="card.status !== 'hidden'"
      class="absolute top-4 left-4 flex gap-1 text-gray-10 text-[13px] leading-5"
    >
      <div class="bg-overlay-90 rounded-xl px-2 py-1 flex items-center gap-2">
        <img src="/img/views.svg" alt="" >
        <span>{{ card.views }}</span>
      </div>
      <div class="bg-overlay-90 rounded-xl px-2 py-1 flex items-center gap-2">
        <img src="/img/calendar.svg" alt="" >
        <span>{{ card.daysAgo }} дня</span>
      </div>
    </div>
    <button
      class="absolute top-4 right-4 bg-gray-10 rounded-xl px-3 py-1.5 text-[13px] leading-5 border-solid border border-gray-200 cursor-pointer ss:hidden"
    >
      Действия
    </button>
    <img
      class="h-82 ss:h-[322px] w-full max-w-[414px] object-cover rounded-[28px]"
      :src="card.image"
      alt=""
    >
    <div class="mt-4 mb-[9px] px-1 text-gray-900">
      <p class="text-[17px] leading-5 mb-3">{{ card.price }} ₽</p>
      <h3>{{ card.title }}</h3>
    </div>
    <div
      v-if="card.status === 'active'"
      class="px-1 pb-1 pt-3 flex items-center justify-between border-t border-gray-50"
    >
      <p class="text-gray-500 text-[13px] leading-4.5">Увеличьте количество просмотров</p>
      <ButtonUI padding="px-3 p-2">Продвигать</ButtonUI>
    </div>
    <div
      v-if="card.status !== 'active'"
      class="px-1 pb-1 pt-3 border-t border-gray-50 text-center leading-10"
    >
      <p :class="card.status === 'promoted' ? 'text-blue-500' : 'text-negative-500'">
        Объявление {{ card.status === 'promoted' ? 'продвигается' : 'скрыто' }}
      </p>
    </div>
  </div>
</template>

<script setup>
import ButtonUI from './ui/ButtonUI.vue'

defineProps({
  cards: {
    type: Array,
    required: true
  }
})
</script>
