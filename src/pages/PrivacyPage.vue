<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Datenschutz | Luc’s Autowaschhaus',
  meta: [
    {
      name: 'description',
      content: 'Datenschutzerklärung gemäß DSGVO für Luc’s Autowaschhaus. Erfahre, wie deine Daten beim Besuch unserer Website verarbeitet, gespeichert und geschützt werden.'
    }
  ]
})
</script>

<template>
  <section class="bg-white py-20 text-gray-800">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-4xl font-extrabold text-[#0f172a] mb-6 text-center">Datenschutzerklärung</h1>
      <p class="text-sm text-gray-600 mb-12 text-center">
        Nach Art. 12, 13 ff. der Datenschutz-Grundverordnung (DSGVO)
      </p>

      <div class="space-y-10 text-sm text-gray-700 leading-relaxed">
        <!-- Verantwortlicher -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-500 mb-2">1. Verantwortlicher</h2>
          <p>
            Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:
            <br><br>
            Luc’s Autowaschhaus<br>
            Inhaber: Luc Pullem<br>
            Alberstraße 1<br>
            53721 Siegburg<br>
            Telefon: 01577 3422658<br>
            E-Mail: kontakt@lucsautowaschhaus.de
          </p>
        </div>

        <!-- Erhebung personenbezogener Daten -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-500 mb-2">2. Erhebung und Speicherung personenbezogener Daten</h2>
          <p>
            Beim Besuch dieser Website werden automatisch Informationen erfasst, die Ihr Browser an unseren Server übermittelt (sog. Server-Logfiles). Diese umfassen z. B.:
          </p>
          <ul class="list-disc list-inside mt-2">
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit der Anfrage</li>
            <li>Browsertyp und Betriebssystem</li>
            <li>Referrer-URL</li>
          </ul>
          <p class="mt-2">
            Diese Daten dienen ausschließlich der technischen Auswertung und Sicherheit. Eine Zusammenführung mit anderen Daten erfolgt nicht.
          </p>
        </div>

        <!-- Kontaktaufnahme -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-500 mb-2">3. Kontaktaufnahme per Formular oder E-Mail</h2>
          <p>
            Wenn Sie uns per Formular oder E-Mail kontaktieren, speichern wir Ihre Angaben zwecks Bearbeitung und für den Fall von Anschlussfragen.
            Eine Weitergabe erfolgt nicht ohne Ihre Einwilligung.
          </p>
        </div>

        <!-- Google Maps -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-500 mb-2">4. Einbindung von Google Maps</h2>
          <p>
            Auf unserer Website ist eine Karte von Google Maps eingebunden. Beim Aufruf können personenbezogene Daten (z. B. IP-Adresse) an Google übermittelt werden.
            Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
          </p>
        </div>

        <!-- Ihre Rechte -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-500 mb-2">5. Ihre Rechte als betroffene Person</h2>
          <p>
            Sie haben das Recht auf:
          </p>
          <ul class="list-disc list-inside mt-2">
            <li>Auskunft über die gespeicherten Daten</li>
            <li>Berichtigung unrichtiger Daten</li>
            <li>Löschung oder Einschränkung der Verarbeitung</li>
            <li>Widerspruch gegen die Verarbeitung</li>
            <li>Datenübertragbarkeit</li>
            <li>Beschwerde bei einer Aufsichtsbehörde</li>
          </ul>
        </div>

        <!-- Auftragsverarbeitung -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-500 mb-2">6. Auftragsverarbeitung & Hosting</h2>
          <p>
            Die technische Infrastruktur dieser Website wird durch einen Hosting-Anbieter betrieben, mit dem ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO besteht.
          </p>
        </div>

        <!-- Änderungen -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-500 mb-2">7. Änderungen dieser Datenschutzerklärung</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an aktuelle rechtliche Anforderungen oder technische Änderungen anzupassen.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Datenschutz'
}
</script>

<style scoped>
</style>
