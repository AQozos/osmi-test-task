<template>
  <div class="max-w-140 mx-auto">
    <div class="pt-[33px]">
      <ul class="flex flex-col gap-2 ss:gap-3">
        <li class="p-4 ss:p-5">
          <h3 class="text-2xl leading-7 font-semibold">О компании</h3>
          <p class="mt-2 tex-[17px] leading-7 font-normal line-clamp-3">
            {{ company.description }}
          </p>
        </li>
        <li class="p-4 ss:p-5 opacity-[0.3]">
          <div class="flex justify-between">
            <h3 class="text-2xl leading-7 font-semibold">Режим работы</h3>
            <ArrowIcon />
          </div>
          <p class="mt-2 text-[17px] leading-7 font-normal">Сегодня с {{ company.schedule.startTime }} до {{ company.schedule.endTime }}</p>
        </li>
        <li class="relative flex flex-col ss:flex-row">
          <div class="p-4 ss:p-5 order-2 ss:order-1">
            <h3 class="text-2xl leading-7 font-semibold">Местоположение</h3>
            <a class="mt-8 inline-block text-blue-500" href=""
              >{{ company.address }}</a
            >
          </div>
          <img class="ss:hidden w-full h-24 order-1 object-cover" src="/img/map_mobile.jpg" alt="map" >
          <img
            class="hidden ss:block w-50 h-33 order-2 object-cover rounded-[20px]"
            src="/img/Map.jpg"
            alt="map"
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import ArrowIcon from './icons/TriangleIcon.vue'

defineProps({
  company: {
    type: Object,
    required: true,
  }
})
</script>
