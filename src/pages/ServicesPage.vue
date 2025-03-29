<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Leistungen | Luc’s Autowaschhaus',
  meta: [
    {
      name: 'description',
      content: 'Fahrzeugaufbereitung, Keramikversiegelung, Innenreinigung und mehr – entdecke alle Leistungen von Luc’s Autowaschhaus in Siegburg.'
    }
  ]
})
</script>

<template>
  <section class="bg-white py-12 text-center text-gray-800">
    <h1 class="text-4xl font-extrabold mb-10 text-[#0f172a]">
      Unsere Leistungen im Überblick
    </h1>
    <PackageOverview />
    <PremiumServices />
    <LeistungsübersichtSection />
    <ReferencesSection />
  </section>
</template>

<script>
import PackageOverview from '../components/PackageOverview.vue'
import PremiumServices from '../components/PremiumServices.vue'
import LeistungsübersichtSection from '../components/LeistungsübersichtSection.vue'
import ReferencesSection from '../components/ReferencesSection.vue'

export default {
  name: 'Leistungen',
  components: {
    PackageOverview,
    PremiumServices,
    LeistungsübersichtSection,
    ReferencesSection
  }
}
</script>

<style scoped>
</style>
