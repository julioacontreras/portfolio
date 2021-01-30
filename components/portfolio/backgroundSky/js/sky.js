export default (Phaser) => {
  class Sky {
    constructor () {
      this.width = Phaser.classes.Utils.getWidth()
      this.height = Phaser.classes.Utils.getHeight()
      this.stars = []
      this.graphics = {}
      this.countChange = 0
      this.updateCountStars()
    }

    updateCountStars () {
      if (this.width > 1000) {
        this.countStars = 100
      } else {
        this.countStars = 10
      }
    }

    preload (scene) {
      this.canvas1 = scene.add.graphics({
        fillStyle: {
          color: 0x5C27DA // FFFFFF
        }
      })
      this.canvas2 = scene.add.graphics({
        fillStyle: {
          color: 0x00FFFF
        }
      })
    }

    create () {
      for (let idx = 0; idx < this.countStars; idx++) {
        this.stars[idx] = new Phaser.Geom.Point(Math.floor(Math.random() * this.width), Math.floor(Math.random() * this.height))
      }
    }

    resize ({ width, height }) {
      this.width = width
      this.height = height
      this.updateCountStars()
      this.create()
    }

    update () {
      if (this.countChange >= 50) {
        this.countChange = 0
        this.canvas1.clear()
        this.canvas2.clear()
        for (let idx = 0; idx < this.countStars; idx++) {
          if ((Math.floor(Math.random() * 10) > 5)) {
            this.canvas1.fillPointShape(this.stars[idx], 2)
          } else {
            this.canvas2.fillPointShape(this.stars[idx], 2)
          }
        }
      }
      this.countChange++
    }
  }

  return Sky
}
