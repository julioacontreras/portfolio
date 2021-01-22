<template>
  <div class="bg-black rounded w-full text-code px-6">
    <pre>
        {{ code }}
    </pre>
  </div>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      default: ''
    }
  }
}
</script>
