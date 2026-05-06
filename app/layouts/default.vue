<script setup lang="ts">
import { profile } from '~/data/profile'

const route = useRoute()

const links = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
]
</script>

<template>
  <div class="flex min-h-screen flex-col text-slate-100">
    <header class="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
      <UContainer class="flex h-16 items-center justify-between gap-6">
        <NuxtLink to="/" class="text-sm font-semibold tracking-wide text-slate-50">
          {{ profile.name }}
        </NuxtLink>

        <nav class="flex items-center gap-1">
          <UButton
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            :label="link.label"
            color="neutral"
            variant="ghost"
            size="sm"
            :class="(link.to === '/' ? route.path === '/' : route.path.startsWith(link.to)) ? 'bg-slate-800 text-slate-50' : 'text-slate-400 hover:text-slate-50'"
          />
          <UButton
            :to="profile.resumePath"
            label="Resume"
            icon="i-lucide-file-text"
            color="primary"
            variant="soft"
            size="sm"
            target="_blank"
            class="hidden sm:inline-flex"
          />
        </nav>
      </UContainer>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="shrink-0 border-t border-slate-800">
      <UContainer class="flex min-h-20 flex-col justify-center gap-3 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>~ {{ profile.name }} ~</p>
        <div class="flex flex-wrap gap-x-4 gap-y-2">
          <NuxtLink to="/projects" class="hover:text-slate-50">Projects</NuxtLink>
          <NuxtLink to="/about" class="hover:text-slate-50">About</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-slate-50">Contact</NuxtLink>
        </div>
      </UContainer>
    </footer>
  </div>
</template>
