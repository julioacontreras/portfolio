<template>
  <div>
    <img :src="img">
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ''
    }
  }
}
</script>
