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
        { 'border rounded border-error': error }
      ]"
      class="rounded bg-secondary-900 mt-3 pt-3 px-3 mr-6 h-12"
      @mouseover="tooltip = true"
      @mouseleave="tooltip = false"
    >
      <Cleave
        :value="value"
        :options="phone"
        :class="{'text-error': error}"
        :placeholder="placeholder"
        type="text"
        class="w-full focus:outline-none"
        @input="validateField($event)"
      />
    </div>
  </div>
</template>

<script>
import Cleave from 'vue-cleave-component'
import Tooltip from '~/components/surface/tooltip'
require('cleave.js/dist/addons/cleave-phone.es')

export default {
  components: {
    Cleave,
    Tooltip
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    validator: {
      type: Function,
      default: () => {
        return { isValid: true }
      }
    }
  },
  data () {
    return {
      tooltip: false,
      error: false,
      message: '',
      phone: {
        phone: true,
        phoneRegionCode: 'ES'
      }
    }
  },
  methods: {
    validateField (value) {
      this.error = false
      const result = this.validator(value)
      result.isValid ? this.$emit('input', value) : this.setError(result)
      return value
    },
    setError ({ error, message }) {
      this.error = error
      this.message = message
    }
  }
}
</script>
