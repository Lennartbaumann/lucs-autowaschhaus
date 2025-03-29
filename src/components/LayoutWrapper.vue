<template>
  <div>
    <Header />
    <main class="min-h-screen">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
import { onMounted } from 'vue'

onMounted(() => {
  const jsonLd = document.createElement('script')
  jsonLd.type = 'application/ld+json'
  jsonLd.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Lucs Autowaschhaus",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Siegburg",
      "postalCode": "53721",
      "streetAddress": "Beispielstraße 1"
    },
    "telephone": "+49-1577-3422658",
    "url": "https://deine-domain.de"
  })
  document.head.appendChild(jsonLd)
})
</script>
