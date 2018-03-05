var t = 0
var variance = 0
var song
var amp

function toggleSong() {
  if (song.isPlaying()) {
    song.pause()
  } else {
    song.play()
  }
}
function mouseClicked() {
  toggleSong()
}

function preload() {
  song = loadSound("song3.mp3")
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  song.play()
  amp = new p5.Amplitude()
  amp.setInput(song)
}

function draw() {
  background(0, 0, 0)
  
  fill(255,255,255)
  stroke(0, 255, 41) // rgb(0, 255, 41)
  noFill()
  
  variance = height * amp.getLevel()
  
  beginShape(TRIANGLE_STRIP)
  for (var x = 0; x < width; x+=20) {
    vertex(x, map(noise(x + t), 0, 1, (height/2) - amp.getLevel()*height, (height/2) + amp.getLevel()*height) )
  }
  endShape()
  
  t += 0.04
}