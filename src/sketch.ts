import 'p5'
require('p5/lib/addons/p5.sound')
//require('p5/lib/addons/p5.dom')


var sketch = function (p: p5) {
  let ding: p5.SoundFile

  p.preload = () => {
    const DING_FILE = require("./ding.mp3").default
    ding = new p5.SoundFile(DING_FILE)
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight)
    ding.playMode('restart')
  }

  p.draw = function () {
    if (p.mouseIsPressed) {
      p.fill(0, 0, 0)
      if (ding.isLoaded()) {
        ding.play()
      }
    } else {
      p.fill(255, 0, 0)
    }
    p.ellipse(p.mouseX, p.mouseY, 80, 80)
  }
}

new p5(sketch)
