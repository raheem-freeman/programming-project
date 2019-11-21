function setup() {
  createCanvas(1000, 600);
    background(102);
}

function draw() {
    stroke(255);
    textFont("Georgia"); 
    //textStyle("Arial"); 
    textSize(50);
    textAlign(CENTER); 
    text("Drawing Therapy", width/2, 50);
    textFont("fantasy"); 
    //textStyle("Arial"); 
    strokeWeight(2);
    textSize(30);
    textAlign(CENTER); 
   text("Draw how you feel", width/2, 90);
    textFont("Georgia");  
    textSize(20);
    textAlign(CENTER); 
    noStroke();
    text("refresh to restart", width/2, 130);
    textFont("Georgia");  
    textSize(20);
    textAlign(CENTER); 
    noStroke();
    text("Hopefully this shifts your mood :)", width/2, 540);
     strokeWeight(2);
    stroke("white");
    if (mouseIsPressed === true) {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
}
