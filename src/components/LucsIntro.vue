<template> 
  <section class="py-20 bg-white text-gray-800">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <h2 class="text-4xl font-extrabold mb-6 text-yellow-500">Wer ist Luc?</h2>
      <p class="text-lg leading-relaxed max-w-3xl mx-auto mb-10">
        Luc ist 21 Jahre alt, studiert nebenbei und hat sich mit Lucs Autowaschhaus seinen Traum erfüllt: ein eigener Waschplatz, hochwertige Pflegeprodukte aus eigener Entwicklung – und ein Anspruch, der weit über Standardleistungen hinausgeht. Was ihn antreibt? Die Leidenschaft fürs Detail und der Wunsch, es besser zu machen als viele andere.
      </p>

      <div class="grid md:grid-cols-2 gap-8 items-center">
        <!-- Lucs Bild -->
        <div class="rounded-xl overflow-hidden shadow-lg">
          <img src="https://source.unsplash.com/600x400/?car,detail" alt="Luc bei der Arbeit" class="w-full object-cover h-80">
        </div>

        <!-- Details über Luc -->
        <div class="text-left">
          <h3 class="text-2xl font-bold text-[#0f172a] mb-4">Mit Herzblut für dein Auto</h3>
          <ul class="space-y-3 text-base text-gray-700 list-disc list-inside">
            <li>Früh eigene Erfahrung in der Aufbereitung gesammelt</li>
            <li>Eigener Waschplatz & nachhaltige Pflegelinie</li>
            <li>Beratung auf Augenhöhe & individuelle Betreuung</li>
            <li>Ehrliche Arbeit zum fairen Preis</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LucIntro",
};
</script>

<style scoped>
/* Optional: Anpassungen bei Bedarf */
</style>
