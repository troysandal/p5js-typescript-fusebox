import 'p5'

var sketch = function (p: p5) {
  const x: number = 100;
  const y: number = 100;

  p.setup = function () {
    p.createCanvas(640, 480);
  };

  p.draw = function () {
    if (p.mouseIsPressed) {
      p.fill(0, 0, 0);
    } else {
      p.fill(255, 0, 0);
    }
    p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };
};

new p5(sketch);
