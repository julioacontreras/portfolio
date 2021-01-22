<template>
  <div class="w-full lg:h-article">
    <div class="container mx-auto text-secondary">
      <div class="p-6">
        <Title text="Works" classes="text-secondary justify-center flex lg:justify-start block" />
        <div class="flex flex-col lg:flex-row">
          <List v-bind="works" />
          <div class="flex flex-col lg:flex-row w-full lg:w-9/12">
            <div class="flex justify-center w-full lg:w-auto lg:pr-6 pt-6 lg:pt-0">
              <img src="/img/uni-logo.png">
            </div>
            <div class="flex justify-center w-full lg:w-auto pt-6 lg:pt-0">
              <img src="/img/kraken-logo.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '~/components/sections/title'
import List from '~/components/sections/list'
export default {
  components: {
    Title,
    List
  },
  data () {
    return {
      works: {
        title: 'Personal projects',
        items: [
          'Unicorn UI Components',
          'Kraken backend'
        ],
        classes: 'font-bold w-full lg:w-3/12',
        classesText: 'flex justify-center lg:block lg:justify-start'
      }
    }
  }
}
</script>

<style>
</style>
