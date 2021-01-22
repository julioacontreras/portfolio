<template>
  <div>
    <Hero v-bind="hero" />
    <AboutMe />
    <Experience />
    <Works />
    <Contact />
  </div>
</template>

<script>
import Hero from '~/components/portfolio/hero'
import AboutMe from '~/components/portfolio/aboutMe'
import Experience from '~/components/portfolio/experience'
import Works from '~/components/portfolio/works'
import Contact from '~/components/portfolio/contact'
export default {
  components: {
    Hero,
    AboutMe,
    Experience,
    Works,
    Contact
  },
  data () {
    return {
      hero: {
        img: '/img/hero.png',
        content: {},
        loading: true
      }
    }
  },
  async mounted () {
    this.hero.content = await this.$content('articles', 'hero').fetch()
    this.hero.loading = false
  }
}
</script>
