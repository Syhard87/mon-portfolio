<script setup lang="ts">
import type { ContentCollectionItem } from '@nuxt/content'

// Define the schema type
interface Project extends ContentCollectionItem {
  title: string
  description: string
  image: string
  date: string
  tags: string[]
}

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

const project = computed(() => page.value as Project | null)

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page non trouvée' })
}

useSeoMeta({
  title: project.value.title,
  ogTitle: project.value.title,
  description: project.value.description,
  ogDescription: project.value.description,
  ogImage: project.value.image,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div v-if="project" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
      <!-- Contenu Principal -->
      <article class="lg:col-span-3 prose dark:prose-invert max-w-none">
        
        <header class="mb-8 not-prose">
          <h1 class="text-4xl font-bold mb-4">{{ project.title }}</h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-6">{{ project.description }}</p>
          
          <img 
            v-if="project.image" 
            :src="project.image" 
            :alt="project.title"
            class="w-full h-auto rounded-xl shadow-lg mb-8"
          />

          <div class="flex flex-wrap gap-2 mb-8" v-if="project.tags">
            <span v-for="tag in project.tags" :key="tag" class="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">
              {{ tag }}
            </span>
          </div>
        </header>

        <ContentRenderer :value="project" />
      </article>

      <!-- Sidebar / Table des matières -->
      <aside class="hidden lg:block lg:col-span-1">
        <div class="sticky top-8">
          <div class="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6">
            <h2 class="text-lg font-bold mb-4">Dans cette page</h2>
            <nav v-if="project.body?.toc?.links?.length">
              <ul class="space-y-2 text-sm">
                <li v-for="link in project.body.toc.links" :key="link.id">
                  <a 
                    :href="`#${link.id}`" 
                    class="block text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                  >
                    {{ link.text }}
                  </a>
                  <ul v-if="link.children" class="pl-4 mt-2 space-y-2 border-l border-gray-200 dark:border-gray-800">
                    <li v-for="child in link.children" :key="child.id">
                      <a 
                        :href="`#${child.id}`"
                        class="block text-gray-500 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                      >
                        {{ child.text }}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
