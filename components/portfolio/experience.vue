<template>
  <div class="w-full lg:h-article bg-secondary">
    <div class="container mx-auto">
      <div class="p-3 lg:p-6">
        <Title text="Experience" classes="text-surface lg:pb-3 justify-center flex lg:justify-start block" />
        <div class="flex pt-6 lg:pl-0 lg:pt-0 flex-col lg:flex-row">
          <List v-bind="inspiration" />
          <List v-bind="concept" />
          <List v-bind="frontend" />
          <List v-bind="backend" />
          <List v-bind="system" />
          <List v-bind="tools" />
          <List v-bind="methods" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '~/components/sections/title'
import List from '~/components/sections/list'
export default {
  components: {
    Title,
    List
  },
  data () {
    return {
      inspiration: {
        title: 'Idea & Inspiration',
        items: [
          'Brainstorm',
          'Diagram',
          'Pinterest',
          'Dribble'
        ],
        classes: 'text-surface w-full pb-5 lg:pb-0 lg:flex-1',
        classesText: 'flex justify-center lg:block lg:justify-start'
      },
      concept: {
        title: 'Concept',
        items: [
          'Figma',
          'Inkscape',
          'Krita'
        ],
        classes: 'text-surface w-full pb-5 lg:pb-0 lg:flex-1',
        classesText: 'flex justify-center lg:block lg:justify-start'
      },
      frontend: {
        title: 'Frontend',
        items: [
          'Javascript',
          'Tailwind CSS',
          'HTML 5',
          'CSS 3',
          'Nuxtjs'
        ],
        classes: 'text-surface w-full pb-5 lg:pb-0 lg:flex-1',
        classesText: 'flex justify-center lg:block lg:justify-start'
      },
      backend: {
        title: 'Backend',
        items: [
          'Javascript',
          'NodeJS',
          'ExpressJS',
          'Socket.IO'
        ],
        classes: 'text-surface w-full pb-5 lg:pb-0 lg:flex-1',
        classesText: 'flex justify-center lg:block lg:justify-start'
      },
      system: {
        title: 'System & CI',
        items: [
          'Centos',
          'NGNIX',
          'Jenkins',
          'Netlify',
          'Slack'
        ],
        classes: 'text-surface w-full pb-5 lg:pb-0 lg:flex-1',
        classesText: 'flex justify-center lg:block lg:justify-start'
      },
      tools: {
        title: 'Tools',
        items: [
          'Notion',
          'VS Code',
          'Github'
        ],
        classes: 'text-surface w-full pb-5 lg:pb-0 lg:flex-1',
        classesText: 'flex justify-center lg:block lg:justify-start'
      },
      methods: {
        title: 'Methods',
        items: [
          'Scrum',
          'XP'
        ],
        classes: 'text-surface w-full pb-5 lg:pb-0 lg:flex-1',
        classesText: 'flex justify-center lg:block lg:justify-start'
      }
    }
  }
}
</script>

<style>
</style>
