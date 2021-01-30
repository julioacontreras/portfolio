<template>
  <div class="w-full lg:h-article">
    <div class="container mx-auto text-secondary">
      <div class="p-4">
        <Title text="Works" classes="text-secondary justify-center flex lg:justify-start block" />

        <div class="hidden lg:flex w-full">
          <div class="flex justify-start pr-6">
            <div class="flex-fit">
              <a href="https://github.com/julioacontreras/unicorn">
                <img src="/img/uni-logo.png">
              </a>
            </div>
            <div class="pl-6 flex-grow">
              <div class="text-2xl pb-3 font-bold">
                Unicorn UI Components
              </div>
              <div class="text-base">
                Is a repository 25 components to start a website.
              </div>
              <div class="text-base">
                Github: <a class="hover:underline" href="https://github.com/julioacontreras/unicorn">
                  https://github.com/julioacontreras/unicorn
                </a>
              </div>
            </div>
          </div>
          <div class="flex justify-start pr-6">
            <div class="flex-fit">
              <a href="https://github.com/julioacontreras/kraken">
                <img src="/img/kraken-logo.png">
              </a>
            </div>
            <div class="pl-6 flex-grow">
              <div class="text-2xl pb-3 font-bold">
                Kraken Backend
              </div>
              <div class="text-base">
                Backend organized in modules to make big projects.
              </div>
              <div class="text-base">
                Github: <a class="hover:underline" href="https://github.com/julioacontreras/kraken">
                  https://github.com/julioacontreras/kraken
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col w-full lg:hidden">
          <div class="flex justify-center w-full pt-6">
            <a href="https://github.com/julioacontreras/unicorn">
              <img src="/img/uni-logo.png">
            </a>
          </div>
          <div class="flex justify-center w-full auto pt-6">
            <a href="https://github.com/julioacontreras/kraken">
              <img src="/img/kraken-logo.png">
            </a>
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
