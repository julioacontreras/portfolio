export default (Phaser) => {
  class Presentation {
    constructor (maxPointY) {
      this.width = Phaser.classes.Utils.getWidth()
      this.initPointX = 30
      this.height = maxPointY
    }

    preload (scene) {
      scene.load.image('presentation', 'img/presentation.png')
      scene.load.image('presentation-mini', 'img/presentation-mini.png')
      scene.load.image('project', 'img/project.png')
      scene.load.image('project-mini', 'img/project-mini.png')
    }

    centerHeight () {
      return 60
    }

    create (scene) {
      this.obj1 = scene.add.image(this.initPointX, this.centerHeight(), 'presentation').setOrigin(0)
      this.obj2 = scene.add.image(this.initPointX, 20, 'presentation-mini').setOrigin(0)
      this.p1 = scene.add.image(this.width - 600, 20, 'project').setOrigin(0)
      this.p2 = scene.add.image(this.width - 300, 120, 'project-mini').setOrigin(0)
      this.updateImage()
    }

    updateImage () {
      if (this.width > 600) {
        this.obj1.setVisible(true)
        this.obj2.setVisible(false)
        this.p1.setVisible(true)
        this.p2.setVisible(false)
      } else {
        this.obj1.setVisible(false)
        this.obj2.setVisible(true)
        this.p1.setVisible(false)
        this.p2.setVisible(true)
      }
    }

    resize ({ width }) {
      this.width = width
      this.obj1.y = this.centerHeight()
      this.obj2.y = this.centerHeight()
      this.updateImage()
    }

    updateMiniProject () {
      let x = this.width - 300
      if (x < 100) {
        x = 100
      }
      this.p2.x = x
    }

    updateProject () {
      let x = this.width - 470
      if (this.width > 1283) {
        x = this.width - 700
      }
      if (x < 700) {
        x = 700
      }
      this.p1.x = x
    }

    updatePresentation () {
      let x = this.initPointX
      if (this.width > 1283) {
        x = Math.floor((this.width / 2)) - 600
      }
      this.obj1.x = x
    }

    update () {
      this.updateMiniProject()
      this.updateProject()
      this.updatePresentation()
    }
  }

  return Presentation
}
