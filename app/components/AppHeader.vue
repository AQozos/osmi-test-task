<template>
  <header class="bg-warning-100">
    <div class="hidden ss:flex px-2 py-8 h-16 w-full justify-between items-center">
      <div class="flex justify-center gap-3">
        <a href="#">
          <img src="/img/Logo.png" alt="logo" >
        </a>
        <div
          class="hidden md:flex gap-1 items-center py-3 px-4 bg-gray-100 rounded-[40px] hover:bg-gray-200 cursor-pointer transition duration-300"
        >
          <img class="w-6 h-6" src="/img/26.svg" alt="" >
          <p>Все категории</p>
        </div>
      </div>

      <div class="flex items-center gap-6">
        <div
          class="hidden ml:flex gap-1 items-center px-1.5 py-1 relative mr-6 after:content-[''] after:absolute after:w-px after:h-8 after:bg-gray-300 after:top-0 after:-right-6"
        >
          <MarkerIcon />
          <p class="">Ростов на Дону</p>
        </div>
        <a
          class="hidden ml:inline text-blue-500 hover:text-[#256c5c] transition duration-300"
          href="#"
          >Разместить объявление</a
        >
        <button
          class="bg-gray-100 rounded-3xl flex items-center cursor-pointer hover:bg-gray-200 transition duration-300"
        >
          <img class="w-6 h-6 m-3 mr-2" src="/img/25.svg" alt="" >
          <img class="rounded-[80px] w-10 h-10 m-1" src="/img/agent1.png" alt="" >
        </button>
      </div>
    </div>

    <div class="flex ss:hidden h-14 p-3 items-center">
      <button class="cursor-pointer">
        <img class="w-6 h-6" src="/img/25.svg" alt="burger-icon" >
      </button>
      <img class="w-[136px] h-8 mr-9 ml-auto" src="/img/Logo-mobile.svg" alt="" >
      <button class="cursor-pointer relative">
        <img class="w-6 h-6" src="/img/busket.svg" alt="busket-icon" >
        <span
          class="bg-blue-500 rounded-full size-4 inline-block p-0.5 text-gray-10 text-xs leading-3 font-opensans font-semibold absolute -right-[5px] -top-[5px]"
          >1</span
        >
      </button>
    </div>
  </header>
</template>

<script setup>
import MarkerIcon from './icons/MarkerIcon.vue'
</script>
