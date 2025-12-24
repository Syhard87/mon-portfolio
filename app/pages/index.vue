useHead({
  title: 'Antoine Morellet - Portfolio',
  meta: [
    { name: 'description', content: 'Portfolio de Antoine Morellet, Développeur Nuxt.js.' }
  ]
})
</script>

<template>
  <main>
    <Hero />
    <!-- Other sections like About and Projects will go here -->
    <section id="about" class="min-h-screen flex items-center justify-center bg-slate-800/50">
      <h2 class="text-4xl font-bold text-white">About Section Placeholder</h2>
    </section>
    <section id="projects" class="min-h-screen flex items-center justify-center">
      <h2 class="text-4xl font-bold text-white">Projects Section Placeholder</h2>
    </section>
    <section id="contact" class="min-h-screen flex items-center justify-center bg-slate-800/50">
      <h2 class="text-4xl font-bold text-white">Contact Section Placeholder</h2>
    </section>
  </main>
</template>
