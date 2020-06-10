var arr = [];
var arr1 = [];
function setup(){
  createCanvas(400,400)
  background("black")
}

function draw(){
  beginShape();
  stroke(255);
  strokeWeight(4);
  noFill();
  for(var i=0; i<arr.length; i++){
    vertex(arr[i].x,arr[i].y)
    endShape();
  }
}
function mouseDragged(){
  var point={x:mouseX, y:mouseY}
  arr.push(point);
}
