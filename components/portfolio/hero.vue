<template>
  <div
    class="flex bg-primary flex-col w-full h-hero lg:h-hero pt-20"
  >
    <div v-if="loading">
      Loading...
    </div>
    <div
      v-if="!loading"
      class="container mx-auto"
    >
      <div class="flex w-full">
        <div class="wl-full lg:w-6/12">
          <nuxt-content class="hero lg:hero pl-6 pt-2 lg:pt-0 lg:pl-4" :document="content" style="top: -22px;" />
        </div>
        <div class="hidden lg:block relative w-6/12 ">
          <img class="w-img-hero absolute inset-y-0 right-0" :src="img" style="top: -42px;">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ''
    },
    content: {
      type: Object,
      default: () => { return {} }
    },
    loading: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
.w-img-hero {
  width: 400px;
}

.h-hero {
  height: 14rem;
}

.hero {
  color: #FFF;
}

.hero h2 {
  font-size: 1.5rem;
  color: #FFC554;
  font-weight: 600;
  line-height: 1;
}

.hero h1 {
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  line-height: 1;
}

.hero h1 > strong {
  color: #F72585;
  font-weight: 600;
  margin: 0;
}

@media only screen and (min-width: 768px) {

.lg\:h-hero {
  height: 19rem;
}
.lg\:hero h1 {
  font-size: 3rem;
}

.lg\:hero h2 {
  font-size: 2rem;
}

}
</style>
