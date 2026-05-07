<script setup lang="ts">
type Project = {
  path: string
  title: string
  description: string
  role: string
  projectType?: string
  status?: string
  stack: string[]
  date: string
  cover?: string
  highlights?: string[]
}

defineProps<{
  project: Project
}>()
</script>

<template>
  <UCard
    class="motion-fade-up h-full"
    :ui="{
      root: 'motion-card overflow-hidden rounded-lg border border-slate-800 bg-slate-900/55 shadow-none ring-0',
      body: 'p-0 sm:p-0'
    }"
  >
    <div class="flex h-full flex-col">
      <img
        v-if="project.cover"
        :src="project.cover"
        :alt="project.title"
        class="motion-framed-image aspect-[16/10] w-full border-b border-slate-800 object-cover"
      >

      <div class="flex flex-1 flex-col">
        <div class="space-y-5 p-5 sm:p-6">
          <div class="flex flex-wrap items-center gap-2">
            <UBadge :label="project.projectType || project.role" color="neutral" variant="soft" />
            <UBadge v-if="project.status" :label="project.status" color="primary" variant="soft" />
          </div>

          <div class="space-y-2">
            <h2 class="text-xl font-semibold text-slate-50">
              {{ project.title }}
            </h2>
            <p class="line-clamp-3 text-sm leading-6 text-slate-400">
              {{ project.description }}
            </p>
          </div>

          <ul v-if="project.highlights?.length" class="space-y-2 text-sm leading-6 text-slate-400">
            <li
              v-for="item in project.highlights.slice(0, 2)"
              :key="item"
              class="flex gap-2"
            >
              <UIcon name="i-lucide-check" class="mt-1 size-4 shrink-0 text-orange-400" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <div class="mt-auto flex flex-col gap-5 p-5 pt-0 sm:p-6 sm:pt-0">
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="item in project.stack.slice(0, 4)"
              :key="item"
              :label="item"
              color="neutral"
              variant="outline"
            />
          </div>

          <UButton
            :to="project.path"
            label="View project"
            icon="i-lucide-arrow-up-right"
            trailing
            color="primary"
            variant="soft"
            block
          />
        </div>
      </div>
    </div>
  </UCard>
</template>
