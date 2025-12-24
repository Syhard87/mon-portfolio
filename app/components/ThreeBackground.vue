<script setup lang="ts">
import * as THREE from 'three'
import { useWindowSize, useMouse } from '@vueuse/core'

const container = ref<HTMLElement | null>(null)
const { width, height } = useWindowSize()
const { x, y } = useMouse()

onMounted(() => {
  if (!container.value) return

  // Scene setup
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, width.value / height.value, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  
  renderer.setSize(width.value, height.value)
  container.value.appendChild(renderer.domElement)

  // Particles
  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = 700 // Sobriety check: not too many
  
  const posArray = new Float32Array(particlesCount * 3)
  
  for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 15 // Spread
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
  
  const material = new THREE.PointsMaterial({
    size: 0.02,
    color: 0x10b981, // Emerald-500 equivalent
    transparent: true,
    opacity: 0.4,
  })
  
  const particlesMesh = new THREE.Points(particlesGeometry, material)
  scene.add(particlesMesh)
  
  camera.position.z = 3

  // Mouse interaction target
  let mouseX = 0
  let mouseY = 0

  // Animation Loop
  const animate = () => {
    requestAnimationFrame(animate)

    // Gentle rotation
    particlesMesh.rotation.y += 0.001
    particlesMesh.rotation.x += 0.0005

    // Mouse reaction (smooth)
    mouseX = (x.value / width.value) * 2 - 1
    mouseY = -(y.value / height.value) * 2 + 1
    
    particlesMesh.rotation.x += mouseY * 0.0008
    particlesMesh.rotation.y += mouseX * 0.0008

    renderer.render(scene, camera)
  }

  animate()

  // Resize handler
  watch([width, height], () => {
    camera.aspect = width.value / height.value
    camera.updateProjectionMatrix()
    renderer.setSize(width.value, height.value)
  })
})
</script>

<template>
  <div ref="container" class="absolute inset-0 -z-10 overflow-hidden opacity-60 pointer-events-none" />
</template>
