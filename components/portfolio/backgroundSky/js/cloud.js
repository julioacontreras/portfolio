export default (Phaser) => {
  class Cloud {
    constructor (maxPositonY) {
      this.maxPositonY = maxPositonY
      this.width = Phaser.classes.Utils.getWidth()
      this.initPositionX = -200
    }

    preload (scene) {
      this.speed = 0.1
      const pixelWidth = 2
      const cloud = [
        '.............22F.22F.22F.22F..............',
        '......... 2222222222222222222F............',
        '..........2222222222222222222F............',
        '..........2222222222222222222F............',
        '..22F.22F.2222222222222222222F..22F.......',
        '2222222222222222222222222222222222222F....',
        '2222222222222222222222222222222222222F....',
        '2222222222222222222222222222222222222F....',
        '2222222222222222222222222222222222222F....',
        '.......2222222222222222222F.................',
        '.......2222222222222222222F.................',
        '.......2222222222222222222F.................'
      ]
      scene.textures.generate('cloud', { data: cloud, pixelWidth })
      this.obj = scene.add.image(64, this.getNewPositionY(), 'cloud').setOrigin(0, 1)
    }

    getNewPositionY () {
      return Math.floor(Math.random() * this.maxPositonY) + 100
    }

    resize ({ width }) {
      this.width = width
    }

    update ({ delta }) {
      this.obj.x += this.speed * delta
      if (this.obj.x > this.width + 100) {
        this.obj.x = this.initPositionX
        this.obj.y = this.getNewPositionY()
      }
    }
  }

  return Cloud
}
