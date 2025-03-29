<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Luc’s Autowaschhaus | Fahrzeugpflege in Siegburg',
  meta: [
    {
      name: 'description',
      content: 'Hochwertige Fahrzeugaufbereitung, Keramikversiegelung und Auto-Detailing in Siegburg. Luc’s Autowaschhaus – fair, professionell, persönlich.'
    }
  ]
})
</script>

<template>
  <div>
    <HeroSection />
    <PackageOverview />
    <LucsIntro />
    <PremiumServices />
    <ReferencesSection />
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'
import PackageOverview from '../components/PackageOverview.vue'
import LucsIntro from '../components/LucsIntro.vue'
import PremiumServices from '../components/PremiumServices.vue'
import ReferencesSection from '../components/ReferencesSection.vue'

export default {
  name: 'HomePage',
  components: {
    HeroSection,
    PackageOverview,
    LucsIntro,
    PremiumServices,
    ReferencesSection
  }
}
</script>
