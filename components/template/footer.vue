<template>
  <div :class="classes" class="flex justify-center py-4 px-5 bg-quaternary">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
