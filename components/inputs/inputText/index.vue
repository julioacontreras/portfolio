<template>
  <div>
    <div class="relative">
      <Tooltip
        v-if="error && tooltip"
        :title="message"
        class="absolute left-0"
        style="top:-20px;"
      />
    </div>
    <div
      :class="[
        componentClass,
        { 'border rounded border-error': error }
      ]"
      @mouseover="tooltip = true"
      @mouseleave="tooltip = false"
    >
      <input
        :value="value"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :class="[
          {'uppercase' : opt.uppercase}
        ]"
        class="focus:outline-none"
        @input="validateField($event)"
      >
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
    value: {
      type: String,
      default: ''
    },
    componentClass: {
      type: String,
      default: 'rounded bg-secondary-900 mt-3 pt-3 px-3 w-72 mr-6 h-12 w-full'
    },
    placeholder: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number,
      default: 255
    },
    validator: {
      type: Function,
      default: () => {
        return { isValid: true }
      }
    },
    options: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    opt () {
      const opt = this.options
      return opt
    }
  },
  data () {
    return {
      error: false,
      tooltip: false,
      message: ''
    }
  },
  methods: {
    setError ({ error, message }) {
      console.log({ error, message })
      this.error = error
      this.message = message
    },
    validateField ($event) {
      const value = $event.target.value
      this.error = false
      const result = this.validator(value)
      result.isValid ? this.$emit('input', value) : this.setError(result)
      return value
    }
  }
}
</script>
