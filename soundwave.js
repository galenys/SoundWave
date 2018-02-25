var t = 0
var variance = 0
function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
}

function draw() {
  background(0, 0, 0)
  
  fill(255,255,255)
  stroke(0, 255, 41) // rgb(0, 255, 41)
  noFill()
  
  beginShape(TRIANGLE_STRIP)
  for (var x = 0; x < width; x+=20) {
    vertex(x, map(noise(x + t), 0, 1, (height/2) - variance, (height/2) + variance) )
  }
  endShape()
  
  if (document.getElementById('song').paused === false) {
    t += 0.04
    if (variance <= height) {
      variance += 0.04
    }
  }
  
}