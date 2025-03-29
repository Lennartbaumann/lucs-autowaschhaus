<template> 
  <footer class="bg-[#0f172a] text-white text-sm py-6 mt-12 border-t border-gray-700 font-sans">
    <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <!-- Copyright -->
      <p class="text-center md:text-left text-gray-300">
        © {{ new Date().getFullYear() }} Lucs Autowaschhaus – Alle Rechte vorbehalten
      </p>

      <!-- Rechtliches -->
      <nav class="flex flex-wrap justify-center gap-4">
        <router-link
          to="/impressum"
          class="text-gray-300 hover:text-yellow-300 transition"
        >
          Impressum
        </router-link>
        <router-link
          to="/datenschutz"
          class="text-gray-300 hover:text-yellow-300 transition"
        >
          Datenschutz
        </router-link>
        <router-link
          to="/agb"
          class="text-gray-300 hover:text-yellow-300 transition"
        >
          AGB
        </router-link>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
