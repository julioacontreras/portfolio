const start = (Phaser) => {
  const config = {
    type: Phaser.AUTO,
    scale: {
      mode: Phaser.Scale.RESIZE,
      parent: 'phaser',
      width: '100%',
      height: 300
    },
    backgroundColor: '#3A0CA3',
    scene: [Phaser.classes.Scene]
  }
  return new Phaser.Game(config)
}

export default start
