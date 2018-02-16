import 'p5'
require('p5/lib/addons/p5.sound')
//require('p5/lib/addons/p5.dom')


var sketch = function (p: p5) {
  const x: number = 100
  const y: number = 100
  let boop: p5.SoundFile

  p.preload = () => {
    const BOOP_FILE = require("./boop.mp3").default
    boop = new p5.SoundFile(BOOP_FILE)
  }

  p.setup = function () {
    p.createCanvas(640, 480)
  }

  p.draw = function () {
    if (p.mouseIsPressed) {
      p.fill(0, 0, 0)
      boop.play()
    } else {
      p.fill(255, 0, 0)
    }
    p.ellipse(p.mouseX, p.mouseY, 80, 80)
  }
}

new p5(sketch)
