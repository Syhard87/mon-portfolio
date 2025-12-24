<script setup lang="ts">
import gsap from 'gsap'

interface Props {
  title: string
  description: string
  tags: string[]
  color?: string
  badge?: string
  image?: string // For fallback if not using Tres
}

const props = withDefaults(defineProps<Props>(), {
  color: 'emerald'
})

const card = ref<HTMLElement | null>(null)
const mouseX = ref(0)
const mouseY = ref(0)

const { elementX, elementY, isOutside } = useMouseInElement(card)

watch([elementX, elementY], () => {
    if (!card.value) return
    mouseX.value = elementX.value
    mouseY.value = elementY.value
})

const glowStyle = computed(() => {
    return {
        background: `radial-gradient(600px circle at ${mouseX.value}px ${mouseY.value}px, rgba(255,255,255,0.06), transparent 40%)`
    }
})

</script>

<template>
  <div 
    ref="card"
    class="group relative h-full rounded-2xl bg-slate-800/40 border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10"
  >
    <!-- Glow Effect -->
    <div 
        class="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        :style="glowStyle"
    ></div>

    <div class="relative p-8 h-full flex flex-col z-10">
        <!-- Header -->
        <div class="flex justify-between items-start mb-4">
            <div>
                 <!-- Dynamic Badge -->
                 <span v-if="badge" class="mb-3 inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-amber-500/10 text-amber-300 border border-amber-500/20 backdrop-blur-md">
                    {{ badge }}
                </span>
                <h3 class="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{{ title }}</h3>
            </div>
            <div class="p-2 rounded-full bg-slate-700/50 group-hover:bg-emerald-500/20 transition-colors">
                <Icon name="heroicons:arrow-up-right-20-solid" class="w-5 h-5 text-slate-400 group-hover:text-emerald-400" />
            </div>
        </div>

        <p class="text-slate-400 mb-6 flex-grow leading-relaxed">
            {{ description }}
        </p>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mt-auto">
            <span 
                v-for="tag in tags" 
                :key="tag"
                class="px-3 py-1 text-xs font-medium rounded-md border backdrop-blur-md transition-colors"
                :class="[
                   tag.includes('Vue') || tag.includes('Nuxt') ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300' :
                   tag.includes('React') ? 'bg-blue-500/10 border-blue-500/20 text-blue-300' :
                   'bg-slate-700/30 border-slate-600/30 text-slate-300'
                ]"
            >
                {{ tag }}
            </span>
        </div>
    </div>
  </div>
</template>
