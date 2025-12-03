<template>
  <li v-for="agent of agents" :key="agent.id" class="p-4 sm:p-5 bg-bg-primary rounded-[20px]">
    <div className="grid grid-cols-[auto_1fr] gap-x-3 sm:gap-x-5">
      <img
        :src="agent.src"
        alt=""
        className="size-12 rounded-xl row-span-1 sm:row-span-2 sm:size-35"
      >

      <div>
        <h3 className="font-semibold text-xl text-gray-900 sm:text-2xl sm:leading-7">
          {{ agent.name }}
        </h3>

        <div class="flex gap-1 font-normal text-[15px] leading-5 mt-1">
          <div class="flex items-center gap-0.5" :class="{ hidden: !agent.verified }">
            <img class="size-4" src="/img/Premium.svg" alt="" >
            <p class="hidden sm:block">Документы проверены</p>
            <p class="sm:hidden">Проверен</p>
          </div>
          <span :class="{ hidden: !agent.verified }">•</span>
          <div class="flex items-center gap-0.5" :class="{ hidden: !agent.rating }">
            <img class="size-4" src="/img/star.svg" alt="" >
            <p>{{ agent.rating }}</p>
          </div>
          <span :class="{ hidden: !agent.rating }">•</span>
          <div>
            <p>{{ agent.rating ? agent.reviewsCount + ' отзывов' : 'Нет отзывов' }}</p>
          </div>
        </div>
      </div>

      <p className="font-normal col-span-2 sm:col-span-1 mt-2 sm:mt-3 line-clamp-4 sm:line-clamp-3">
        {{ agent.description }}
      </p>
    </div>
  </li>
</template>

<script setup>
defineProps({
  agents: {
    type: Array,
    required: true
  }
})
</script>
