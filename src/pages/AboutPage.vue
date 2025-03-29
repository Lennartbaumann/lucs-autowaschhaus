<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Über uns | Luc’s Autowaschhaus',
  meta: [
    {
      name: 'description',
      content: 'Lerne Luc und seine Werte kennen: Leidenschaft, Qualität, faire Preise – professionelle Fahrzeugpflege in Siegburg mit Herz und Verstand.'
    }
  ]
})
</script>

<template>
  <section class="bg-white py-12 text-center text-gray-800">
    <h1 class="text-4xl font-extrabold mb-10 text-[#0f172a]">
      Über Lucs Autowaschhaus
    </h1>
    <LucsIntro />
    <WerteSection />
    <ReferencesSection />
  </section>
</template>

<script>
import LucsIntro from '../components/LucsIntro.vue'
import WerteSection from '../components/WerteSection.vue'
import ReferencesSection from '../components/ReferencesSection.vue'

export default {
  name: 'AboutUs',
  components: {
    LucsIntro,
    WerteSection,
    ReferencesSection
  }
}
</script>

<style scoped>
</style>
