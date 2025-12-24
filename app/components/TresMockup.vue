<script setup lang="ts">
import { BasicShadowMap, SRGBColorSpace, NoToneMapping, TextureLoader } from 'three'

interface Props {
  image: string
}

const props = defineProps<Props>()

const { onLoop } = useRenderLoop()
const modelRef = shallowRef()
const texture = ref()

onMounted(() => {
    const loader = new TextureLoader()
    loader.load(props.image, (tex) => {
        tex.colorSpace = SRGBColorSpace
        texture.value = tex
    }, undefined, (err) => {
        console.error('Error loading texture:', err)
    })
})

onLoop(({ elapsed }) => {
  if (modelRef.value) {
    modelRef.value.position.y = Math.sin(elapsed * 0.5) * 0.2 // Gentle float
    modelRef.value.rotation.y = Math.sin(elapsed * 0.3) * 0.1 // Gentle sway
  }
})
</script>

<template>
  <TresCanvas
    clear-color="#0f172a00"
    :alpha="true"
    preset="realistic"
    power-preference="high-performance"
    :shadows="true"
    shadow-map-type="BasicShadowMap"
    :output-encoding="SRGBColorSpace"
    :tone-mapping="NoToneMapping"
  >
    <TresPerspectiveCamera :position="[0, 0, 5]" :fov="45" :look-at="[0, 0, 0]" />
    
    <TresAmbientLight :intensity="1.5" />
    <TresDirectionalLight :position="[2, 5, 2]" :intensity="2" :cast-shadow="true" />

    <!-- Browser Window/Mockup Plane -->
    <TresMesh ref="modelRef" :position="[0, 0, 0]">
      <TresPlaneGeometry :args="[4, 2.5]" />
      <TresMeshStandardMaterial v-if="texture" :map="texture" :transparent="true" />
      <TresMeshStandardMaterial v-else :color="0x10b981" />
    </TresMesh>
  </TresCanvas>
</template>
