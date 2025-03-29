<template> 
  <header class="sticky top-0 z-50 bg-[#0f172a] text-white shadow-md font-sans">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="text-2xl font-extrabold tracking-wider text-yellow-400">
          Lucs Autowaschhaus
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-6">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="hover:text-yellow-300 transition"
            active-class="font-semibold text-yellow-300"
          >
            {{ link.label }}
          </router-link>

          <!-- Call Button with number only -->
          <a
            href="tel:+4915773422658"
            class="ml-6 bg-yellow-400 text-[#0f172a] font-bold px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
          >
            01577 3422658
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path v-if="!isOpen" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Dropdown -->
    <div v-if="isOpen" class="md:hidden bg-[#1e293b]">
      <nav class="flex flex-col space-y-2 py-4 px-4">
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="text-white hover:text-yellow-400"
          active-class="font-semibold text-yellow-400"
          @click="isOpen = false"
        >
          {{ link.label }}
        </router-link>
        <!-- Mobile Call Button with number only -->
        <a
          href="tel:+4915773422658"
          class="mt-2 bg-yellow-400 text-[#0f172a] font-bold px-4 py-2 rounded-lg text-center hover:bg-yellow-300 transition"
        >
          01577 3422658
        </a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isOpen: false,
      navLinks: [
        { label: "Start", path: "/" },
        { label: "Über uns", path: "/ueber-uns" },
        { label: "Leistungen", path: "/leistungen" },
        { label: "Kontakt", path: "/kontakt" }
      ]
    };
  }
};
</script>

<style scoped>
.router-link-active {
  text-decoration: underline;
}
</style>