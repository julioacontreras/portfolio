<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
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
