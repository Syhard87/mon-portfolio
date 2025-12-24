<script setup lang="ts">
import gsap from 'gsap'
import { useMouse } from '@vueuse/core'

const mainTitle = ref<HTMLElement | null>(null)
const { x, y } = useMouse()
const { width, height } = useWindowSize()

onMounted(() => {
  // Initial Reveal Animation
  const tl = gsap.timeline()
  
  tl.fromTo('.hero-reveal', 
    { y: 100, opacity: 0, rotateX: -20 },
    { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1, ease: 'power4.out' }
  )
})

// Interactive Mesh Gradient Effect for Text
const textGradientStyle = computed(() => {
  const xPos = (x.value / width.value) * 100
  const yPos = (y.value / height.value) * 100
  return {
    backgroundPosition: `${xPos}% ${yPos}%`
  }
})
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
    <!-- 3D Background -->
    <ClientOnly>
      <ThreeBackground />
    </ClientOnly>

    <!-- Content -->
    <div class="container mx-auto px-6 relative z-10 text-center perspective-1000">
      
      <!-- Badge -->
      <div class="hero-reveal inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5 mb-8">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span class="text-sm text-emerald-300 font-medium tracking-wide">Disponible pour projets</span>
      </div>

      <!-- Heading -->
      <h1 class="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
        <div class="overflow-hidden">
          <div class="hero-reveal">Créateur d'expériences</div>
        </div>
        <div class="overflow-hidden">
          <div 
            ref="mainTitle"
            class="hero-reveal text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-indigo-500 to-purple-500 bg-[length:200%_200%] transition-all duration-100 ease-out py-2"
            :style="textGradientStyle"
          >
            numériques sur mesure.
          </div>
        </div>
      </h1>

      <!-- Subtitle -->
      <div class="overflow-hidden mb-12">
        <p class="hero-reveal text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Je suis <span class="text-slate-200 font-semibold">Antoine Morellet</span>, Creative Technologist & Développeur Nuxt.js passionné par l'alliance de la performance et de l'esthétique.
        </p>
      </div>

      <!-- CTAs with Magnetic Buttons -->
      <div class="hero-reveal flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <MagneticButton>
          <NuxtLink 
            to="#projects"
            class="block px-8 py-4 bg-emerald-500 text-white font-semibold rounded-lg shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-shadow"
          >
            Voir mes projets
          </NuxtLink>
        </MagneticButton>
        
        <MagneticButton>
          <NuxtLink 
            to="#contact"
            class="block px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg border border-slate-700 hover:border-slate-600 transition-colors"
          >
            Me contacter
          </NuxtLink>
        </MagneticButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
</style>
