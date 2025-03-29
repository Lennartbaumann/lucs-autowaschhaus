<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'AGB | Luc’s Autowaschhaus',
  meta: [
    {
      name: 'description',
      content: 'Allgemeine Geschäftsbedingungen (AGB) von Luc’s Autowaschhaus. Hier findest du alle rechtlichen Hinweise rund um Terminvereinbarung, Leistungen, Haftung und Datenschutz.'
    }
  ]
})
</script>

<template>
  <section class="bg-white py-20 text-gray-800">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-4xl font-extrabold text-[#0f172a] mb-6 text-center">Allgemeine Geschäftsbedingungen (AGB)</h1>
      <p class="text-sm text-gray-600 mb-12 text-center">
        Stand: März 2025
      </p>

      <div class="space-y-10 text-sm text-gray-700 leading-relaxed">
        <!-- Geltungsbereich -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-500 mb-2">1. Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Leistungen von Luc’s Autowaschhaus, Inhaber Luc Pullem, Alberstraße 1, 53721 Siegburg (im Folgenden: „Dienstleister“) gegenüber Verbrauchern und Unternehmern.
          </p>
        </div>

        <!-- Vertragsschluss -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-500 mb-2">2. Vertragsschluss</h2>
          <p>
            Der Vertrag kommt durch individuelle Terminvereinbarung per Telefon, E-Mail oder über das Kontaktformular zustande. Ein Anspruch auf Durchführung besteht erst nach ausdrücklicher Bestätigung durch den Dienstleister.
          </p>
        </div>

        <!-- Leistungen & Preise -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-500 mb-2">3. Leistungen und Preise</h2>
          <p>
            Alle angebotenen Leistungen sind freibleibend. Preise verstehen sich in Euro und enthalten keine Umsatzsteuer gemäß § 19 UStG (Kleinunternehmerregelung). Maßgeblich sind die bei Vertragsabschluss vereinbarten Preise.
          </p>
        </div>

        <!-- Termine & Stornierung -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-500 mb-2">4. Termine, Stornierung und Verspätung</h2>
          <p>
            Vereinbarte Termine sind verbindlich. Eine kostenfreie Stornierung ist bis 24 Stunden vor dem Termin möglich. Bei kurzfristiger Absage oder Nichterscheinen behalten wir uns vor, Ausfallkosten zu berechnen.
          </p>
        </div>

        <!-- Haftung -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-500 mb-2">5. Haftung</h2>
          <p>
            Der Dienstleister haftet nur für Schäden, die vorsätzlich oder grob fahrlässig verursacht wurden. Für Schäden durch versteckte Mängel am Fahrzeug oder unsachgemäßen Vorzustand wird keine Haftung übernommen.
          </p>
        </div>

        <!-- Datenschutz -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-500 mb-2">6. Datenschutz</h2>
          <p>
            Personenbezogene Daten werden nur zur Vertragsabwicklung genutzt. Weitere Informationen findest du in unserer
            <router-link to="/datenschutz" class="underline text-yellow-600 hover:text-yellow-700 font-medium">
              Datenschutzerklärung
            </router-link>.
          </p>
        </div>

        <!-- Gerichtsstand -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-500 mb-2">7. Gerichtsstand</h2>
          <p>
            Sofern gesetzlich zulässig, ist Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis der Sitz des Dienstleisters.
          </p>
        </div>

        <!-- Schlussbestimmungen -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-500 mb-2">8. Schlussbestimmungen</h2>
          <p>
            Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein, bleibt die Wirksamkeit der übrigen Regelungen unberührt.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AGB'
}
</script>

<style scoped>
</style>
