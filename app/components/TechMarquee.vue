<script setup lang="ts">
const row1 = [
  { name: 'Figma', icon: 'logos:figma' },
  { name: 'Terraform', icon: 'logos:terraform-icon' },
  { name: 'ASP.NET', icon: 'logos:dotnet' },
  { name: 'C#', icon: 'logos:c-sharp' },
  { name: 'Nuxt.js', icon: 'logos:nuxt-icon' },
  { name: 'Vue.js', icon: 'logos:vue' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
]

const row2 = [
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'Express', icon: 'simple-icons:express' },
  { name: 'PostgreSQL', icon: 'logos:postgresql' },
  { name: 'Docker', icon: 'logos:docker-icon' },
  { name: 'Ansible', icon: 'logos:ansible' },
  { name: 'VB.NET', icon: 'file-icons:vb' },
  { name: 'Git', icon: 'logos:git-icon' },
  { name: 'Three.js', icon: 'logos:threejs' },
]
</script>

<template>
  <section class="py-20 bg-slate-900 overflow-hidden relative">
    <!-- Gradient Masks -->
    <div class="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
    <div class="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>

    <div class="container mx-auto px-6 mb-12 text-center">
      <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">
        Technologies Maîtrisées
      </h2>
    </div>

    <div class="flex flex-col space-y-8">
      <!-- First Row: Left Scroll -->
      <div class="relative flex overflow-x-hidden group">
        <div class="animate-marquee flex whitespace-nowrap space-x-8">
           <div 
             v-for="tech in [...row1, ...row1]" 
             :key="tech.name + Math.random()" 
             class="flex items-center space-x-3 bg-slate-800/30 backdrop-blur-sm border border-white/5 py-3 px-6 rounded-xl hover:border-emerald-500/30 transition-colors duration-300"
           >
             <Icon :name="tech.icon" class="w-6 h-6 grayscale group-hover:grayscale-0 transition-all duration-300" />
             <span class="text-slate-300 font-medium">{{ tech.name }}</span>
           </div>
        </div>
        <div class="absolute top-0 animate-marquee2 flex whitespace-nowrap space-x-8">
           <div 
             v-for="tech in [...row1, ...row1]" 
             :key="tech.name + 'duplicate' + Math.random()" 
             class="flex items-center space-x-3 bg-slate-800/30 backdrop-blur-sm border border-white/5 py-3 px-6 rounded-xl hover:border-emerald-500/30 transition-colors duration-300"
           >
             <Icon :name="tech.icon" class="w-6 h-6 grayscale group-hover:grayscale-0 transition-all duration-300" />
             <span class="text-slate-300 font-medium">{{ tech.name }}</span>
           </div>
        </div>
      </div>

      <!-- Second Row: Right Scroll -->
       <div class="relative flex overflow-x-hidden group">
        <div class="animate-marquee-reverse flex whitespace-nowrap space-x-8">
           <div 
             v-for="tech in [...row2, ...row2]" 
             :key="tech.name + Math.random()" 
             class="flex items-center space-x-3 bg-slate-800/30 backdrop-blur-sm border border-white/5 py-3 px-6 rounded-xl hover:border-emerald-500/30 transition-colors duration-300"
           >
             <Icon :name="tech.icon" class="w-6 h-6 grayscale group-hover:grayscale-0 transition-all duration-300" />
             <span class="text-slate-300 font-medium">{{ tech.name }}</span>
           </div>
        </div>
        <div class="absolute top-0 animate-marquee-reverse2 flex whitespace-nowrap space-x-8">
           <div 
             v-for="tech in [...row2, ...row2]" 
             :key="tech.name + 'duplicate' + Math.random()" 
             class="flex items-center space-x-3 bg-slate-800/30 backdrop-blur-sm border border-white/5 py-3 px-6 rounded-xl hover:border-emerald-500/30 transition-colors duration-300"
           >
             <Icon :name="tech.icon" class="w-6 h-6 grayscale group-hover:grayscale-0 transition-all duration-300" />
             <span class="text-slate-300 font-medium">{{ tech.name }}</span>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-marquee {
  animation: marquee 35s linear infinite;
}
.animate-marquee2 {
  animation: marquee2 35s linear infinite;
}
.animate-marquee-reverse {
  animation: marquee-reverse 35s linear infinite;
}
.animate-marquee-reverse2 {
  animation: marquee-reverse2 35s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}
@keyframes marquee2 {
  0% { transform: translateX(100%); }
  100% { transform: translateX(0%); }
}

/* Reverse */
@keyframes marquee-reverse {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0%); }
}
@keyframes marquee-reverse2 {
  0% { transform: translateX(0%); }
  100% { transform: translateX(100%); }
}
</style>
