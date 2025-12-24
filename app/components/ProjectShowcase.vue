<script setup lang="ts">
import gsap from 'gsap'

interface Props {
  title: string
  description: string
  techStack: string[]
  image?: string // Optional image URL
  color?: string
  badge?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'emerald',
  image: 'https://via.placeholder.com/800x500/1e293b/10b981?text=Project+Preview'
})

const card = ref<HTMLElement | null>(null)
const mockup = ref<HTMLElement | null>(null)

const { elementX, elementY, elementHeight, elementWidth, isOutside } = useMouseInElement(card)

// 3D Tilt Logic
watch([elementX, elementY, isOutside], () => {
    if (isOutside.value || !mockup.value) {
        gsap.to(mockup.value, { 
            rotateX: 0, 
            rotateY: 0, 
            duration: 0.5, 
            ease: 'power2.out' 
        })
        return
    }

    const rX = (elementY.value / elementHeight.value - 0.5) * -20 // -10 to 10 deg
    const rY = (elementX.value / elementWidth.value - 0.5) * 20   // -10 to 10 deg

    gsap.to(mockup.value, {
        rotateX: rX,
        rotateY: rY,
        duration: 0.1, // Snappy response
        overwrite: 'auto'
    })
})

// Floating Animation
onMounted(() => {
    if (mockup.value) {
        gsap.to(mockup.value, {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        })
    }
})

// Color mapping for border glow
const glowColor = computed(() => {
    switch (props.color) {
        case 'indigo': return 'group-hover:border-indigo-500/50 shadow-indigo-500/20'
        case 'purple': return 'group-hover:border-purple-500/50 shadow-purple-500/20'
        case 'blue': return 'group-hover:border-blue-500/50 shadow-blue-500/20'
        default: return 'group-hover:border-emerald-500/50 shadow-emerald-500/20'
    }
})
</script>

<template>
  <div 
    ref="card"
    class="group relative p-8 rounded-3xl bg-slate-800/40 backdrop-blur-xl border border-white/5 transition-all duration-500 hover:bg-slate-800/60 perspective-1000"
    :class="[glowColor, 'hover:shadow-2xl hover:shadow-' + props.color + '-500/10']"
  >
    <!-- Background Gradient Blob -->
    <div class="absolute inset-0 -z-10 rounded-3xl overflow-hidden">
         <div 
            class="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
            :class="`bg-${props.color}-500`"
         ></div>
    </div>

    <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Text Content -->
        <div class="flex-1 space-y-6">
            <div class="flex items-start justify-between">
                <div>
                    <h3 class="text-3xl font-bold text-white mb-2">{{ title }}</h3>
                    <div v-if="badge" class="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide">
                        {{ badge }}
                    </div>
                </div>
            </div>
            
            <p class="text-slate-400 leading-relaxed text-lg">{{ description }}</p>

            <div class="flex flex-wrap gap-2">
                <span 
                    v-for="tech in techStack" 
                    :key="tech"
                    class="px-3 py-1 rounded-md bg-slate-700/50 text-slate-300 text-sm border border-white/5"
                >
                    {{ tech }}
                </span>
            </div>

            <div class="pt-4 flex gap-4">
                 <MagneticButton>
                    <button class="px-6 py-3 rounded-lg bg-slate-100 text-slate-900 font-semibold hover:bg-white transition-colors">
                        Voir le site
                    </button>
                 </MagneticButton>
                 <MagneticButton>
                    <button class="px-6 py-3 rounded-lg border border-slate-600 text-slate-300 font-medium hover:border-slate-400 hover:text-white transition-colors">
                        Code Source
                    </button>
                 </MagneticButton>
            </div>
        </div>

        <!-- 3D Mockup -->
        <div class="flex-1 w-full max-w-md perspective-mockup">
            <div 
                ref="mockup"
                class="relative transform-style-3d will-change-transform"
            >
                <!-- MacBook-style Frame -->
                <div class="relative bg-[#1a1a1a] rounded-t-xl border-t border-l border-r border-[#333] pt-4 px-1 pb-1 shadow-2xl">
                     <!-- Camera/Sensor Bar -->
                     <div class="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-black/50"></div>
                     
                     <!-- Screen Content -->
                     <div class="relative rounded-lg overflow-hidden aspect-video bg-slate-900 group-hover:brightness-110 transition-all duration-500">
                         <!-- Placeholder/Image -->
                         <img :src="image" :alt="title" class="object-cover w-full h-full" />
                         
                         <!-- Reflection Gradient -->
                         <div class="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none"></div>
                     </div>
                </div>
                <!-- Base -->
                <div class="h-3 bg-[#2a2a2a] rounded-b-lg border-b border-l border-r border-[#333] relative">
                    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[#1a1a1a] rounded-b-md"></div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.perspective-1000 {
    perspective: 1000px;
}
.perspective-mockup {
    perspective: 2000px;
}
.transform-style-3d {
    transform-style: preserve-3d;
}
</style>
