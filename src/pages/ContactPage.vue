<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Kontakt | Luc’s Autowaschhaus',
  meta: [
    {
      name: 'description',
      content: 'Du möchtest einen Termin vereinbaren oder hast Fragen zur Fahrzeugpflege? Kontaktiere Luc’s Autowaschhaus in Siegburg direkt über das Formular, per Mail oder telefonisch.'
    }
  ]
})
</script>

<template>
  <section class="bg-white py-20 text-gray-800">
    <div class="max-w-5xl mx-auto px-4">
      <h1 class="text-4xl font-extrabold text-[#0f172a] mb-6 text-center">Kontakt</h1>
      <p class="text-lg text-gray-600 mb-8 text-center">
        Du hast Fragen oder möchtest einen Termin vereinbaren? Dann kontaktiere uns gerne – wir sind persönlich für dich da.
      </p>

      <!-- Hinweis -->
      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md text-left mb-12 shadow-sm">
        <p class="text-sm text-yellow-800">
          <strong>Hinweis:</strong> Besuche bitte ausschließlich nach vorheriger Absprache. Vor Ort ist nicht durchgehend Personal anwesend.
          Nutze zur Navigation bitte direkt 
          <a 
            href="https://www.google.com/maps/place/Luc%E2%80%98s+Autowaschhaus/@50.8026553,7.2017733,16z/data=!3m1!4b1!4m6!3m5!1s0x47bedd8d0c02ec6b:0x7c25869295335fc3!8m2!3d50.8026519!4d7.2043482!16s%2Fg%2F11jszz0m1f?entry=ttu" 
            target="_blank" 
            class="underline font-medium hover:text-yellow-600"
          >
            Luc’s Autowaschhaus auf Google Maps
          </a>.
        </p>
      </div>

      <!-- Kontaktinfos & Formular -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div class="space-y-5 text-left">
          <div>
            <h3 class="text-xl font-semibold text-yellow-500">Adresse</h3>
            <p>Alberstraße 1<br>53721 Siegburg</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-yellow-500">Telefon</h3>
            <p>01577 3422658</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-yellow-500">E-Mail</h3>
            <p>kontakt@lucsautowaschhaus.de</p>
          </div>
        </div>

        <!-- Kontaktformular -->
        <form @submit.prevent class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700">Dein Name</label>
            <input type="text" required class="mt-1 block w-full border border-gray-300 rounded-md p-3" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">E-Mail-Adresse</label>
            <input type="email" required class="mt-1 block w-full border border-gray-300 rounded-md p-3" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Nachricht</label>
            <textarea required rows="5" class="mt-1 block w-full border border-gray-300 rounded-md p-3"></textarea>
          </div>
          <button type="submit" class="bg-yellow-400 text-[#0f172a] font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
            Nachricht senden
          </button>
        </form>
      </div>

      <!-- Google Maps mit Marker -->
      <div class="w-full h-80 rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2510.914900213328!2d7.2017733!3d50.8026553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bedd8d0c02ec6b%3A0x7c25869295335fc3!2sLuc%E2%80%98s%20Autowaschhaus!5e0!3m2!1sde!2sde!4v1711454060000"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Kontakt'
}
</script>

<style scoped>
</style>
