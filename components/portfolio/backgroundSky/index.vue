<template>
  <div id="phaser" />
</template>

<script>
import Utils from './js/utils'
import CloudCrestor from './js/cloud'
import SkyCreator from './js/sky'
import SceneCreator from './js/scene'
import gameStart from './js/game'
import PresentationCreator from './js/presentation'

const Phaser = require('phaser')
const Scene = SceneCreator(Phaser)
const Cloud = CloudCrestor(Phaser)
const Sky = SkyCreator(Phaser)
const Presentation = PresentationCreator(Phaser)
Phaser.classes = {
  Utils,
  Cloud,
  Scene,
  Sky,
  Presentation
}

export default {
  props: {
    html: {
      type: String,
      default: ''
    }
  },
  mounted () {
    gameStart(Phaser)
  }
}
</script>
