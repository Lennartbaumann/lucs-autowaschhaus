<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Impressum | Luc’s Autowaschhaus',
  meta: [
    {
      name: 'description',
      content: 'Impressum von Luc’s Autowaschhaus – gesetzlich vorgeschriebene Angaben gemäß § 5 TMG & § 18 MStV. Verantwortlich: Luc Pullem, Alberstraße 1, Siegburg.'
    }
  ]
})
</script>

<template>
  <section class="bg-white py-20 text-gray-800">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-4xl font-extrabold text-[#0f172a] mb-6 text-center">Impressum</h1>
      <p class="text-sm text-gray-600 mb-12 text-center">
        Angaben gemäß § 5 Telemediengesetz (TMG) und § 18 Medienstaatsvertrag (MStV)
      </p>

      <div class="space-y-10 text-sm text-gray-700 leading-relaxed">
        <!-- Anbieter -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-500 mb-2">Diensteanbieter</h2>
          <p>
            Luc’s Autowaschhaus<br />
            Inhaber: Luc Pullem<br />
            Alberstraße 1<br />
            53721 Siegburg<br />
            Deutschland
          </p>
        </div>

        <!-- Kontakt -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-500 mb-2">Kontakt</h2>
          <p>
            Telefon: 01577 3422658<br />
            E-Mail: kontakt@lucsautowaschhaus.de
          </p>
          <p class="mt-2">
            Weitere Kontaktmöglichkeiten findest du auf unserer
            <router-link to="/kontakt" class="underline text-yellow-600 hover:text-yellow-700 font-medium">
              Kontaktseite
            </router-link>.
          </p>
        </div>

        <!-- Verantwortlich -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-500 mb-2">Verantwortlich nach § 18 Abs. 2 MStV</h2>
          <p>
            Luc Pullem<br />
            Alberstraße 1<br />
            53721 Siegburg
          </p>
        </div>

        <!-- Haftung Inhalte -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-500 mb-2">Haftung für Inhalte</h2>
          <p>
            Wir sind gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten verantwortlich. Nach §§ 8 bis 10 TMG
            sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder
            nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
            oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          </p>
        </div>

        <!-- Haftung Links -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-500 mb-2">Haftung für Links</h2>
          <p>
            Unser Angebot enthält ggf. Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb übernehmen wir für diese fremden Inhalte keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets
            der jeweilige Anbieter oder Betreiber verantwortlich.
          </p>
        </div>

        <!-- Urheberrecht -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-500 mb-2">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Impressum'
}
</script>

<style scoped>
</style>
