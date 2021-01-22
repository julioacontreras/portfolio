<template>
  <div class="relative">
    <img v-if="animation === 1" class="absolute w-fit cloud-left-right" src="/img/cloud.png" style="top: -62px;">
    <img v-if="animation === 2" class="absolute w-fit cloud-right-left" src="/img/cloud.png">
  </div>
</template>

<script>
export default {
  props: {
    animation: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped>
@-webkit-keyframes go-to-left {
    0%   { transform: translateX(-100px); }
    50% { transform: translateX(1500px); }
    100% { transform: translateX(-100px); }
}

@-webkit-keyframes go-to-right {
    0%   { transform: translateX(1500px); }
    50% { transform: translateX(-300px); }
    100% { transform: translateX(1500px); }
}

.cloud-left-right {
  width: 55px;
  -webkit-animation: go-to-left 150s infinite;
  animation: go-to-left 150s infinite;
}

.cloud-right-left {
  width: 55px;
  -webkit-animation: go-to-right 150s infinite;
  animation: go-to-right 150s infinite;
}

</style>>
