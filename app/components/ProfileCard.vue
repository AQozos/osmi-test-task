<template>
  <section class="hidden ss:block">
    <img class="size-30 rounded-2xl mx-auto" src="/img/profile.jpg" alt="" >
    <h3 class="mt-6 font-semibold text-2xl leading-7 text-center">{{ company.name }}</h3>
    <div class="mt-3 flex gap-1 justify-center font-normal text-[15px] leading-5">
      <div class="flex items-center gap-0.5" :class="{hidden: !company.verified}">
        <img class="size-4" src="/img/Premium.svg" alt="premium-icon" >
        <p>Документы проверены</p>
      </div>

      <span :class="{hidden: !company.verified}">•</span>

      <div class="flex items-center gap-0.5" :class="{ hidden: !company.rating }">
        <img class="size-4" src="/img/star.svg" alt="star-icon" >
        <p>{{ company.rating }}</p>
      </div>

      <span :class="{ hidden: !company.rating }">•</span>

      <div>
        <p>{{ company.rating ? company.reviewsCount + ' отзывов' : 'Нет отзывов' }}</p>
      </div>
    </div>

    <div class="mt-6 text-center">
      <ButtonUI padding="px-5 py-4"> Показать номер телефона </ButtonUI>
    </div>
  </section>
</template>

<script setup>
import ButtonUI from './ui/ButtonUI.vue'

defineProps({
  company: {
    type: Object,
    required: true,
  }
})
</script>
