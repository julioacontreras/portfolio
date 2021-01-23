<template>
  <div class="w-full h-article bg-primary">
    <div class="container mx-auto">
      <div class="p-6">
        <Cloud :animation="2" />
        <Title text="Contact" classes="text-surface justify-center flex lg:justify-start block" />
        <div class="text-surface">
          Add me on <a class="underline" href="https://www.linkedin.com/in/julio-contreras-6579b623/">Linkedin</a> and lets talk! :)
        </div>
        <div class="w-full justify-center flex lg:hidden pb-3">
          <a href="https://www.linkedin.com/in/julio-contreras-6579b623/"><img src="/img/linkedin-mini.png"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cloud from '~/components/portfolio/cloud'
import Title from '~/components/sections/title'
export default {
  components: {
    Title,
    Cloud
  }
}
</script>
