<script setup lang="ts">
import gsap from 'gsap'

const { data: projects } = await useAsyncData('projects', () => queryContent('projects').find())

useHead({
  title: 'Antoine Morellet - Portfolio',
  meta: [
    { name: 'description', content: 'Portfolio de Antoine Morellet, Développeur Nuxt.js.' }
  ]
})

onMounted(() => {
  // Simple check to ensure ScrollTrigger is registered if we use it, 
  // or just use a simple timeout for stagger if ScrollTrigger isn't imported/registered globally
  // Assuming basic GSAP is available.
  gsap.from('.project-card', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    delay: 0.5 // Wait a bit for loading
  })
})
</script>

<template>
  <main>
    <Hero />
    
    <TechMarquee />

    <section id="about" class="min-h-screen flex items-center justify-center bg-slate-800/50">
      <h2 class="text-4xl font-bold text-white">À propos de moi</h2>
    </section>

    <section id="projects" class="py-24 container mx-auto px-6">
      <h2 class="text-4xl font-bold text-white mb-16 text-center">Projets Récents</h2>
      
      <div v-if="projects" class="grid grid-cols-1 gap-12">
        <template v-for="project in projects" :key="project._path">
            
            <!-- Featured EcoQuest Layout with TresJS -->
            <div v-if="project.title === 'EcoQuest'" class="project-card grid lg:grid-cols-2 gap-12 items-center bg-slate-900/50 p-8 rounded-3xl border border-white/5">
                <div class="h-[400px] w-full rounded-2xl overflow-hidden relative border border-white/10 bg-slate-800/20">
                    <ClientOnly>
                         <TresMockup :image="project.image" />
                    </ClientOnly>
                </div>
                <div>
                   <ProjectCard 
                        :title="project.title"
                        :description="project.description"
                        :tags="project.techStack || project.tags"
                        :color="project.color"
                        :badge="project.badge"
                    />
                </div>
            </div>

            <!-- Standard Grid Layout -->
            <div v-else class="project-card h-[300px]">
                <ProjectCard 
                    :title="project.title"
                    :description="project.description"
                    :tags="project.techStack || project.tags"
                    :color="project.color"
                    :badge="project.badge"
                    :image="project.image"
                />
            </div>

        </template>
      </div>
    </section>

    <section id="contact" class="min-h-screen flex items-center justify-center bg-slate-800/50">
      <h2 class="text-4xl font-bold text-white">Me contacter</h2>
    </section>
  </main>
</template>