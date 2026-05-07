<script setup lang="ts">
const route = useRoute()
const path = `/projects/${route.params.slug}`

const { data: project } = await useAsyncData(path, () =>
  queryCollection('projects').path(path).first()
)

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

useSeoMeta({
  title: () => project.value?.title ?? 'Project',
  description: () => project.value?.description ?? 'Project writeup'
})
</script>

<template>
  <UContainer v-if="project" class="motion-fade-up py-12 sm:py-16">
    <div class="mx-auto max-w-5xl space-y-10">
      <div class="space-y-7">
        <UButton to="/projects" label="Back to projects" icon="i-lucide-arrow-left" color="primary" variant="ghost" />

        <div class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div class="space-y-5">
            <div class="flex flex-wrap gap-2">
              <UBadge :label="project.projectType || project.role" color="neutral" variant="soft" />
              <UBadge v-if="project.status" :label="project.status" color="primary" variant="soft" />
            </div>
            <h1 class="text-4xl font-semibold tracking-normal text-slate-50 sm:text-5xl">
              {{ project.title }}
            </h1>
            <p class="text-lg leading-8 text-slate-400">
              {{ project.description }}
            </p>
          </div>

          <div class="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div class="motion-card rounded-lg border border-slate-800 bg-slate-900/55 p-4">
              <p class="text-sm text-slate-500">Role</p>
              <p class="mt-1 font-medium text-slate-200">{{ project.role }}</p>
            </div>
            <div v-if="project.timeline" class="motion-card rounded-lg border border-slate-800 bg-slate-900/55 p-4">
              <p class="text-sm text-slate-500">Timeline</p>
              <p class="mt-1 font-medium text-slate-200">{{ project.timeline }}</p>
            </div>
            <div v-if="project.status" class="motion-card rounded-lg border border-slate-800 bg-slate-900/55 p-4">
              <p class="text-sm text-slate-500">Status</p>
              <p class="mt-1 font-medium text-slate-200">{{ project.status }}</p>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="item in project.stack"
            :key="item"
            :label="item"
            color="primary"
            variant="outline"
          />
        </div>

        <div v-if="project.links?.length" class="flex flex-wrap gap-3">
          <UButton
            v-for="link in project.links"
            :key="link.url"
            :to="link.url"
            :label="link.label"
            icon="i-lucide-arrow-up-right"
            trailing
            color="neutral"
            variant="outline"
            target="_blank"
          />
        </div>
      </div>

      <div class="grid gap-5 lg:grid-cols-2">
        <UCard :ui="{ root: 'motion-card rounded-lg border border-slate-800 bg-slate-900/55 shadow-none ring-0', body: 'space-y-3 p-5 sm:p-6' }">
          <p class="text-sm font-medium text-orange-400">Problem</p>
          <p class="leading-7 text-slate-300">{{ project.problem }}</p>
        </UCard>

        <UCard :ui="{ root: 'motion-card rounded-lg border border-slate-800 bg-slate-900/55 shadow-none ring-0', body: 'space-y-3 p-5 sm:p-6' }">
          <p class="text-sm font-medium text-orange-400">Build approach</p>
          <p class="leading-7 text-slate-300">{{ project.architecture }}</p>
        </UCard>
      </div>

      <div class="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <UCard :ui="{ root: 'motion-card rounded-lg border border-slate-800 bg-slate-900/55 shadow-none ring-0', body: 'space-y-5 p-5 sm:p-6' }">
          <div>
            <p class="text-sm font-medium text-orange-400">Key features</p>
            <h2 class="mt-2 text-2xl font-semibold text-slate-50">What this project shows</h2>
          </div>
          <div class="grid gap-3">
            <div
              v-for="item in project.features"
              :key="item"
              class="flex gap-3 border-t border-slate-800 pt-3 first:border-t-0 first:pt-0"
            >
              <UIcon name="i-lucide-check-circle-2" class="mt-0.5 size-5 shrink-0 text-orange-400" />
              <span class="leading-7 text-slate-300">{{ item }}</span>
            </div>
          </div>
        </UCard>

        <div class="space-y-5">
          <UCard :ui="{ root: 'motion-card rounded-lg border border-slate-800 bg-slate-900/55 shadow-none ring-0', body: 'space-y-3 p-5 sm:p-6' }">
            <p class="text-sm font-medium text-orange-400">What I learned</p>
            <p class="leading-7 text-slate-300">{{ project.learned }}</p>
          </UCard>

          <UCard :ui="{ root: 'motion-card rounded-lg border border-slate-800 bg-slate-900/55 shadow-none ring-0', body: 'space-y-3 p-5 sm:p-6' }">
            <p class="text-sm font-medium text-orange-400">Outcome</p>
            <p class="leading-7 text-slate-300">{{ project.outcome }}</p>
          </UCard>
        </div>
      </div>

      <section v-if="project.gallery?.length" class="motion-fade-up motion-delay-1 space-y-5">
        <SectionHeader
          eyebrow="Screenshots"
          title="Screens and features"
          description="Screenshots of the main pages, features, and user actions."
        />

        <div class="grid gap-4 md:grid-cols-2">
          <figure
            v-for="(image, index) in project.gallery"
            :key="image"
            class="motion-card overflow-hidden rounded-lg border border-slate-800 bg-slate-900/55"
          >
            <img
              :src="image"
              :alt="`${project.title} screenshot ${index + 1}`"
              class="motion-framed-image aspect-[16/10] w-full object-cover"
            >
            <figcaption class="border-t border-slate-800 px-4 py-3 text-sm text-slate-500">
              Screenshot {{ index + 1 }}
            </figcaption>
          </figure>
        </div>
      </section>

      <section class="motion-fade-up motion-delay-2 space-y-5">
        <SectionHeader
          eyebrow="Notes"
          title="Additional writeup"
          description="Extra context about the project, what it includes, and what it helped me practice."
        />
        <div class="motion-card prose prose-invert max-w-none rounded-lg border border-slate-800 bg-slate-900/55 p-5 sm:p-6">
          <ContentRenderer :value="project" />
        </div>
      </section>
    </div>
  </UContainer>
</template>
