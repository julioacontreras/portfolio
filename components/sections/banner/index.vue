<template>
  <div class="flex">
    <div class="flex flex-1 ">
      <Info :items="items" />
    </div>
    <div class="flex flex-1">
      <Img :img="img" />
    </div>
  </div>
</template>

<script>
import Info from '~/components/media/info'
import Img from '~/components/media/image'

export default {
  components: {
    Info,
    Img
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    img: {
      type: String,
      default: ''
    }
  }
}
</script>
