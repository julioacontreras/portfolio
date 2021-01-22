<template>
  <div>
    <div class="relative">
      <Tooltip
        v-if="error && tooltip"
        :title="message"
        class="absolute left-0"
        style="top:-32px;"
      />
    </div>
    <div
      :class="componentClass"
      @mouseover="tooltip = true"
      @mouseleave="tooltip = false"
    >
      <select
        :value="value"
        :class="[
          baseClass,
          inputClass,
          { 'text-light-on': empty },
          { 'border rounded border-error': error }
        ]"
        @input="$emit('input', $event.target.value)"
      >
        <option :class="placeholderClass" value="" disabled selected>
          {{ placeholder }}
        </option>
        <option v-for="(item, idx) in items" :key="idx" :value="item.value">
          {{ item.name }}
        </option>
      </select>
      <div :class="iconClass">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
      </div>
    </div>
  </div>
</template>

<script>
import Tooltip from '~/components/surface/tooltip'

export default {
  components: {
    Tooltip
  },
  props: {
    componentClass: {
      type: String,
      default: 'w-64'
    },
    baseClass: {
      type: String,
      default: 'rounded  py-3 h-12 leading-tight focus:outline-none'
    },
    inputClass: {
      type: String,
      default: 'h-11 block appearance-none w-full p-2 pr-8'
    },
    optionClass: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String,
      default: 'pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'
    },
    field: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Seleccione una opción'
    },
    placeholderClass: {
      type: String,
      default: 'text-ternary'
    },
    items: {
      type: Array,
      default: () => { return [] }
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      empty: true,
      selected: {},
      tooltip: false,
      error: false,
      message: ''
    }
  },
  watch: {
    value (value) {
      this.empty = true
      if (value) {
        this.empty = false
      }

      let item = {}
      let name = ''
      for (const idx in this.items) {
        const option = this.items[idx]
        if (option.value === value) {
          name = option.name
          item = option
        }
      }
      this.selected = { name, value }
      this.$emit('event', { selected: this.selected, field: this.field, item })
    }
  },
  methods: {
    setValue (value) {
      this.value = value
    },
    getValue () {
      return this.value
    },
    getSelected () {
      return this.selected
    },
    setError ({ error, message }) {
      this.error = error
      this.message = message
    },
    getBaseClass () {
      if (this.error) {
        return this.baseClassError
      }
      return this.baseClass
    }
  }
}
</script>

<style scoped>
option:not(:first-of-type) {
  color: black;
}
</style>
