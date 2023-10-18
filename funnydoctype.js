function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(0);
  fill(255);
  textSize(12);
  text("i think if I were a moth id fly to the brightest star",
    mouseX, mouseY, 200, 200);
  if (mouseIsPressed) {
    noFill();
    stroke(0, 255, 0);
    rect(mouseX, mouseY, 200, 200);
  }
}
