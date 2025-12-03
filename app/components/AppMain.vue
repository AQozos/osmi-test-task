<template>
  <main>
    <HeroProfile :toggle-tab="toggleTab" :active-tab="activeTab" :company="company"/>
    <div class="line"/>
    <GoodsAndServises v-if="activeTab === 'services'" :cards="cards" />
    <AgentList v-else-if="activeTab === 'agents'" :agents="agents" />
    <AboutCompany v-else-if="activeTab === 'company'" :company="company"/>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import AboutCompany from './AboutCompany.vue'
import AgentList from './AgentList.vue'
import GoodsAndServises from './GoodsAndServises.vue'
import HeroProfile from './HeroProfile.vue'

const {data: cards} = await useFetch('/api/cards');
const {data: agents} = await useFetch('/api/agents');
const {data: company} = await useFetch('/api/company');

const activeTab = ref('services')

const toggleTab = (tab) => {
  activeTab.value = tab
}
</script>
