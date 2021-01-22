<template>
  <div
    :class="[
      {'h-4': size === 1},
      {'h-8': size === 2},
      {'h-16': size === 3}
    ]"
    class="w-full"
  />
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 1
    }
  }
}
</script>
