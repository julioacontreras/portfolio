<template>
  <div class="w-full h-article">
    <div class="container mx-auto">
      <div class="flex">
        <div class="w-full lg:w-1/2 p-6">
          <Title text="About me" classes="text-primary justify-center flex lg:justify-start block w-full pb-6 lg:pb-2" />
          <Article v-bind="aboutMe" />
        </div>
        <div class="w-1/2 p-6 hidden lg:block">
          <div class="relative">
            <img
              class="notebook w-note absolute z-20 inset-y-0 right-0"
              src="/img/technologies.png"
              style="top: 60px;"
              @mouseenter="meIsVisible=true"
              @mouseleave="meIsVisible=false"
            >
            <img
              :class="[
                {'me-show': meIsVisible},
                {'me-hide': !meIsVisible},
              ]"
              class="w-me absolute z-10 inset-y-0 right-0"
              src="/img/me.png"
              style="left: 200px;"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '~/components/sections/title'
import Article from '~/components/content/article'

export default {
  component: {
    Title,
    Article
  },
  data () {
    return {
      aboutMe: {
        classes: 'about-me',
        content: {},
        loading: true
      },
      meIsVisible: false
    }
  },
  async mounted () {
    this.aboutMe.content = await this.$content('articles', 'about-me').fetch()
    this.aboutMe.loading = false
  }
}
</script>

<style>
.w-me {
  width: 250px;
}

@-webkit-keyframes me-show {
    0% { transform: translateX(0px); }
    20% { transform: translateX(-50px); }
    80% { transform: translateX(-5px); }
    100% { transform: translateX(0px); }
}

.me-show {
  -webkit-animation: me-show 5s 1;
  animation: me-show 5s 1;
}

.w-note {
  width: 400px;
}

.about-me h3 {
  font-size: 1rem;
  color: #444444;
}

.about-me h3 strong{
  font-size: 1rem;
  color: #3A0CA3;
}

.about-me h1 {
  color: #3A0CA3;
  font-size: 4rem;
  font-weight: 500;
  margin: 0;
  line-height: 1.75;
}
</style>
