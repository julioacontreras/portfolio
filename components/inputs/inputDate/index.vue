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
        :raw="false"
        :options="dateFormat"
        :placeholder="placeholder"
        :class="{'text-error': error}"
        :value="value"
        type="text"
        class="focus:outline-none"
        @input="validateField($event)"
      />
    </div>
  </div>
</template>

<script>
import Cleave from 'vue-cleave-component'
import DateTime from '~/plugins/utils/datetime'
import Tooltip from '~/components/surface/tooltip'
const dateTime = new DateTime()

export default {
  components: {
    Cleave,
    Tooltip
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
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
      dateFormat: {
        date: true,
        datePattern: ['d', 'm', 'Y']
      }
    }
  },
  methods: {
    validateField (value) {
      this.error = false
      if (!dateTime.isValid(value)) {
        return value
      }
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
