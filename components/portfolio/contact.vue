<template>
  <div class="w-full h-article bg-primary">
    <div class="container mx-auto">
      <div class="p-6">
        <Title text="Contact" classes="text-surface justify-center flex lg:justify-start block pt-6 lg:pt-0" />
        <div class="text-surface text-xl flex justify-center pt-6 lg:pt-10">
          <div class="lg:pt-3">
            Add me on
            <a class="py-1 pl-2 pr-1 hover:underline border border-surface rounded mx-2" href="https://www.linkedin.com/in/julio-contreras-6579b623/">
              Linkedin
            </a>
            and lets talk!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '~/components/sections/title'
export default {
  components: {
    Title
  }
}
</script>
