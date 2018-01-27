/// <reference types="p5/lib/p5.global-mode" />

var sketch = function(p: p5) {
  var x = 100;
  var y = 100;

  p.setup = function() {
      p.createCanvas(640, 480);
  };

  p.draw = function() {
    if (p.mousePressed) {
        p.fill(0, 0, 0);
      } else {
        p.fill(255, 255, 255);
      }
      p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };
};

new p5(sketch);
