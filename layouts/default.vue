<template>
  <div>
    <Header />
    <Nuxt />
    <Footer text="This site is powered by NuxtJs + TailwindCSS + Unicorn UI Components ♥" classes="text-surface" />
  </div>
</template>
<script>
import Header from '~/components/template/header'
import Footer from '~/components/template/footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
