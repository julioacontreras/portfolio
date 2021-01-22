<template>
  <div class="flex container mx-auto py-1">
    <div class="flex flex-fit justify-begin">
      <ButtonImage img="/img/logo.png" to="/" />
      <div class="text-primary pt-5 font-semibold">
        Julio Contreras
      </div>
    </div>
  </div>
</template>

<script>
import ButtonImage from '~/components/buttons/imageLink'

export default {
  components: {
    ButtonImage
  }
}
</script>
