<template> 
  <section class="bg-[#0f172a] text-white py-20">
    <div class="max-w-7xl mx-auto px-4 text-center animate-fade-in">
      <p class="uppercase tracking-widest text-yellow-400 text-sm mb-2">
        Ihr Fahrzeug. Unser Anspruch.
      </p>
      <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg">
        Autoaufbereitung & Fahrzeugpflege in Siegburg
      </h1>
      <p class="text-lg md:text-xl text-gray-300 mb-8 drop-shadow-sm">
        Lucs Autowaschhaus in Siegburg bietet hochwertige Autopflege, professionelle Fahrzeugaufbereitung und Premium-Politur für jedes Fahrzeug.
      </p>
      <div class="flex justify-center gap-4 flex-wrap">
        <router-link
          to="/leistungen"
          title="Autopflege-Leistungen bei Lucs Autowaschhaus"
          class="bg-yellow-400 text-[#0f172a] font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
        >
          Unsere Leistungen
        </router-link>
        <a
          href="tel:+4915773422658"
          title="Rufe Lucs Autowaschhaus jetzt an"
          class="border-2 border-yellow-400 text-yellow-400 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-[#0f172a] transition"
        >
          Jetzt anrufen
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  mounted() {
    // JSON-LD Script dynamisch einfügen
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
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
    });
    document.head.appendChild(script);
  }
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}
</style>
