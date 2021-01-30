<template>
  <div class="w-full lg:h-article bg-secondary">
    <div class="container mx-auto">
      <div class="p-4">
        <Title text="Experience" classes="text-surface lg:pb-3 justify-center flex lg:justify-start block" />
        <div class="flex pt-6 flex-col lg:flex-row">
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

const listClasses = () => {
  return 'text-surface text-2xl lg:text-base w-full pb-5 lg:pb-0 lg:flex-1'
}

const listClassesText = () => {
  return 'flex justify-center lg:block lg:justify-start'
}

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
        classes: listClasses(),
        classesText: listClassesText()
      },
      concept: {
        title: 'Concept',
        items: [
          'Figma',
          'Inkscape',
          'Krita'
        ],
        classes: listClasses(),
        classesText: listClassesText()
      },
      frontend: {
        title: 'Frontend',
        items: [
          'Javascript',
          'Tailwind CSS',
          'HTML 5',
          'CSS 3',
          'Nuxtjs',
          'Phaser'
        ],
        classes: listClasses(),
        classesText: listClassesText()
      },
      backend: {
        title: 'Backend',
        items: [
          'Javascript',
          'NodeJS',
          'ExpressJS',
          'Socket.IO'
        ],
        classes: listClasses(),
        classesText: listClassesText()
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
        classes: listClasses(),
        classesText: listClassesText()
      },
      tools: {
        title: 'Tools',
        items: [
          'Notion',
          'VS Code',
          'Github'
        ],
        classes: listClasses(),
        classesText: listClassesText()
      },
      methods: {
        title: 'Methods',
        items: [
          'Scrum',
          'XP'
        ],
        classes: listClasses(),
        classesText: listClassesText()
      }
    }
  }
}
</script>

<style>
</style>
