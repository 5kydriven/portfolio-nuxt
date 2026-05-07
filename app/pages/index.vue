<script setup lang="ts">
import { profile } from '~/data/profile'

const { data: projects } = await useAsyncData('home-projects', () =>
  queryCollection('projects')
    .order('date', 'DESC')
    .all()
)

const featuredProject = computed(() =>
  projects.value?.find((project) => project.path === '/projects/eons-system')
)

const otherProjects = computed(() =>
  (projects.value ?? [])
    .filter((project) => project.path !== '/projects/eons-system')
    .slice(0, 3)
)

useSeoMeta({
  title: profile.name,
  description: profile.seoDescription
})
</script>

<template>
  <div>
    <section class="motion-fade-up border-b border-slate-800">
      <UContainer class="grid min-h-[calc(100svh-4rem)] gap-8 py-10 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-16">
        <div class="space-y-7">
          <div>
            <p class="text-sm font-medium text-orange-400">{{ profile.hero.greeting }}</p>
            <p class="mt-1 text-sm text-slate-500">{{ profile.workLocation }}</p>
          </div>

          <div class="max-w-3xl space-y-5">
            <h1 class="text-3xl font-semibold leading-tight tracking-normal text-slate-50 sm:text-5xl lg:text-6xl">
              {{ profile.hero.title }}
            </h1>
            <p class="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {{ profile.hero.intro }}
            </p>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row">
            <UButton :to="`mailto:${profile.email}`" label="Reach out" icon="i-lucide-send" size="lg" />
            <UButton to="/projects" label="View work" icon="i-lucide-folder-kanban" color="primary" variant="outline" size="lg" />
          </div>

          <div class="grid gap-2 sm:grid-cols-2">
            <div
              v-for="point in profile.proofPoints"
              :key="point.label"
              class="motion-card flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/55 px-4 py-3"
            >
              <UIcon :name="point.icon" class="size-5 shrink-0 text-orange-400" />
              <span class="text-sm font-medium text-slate-200">{{ point.label }}</span>
            </div>
          </div>
        </div>

        <div class="motion-card rounded-lg border border-slate-800 bg-slate-900/55 p-5 sm:p-6">
          <div class="space-y-4">
            <p class="text-sm font-medium text-orange-400">{{ profile.architecture.title }}</p>
            <p class="text-xl font-semibold leading-8 text-slate-50">
              Planned clearly, built practically, and ready to improve.
            </p>
            <p class="leading-7 text-slate-400">
              {{ profile.architecture.description }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="motion-fade-up motion-delay-1 border-b border-slate-800 py-16">
      <UContainer class="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div class="space-y-6">
          <SectionHeader
            eyebrow="About"
            :title="profile.homeAbout.title"
            :description="profile.homeAbout.description"
          />
          <UButton to="/about" label="More about me" color="primary" variant="soft" icon="i-lucide-arrow-right" trailing />
        </div>

        <img
          :src="profile.aboutImage"
          :alt="`${profile.name} profile`"
          class="motion-framed-image aspect-4/3 w-full rounded-lg border border-slate-800 object-cover"
        >
      </UContainer>
    </section>

    <section class="motion-fade-up motion-delay-1 border-b border-slate-800 py-16">
      <UContainer class="space-y-8">
        <SectionHeader
          eyebrow="Skills"
          title="Stack and engineering focus"
          description="Grouped by the kind of software I can help build: websites, web apps, mobile apps, backend features, and client tools."
        />

        <div class="grid gap-4 md:grid-cols-2">
          <UCard
            v-for="group in profile.skillGroups"
            :key="group.title"
            :ui="{ root: 'motion-card rounded-lg border border-slate-800 bg-slate-900/55 shadow-none ring-0', body: 'space-y-5 p-5 sm:p-6' }"
          >
            <div class="flex items-center gap-3">
              <div class="flex size-10 items-center justify-center rounded-lg bg-slate-800">
                <UIcon :name="group.icon" class="size-5 text-orange-400" />
              </div>
              <h2 class="text-lg font-semibold text-slate-50">{{ group.title }}</h2>
            </div>

            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="item in group.items"
                :key="item"
                :label="item"
                color="neutral"
                variant="outline"
              />
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <section v-if="featuredProject" class="motion-fade-up motion-delay-2 border-b border-slate-800 py-16">
      <UContainer class="space-y-8">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Primary case study"
            :title="featuredProject.title"
            :description="featuredProject.description"
          />
          <UButton to="/projects/eons-system" label="View case study" color="primary" variant="soft" icon="i-lucide-arrow-up-right" trailing />
        </div>

        <div class="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <UCard :ui="{ root: 'motion-card rounded-lg border border-slate-800 bg-slate-900/55 shadow-none ring-0', body: 'space-y-5 p-5 sm:p-6' }">
            <div>
              <p class="text-sm font-medium text-slate-500">Build approach</p>
              <p class="mt-2 leading-7 text-slate-300">
                {{ featuredProject.architecture }}
              </p>
            </div>
            <div class="grid gap-3">
              <div
                v-for="item in featuredProject.highlights"
                :key="item"
                class="motion-card flex gap-3 rounded-lg border border-slate-800 bg-slate-950/50 p-3"
              >
                <UIcon name="i-lucide-check-circle-2" class="mt-0.5 size-5 shrink-0 text-orange-400" />
                <span class="text-sm leading-6 text-slate-300">{{ item }}</span>
              </div>
            </div>
          </UCard>

          <div class="grid gap-4 sm:grid-cols-2">
            <img src="/eons-dashboard.png" alt="EON's dashboard" class="motion-framed-image aspect-[16/10] rounded-lg border border-slate-800 object-cover">
            <img src="/eons-pos.png" alt="EON's POS" class="motion-framed-image aspect-[16/10] rounded-lg border border-slate-800 object-cover">
          </div>
        </div>
      </UContainer>
    </section>

    <section class="motion-fade-up motion-delay-2 py-16">
      <UContainer class="space-y-8">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="More work"
            title="Other projects"
            description="Projects that show web development, backend practice, deployment, and interface work across different needs."
          />
          <UButton to="/projects" label="All projects" color="primary" variant="ghost" icon="i-lucide-arrow-right" trailing />
        </div>

        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            v-for="project in otherProjects"
            :key="project.path"
            :project="project"
          />
        </div>
      </UContainer>
    </section>

    <section class="motion-fade-up motion-delay-3 border-t border-slate-800 py-16 text-center">
      <UContainer class="space-y-5">
        <h2 class="text-3xl font-semibold text-slate-50">
          Build custom software that fits your needs
        </h2>
        <p class="mx-auto max-w-xl leading-7 text-slate-400">
          Reach out for websites, web apps, mobile apps, admin tools, dashboards, backend features, or custom software projects.
        </p>
        <div class="flex justify-center gap-3">
          <UButton
            v-for="social in profile.primarySocials"
            :key="social.label"
            :to="social.to"
            :target="social.to === '#' ? undefined : '_blank'"
            :icon="social.icon"
            color="neutral"
            variant="outline"
            :aria-label="social.label"
          />
        </div>
        <UButton :to="`mailto:${profile.email}`" label="Reach out" icon="i-lucide-send" />
      </UContainer>
    </section>
  </div>
</template>
