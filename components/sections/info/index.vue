<template>
  <div>
    <div v-for="(item, idx) of items" :key="idx">
      <div
        :class="[
          {'text-xl': !item.size},
          {'text-3xl': item.size === 'xl'},
          {'text-2xl': item.size === 'l'},
          {'text-base': item.size === 's'},
          {'text-sm': item.size === 'xs'}
        ]"
        class="pb-2"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
