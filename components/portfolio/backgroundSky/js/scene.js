export default (Phaser) => {
  class Scene extends Phaser.Scene {
    constructor () {
      super()
      const maxPointY = 300
      const maxStars = 100
      this.cloud = new Phaser.classes.Cloud(100)
      this.sky = new Phaser.classes.Sky(maxStars)
      this.presentation = new Phaser.classes.Presentation(maxPointY)
    }

    preload () {
      this.sky.preload(this)
      this.cloud.preload(this)
      this.presentation.preload(this)
    }

    create () {
      this.sky.create()
      this.scale.on('resize', this.resize, this)
      this.presentation.create(this)
    }

    update (_, delta) {
      this.cloud.update({ delta })
      this.sky.update()
      this.presentation.update()
    }

    resize (gameSize) {
      const width = gameSize.width
      const height = gameSize.height
      this.cameras.resize(width, height)
      this.cloud.resize({ width })
      this.sky.resize({ width, height })
      this.presentation.resize({ width, height })
    }
  }

  return Scene
}
