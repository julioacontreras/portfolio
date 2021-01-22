<template>
  <div>
    <NuxtLink :to="url">
      {{ title }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
