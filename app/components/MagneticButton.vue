<script setup lang="ts">
import gsap from 'gsap'

const button = ref<HTMLElement | null>(null)
const text = ref<HTMLElement | null>(null)

const { x, y } = useMouseInElement(button)
const width = ref(0)
const height = ref(0)

onMounted(() => {
  if (button.value) {
    width.value = button.value.offsetWidth
    height.value = button.value.getBoundingClientRect().height
  }
})

watch([x, y], () => {
    if (!button.value || !text.value) return
    
    // Check if mouse is near/inside
    const isHovering = 
        x.value > -20 && 
        x.value < width.value + 20 &&
        y.value > -20 && 
        y.value < height.value + 20

    if (isHovering) {
        const xTo = gsap.quickTo(button.value, "x", { duration: 0.8, ease: "power3.out" })
        const yTo = gsap.quickTo(button.value, "y", { duration: 0.8, ease: "power3.out" })
        
        const xToText = gsap.quickTo(text.value, "x", { duration: 0.4, ease: "power3.out" })
        const yToText = gsap.quickTo(text.value, "y", { duration: 0.4, ease: "power3.out" })

        // Move button towards mouse (magnetic intensity)
        const xOffset = (x.value - width.value / 2) * 0.3
        const yOffset = (y.value - height.value / 2) * 0.3

        xTo(xOffset)
        yTo(yOffset)
        
        xToText(xOffset * 0.1) // Subtle parallax for text
        yToText(yOffset * 0.1)
    } else {
        gsap.to(button.value, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)' })
        gsap.to(text.value, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)' })
    }
})
</script>

<template>
  <button ref="button" class="relative group cursor-pointer inline-block">
    <div ref="text" class="relative z-10">
      <slot></slot>
    </div>
  </button>
</template>
