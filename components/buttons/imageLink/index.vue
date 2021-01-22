<template>
  <div>
    <nuxt-link :to="url">
      <img :src="img" class="w-full bg-cover">
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: '/'
    }
  }
}
</script>
