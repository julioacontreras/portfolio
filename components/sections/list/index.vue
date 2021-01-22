<template>
  <div :class="classes">
    <div :class="[classesText, classesTitle]">
      {{ title }}
    </div>
    <div v-for="(item, idx) in items" :key="idx" :class="classesText">
      • {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: 'text-primary'
    },
    classesText: {
      type: String,
      default: ''
    },
    classesTitle: {
      type: String,
      default: 'font-bold'
    },
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
