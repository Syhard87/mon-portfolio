<script setup lang="ts">
// Hero component logic
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
    <!-- Background Decor -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-[20%] left-[10%] w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-[20%] right-[10%] w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10 text-center">
      <!-- Badge -->
      <div class="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5 mb-8 animate-fade-in opacity-0" style="animation-delay: 0.1s; animation-fill-mode: forwards;">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span class="text-sm text-emerald-300 font-medium tracking-wide">Disponible pour projets</span>
      </div>

      <!-- Heading -->
      <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-slide-up opacity-0" style="animation-delay: 0.2s; animation-fill-mode: forwards;">
        Créateur d'expériences
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-500">
          numériques
        </span>
        <br class="hidden md:block" />
        sur mesure.
      </h1>

      <!-- Subtitle -->
      <p class="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up opacity-0" style="animation-delay: 0.4s; animation-fill-mode: forwards;">
        Je suis Antoine Morellet, Développeur Nuxt.js passionné par la conception d'interfaces performantes et esthétiques.
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up opacity-0" style="animation-delay: 0.6s; animation-fill-mode: forwards;">
        <NuxtLink 
          to="#projects"
          class="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transform hover:-translate-y-1"
        >
          Voir mes projets
        </NuxtLink>
        <NuxtLink 
          to="#contact"
          class="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-700 hover:border-slate-600 transition-all duration-300"
        >
          Me contacter
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
