<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', () =>
  queryCollection('projects').order('date', 'DESC').all()
)

useSeoMeta({
  title: 'Projects',
  description: 'Custom software, web apps, mobile apps, and practical development projects by Mhel Angelo.'
})
</script>

<template>
  <UContainer class="motion-fade-up space-y-10 py-16">
    <SectionHeader
      eyebrow="Work"
      title="Projects"
      description="Projects focused on turning requirements into practical websites, apps, dashboards, and backend-powered tools."
    />

    <div class="grid gap-5 md:grid-cols-2">
      <ProjectCard
        v-for="project in projects"
        :key="project.path"
        :project="project"
      />
    </div>
  </UContainer>
</template>
