<script setup lang="ts">
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const { y } = useWindowScroll()
const isDark = useDark()
const toggleDark = useToggle(isDark)

// Update scrolled state based on window scroll
watch(y, (newY) => {
  isScrolled.value = newY > 20
})

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <nav
    class="fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent"
    :class="[
      isScrolled 
        ? 'bg-slate-900/80 backdrop-blur-lg border-white/10 shadow-lg' 
        : 'bg-transparent'
    ]"
  >
    <div class="container mx-auto px-6 h-20 flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="text-2xl font-bold font-sans tracking-tight group">
        <span class="text-emerald-500 group-hover:text-emerald-400 transition-colors">Syhar</span>
        <span class="text-slate-100">.dev</span>
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.name"
          :to="link.href"
          class="text-slate-300 hover:text-emerald-400 font-medium transition-colors duration-200"
        >
          {{ link.name }}
        </NuxtLink>
        
        <!-- Theme Toggle -->
        <button
          @click="toggleDark()"
          class="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700 text-emerald-500 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          <Icon v-if="isDark" name="heroicons:moon-20-solid" class="w-5 h-5" />
          <Icon v-else name="heroicons:sun-20-solid" class="w-5 h-5" />
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="toggleMenu" 
        class="md:hidden p-2 text-slate-300 hover:text-emerald-400 focus:outline-none"
      >
        <span class="sr-only">Open Menu</span>
        <Icon v-if="isMobileMenuOpen" name="heroicons:x-mark-20-solid" class="w-7 h-7" />
        <Icon v-else name="heroicons:bars-3-20-solid" class="w-7 h-7" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-20 left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-white/10"
      >
        <div class="flex flex-col p-6 space-y-4">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.href"
            class="text-lg text-slate-300 hover:text-emerald-400 font-medium"
            @click="isMobileMenuOpen = false"
          >
            {{ link.name }}
          </NuxtLink>
           <button
            @click="toggleDark()"
            class="flex items-center space-x-2 text-slate-300 hover:text-emerald-400"
          >
            <Icon v-if="isDark" name="heroicons:moon-20-solid" class="w-5 h-5" />
            <Icon v-else name="heroicons:sun-20-solid" class="w-5 h-5" />
            <span>{{ isDark ? 'Dark Mode' : 'Light Mode' }}</span>
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>
