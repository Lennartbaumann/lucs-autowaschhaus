<template> 
  <section class="bg-white py-20">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Unsere Pflegepakete</h2>
      <p class="text-gray-600 max-w-xl mx-auto mb-12">
        Unsere Sparpakete – abgestimmt auf dein Fahrzeug. Wähle zwischen gründlicher Reinigung und exklusiver Aufbereitung.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Paket 1 -->
        <div class="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
          <h3 class="text-xl font-bold text-[#0f172a] mb-4">Classic Paket</h3>
          <ul class="text-gray-700 text-left space-y-2 mb-6">
            <li>✔ Außen- & Innenreinigung</li>
            <li>✔ Felgenreinigung</li>
            <li>✔ Scheibenreinigung</li>
            <li>✔ Staubsaugen des Innenraums</li>
          </ul>
          <p class="text-2xl font-bold text-yellow-500 mb-4">ab 45 €</p>
          <router-link
            to="/kontakt"
            class="inline-block bg-yellow-400 text-[#0f172a] font-bold px-5 py-2 rounded-lg hover:bg-yellow-300 transition"
          >
            Jetzt Termin vereinbaren
          </router-link>
        </div>

        <!-- Paket 2 -->
        <div class="border-2 border-yellow-400 rounded-xl p-6 shadow-md hover:shadow-xl transition bg-[#fefce8]">
          <h3 class="text-xl font-bold text-[#0f172a] mb-4">Premium Paket</h3>
          <ul class="text-gray-700 text-left space-y-2 mb-6">
            <li>✔ Classic Paket enthalten</li>
            <li>✔ Tiefenreinigung im Innenraum</li>
            <li>✔ Pflege von Kunststoff & Cockpit</li>
            <li>✔ Geruchsneutralisierung</li>
          </ul>
          <p class="text-2xl font-bold text-yellow-500 mb-4">ab 89 €</p>
          <router-link
            to="/kontakt"
            class="inline-block bg-yellow-400 text-[#0f172a] font-bold px-5 py-2 rounded-lg hover:bg-yellow-300 transition"
          >
            Jetzt Termin vereinbaren
          </router-link>
        </div>

        <!-- Paket 3 -->
        <div class="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
          <h3 class="text-xl font-bold text-[#0f172a] mb-4">Luxury Paket</h3>
          <ul class="text-gray-700 text-left space-y-2 mb-6">
            <li>✔ Premium Paket enthalten</li>
            <li>✔ Professionelle Lackpolitur</li>
            <li>✔ Hochwertige Versiegelung</li>
            <li>✔ Motorraumreinigung</li>
          </ul>
          <p class="text-2xl font-bold text-yellow-500 mb-4">ab 179 €</p>
          <router-link
            to="/kontakt"
            class="inline-block bg-yellow-400 text-[#0f172a] font-bold px-5 py-2 rounded-lg hover:bg-yellow-300 transition"
          >
            Jetzt Termin vereinbaren
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
