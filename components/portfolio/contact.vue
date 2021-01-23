<template>
  <div class="w-full h-article bg-primary">
    <div class="container mx-auto">
      <div class="p-6">
        <Cloud :animation="2" />
        <Title text="Contact" classes="text-surface justify-center flex lg:justify-start block pt-6 lg:pt-0" />
        <div class="text-surface text-xl flex justify-center pt-10">
          <div class="pt-3">
            Add me on
          </div>
          <a class="py-1 px-2 hover:underline border border-surface rounded m-2" href="https://www.linkedin.com/in/julio-contreras-6579b623/">
            Linkedin
          </a>
          <div class="pt-3">
            and lets talk! :)
          </div>
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
