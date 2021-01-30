<template>
  <div
    class="flex bg-primary flex-col w-full h-hero "
  >
    <div v-if="loading">
      Loading...
    </div>
    <div v-if="!loading">
      <BackgroundSky />
    </div>
  </div>
</template>

<script>
import BackgroundSky from './backgroundSky'
export default {
  components: {
    BackgroundSky
  },
  props: {
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
  height: 300;
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

.lg\:hero h1 {
  font-size: 3rem;
}

.lg\:hero h2 {
  font-size: 2rem;
}

}
</style>
