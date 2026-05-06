<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', () =>
  queryCollection('projects').order('date', 'DESC').all()
)

useSeoMeta({
  title: 'Projects',
  description: 'Business systems, fullstack apps, and practical web projects by Mhel Angelo.'
})
</script>

<template>
  <UContainer class="space-y-10 py-16">
    <SectionHeader
      eyebrow="Work"
      title="Projects"
      description="Projects focused on business workflows, maintainable structure, practical UI, deployment, and fullstack problem solving."
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
