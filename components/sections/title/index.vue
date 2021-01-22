<template>
  <div
    :class="[
      {'text-6xl': opt.size === 'xl'},
      {'text-4xl': opt.size === 'l'},
      {'justify-center': opt.alignTexrHrz === 'center'},
      {'font-bold': opt.weight === 'bold'},
      classes
    ]"
    class="w-full flex "
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: 'text-primary'
    },
    text: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => { return {} }
    }
  },
  computed: {
    opt () {
      const opt = {}
      opt.size = this.options.size === undefined ? 'xl' : this.options.size
      opt.alignTexrHrz = this.options.alignTexrHrz === undefined ? 'left' : this.options.alignTexrHrz
      opt.weight = this.options.weight === undefined ? 'bold' : this.options.weight
      return opt
    }
  }
}
</script>
