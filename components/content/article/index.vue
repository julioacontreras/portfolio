<template>
  <div>
    <div v-if="loading">
      Loading...
    </div>
    <div v-if="!loading">
      <nuxt-content :class="classes" class="w-full" :document="content" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: 'article'
    },
    content: {
      type: Object,
      default: () => { return {} }
    },
    loading: {
      type: Boolean,
      default: true
    }
  }
}
</script>
