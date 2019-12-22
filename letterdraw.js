// colour palette 
// https://coolors.co/595959-808f85-91c499-f2e9dc-cfd11a

function setup() {
  // put setup code here
    
    
    createCanvas (560,346);
    background (255,255,255);
  noStroke();
  fill (207,209,26); 

}

function draw() {
  // put drawing code here
  
  text(key, mouseX, mouseY);
  
}

function mousePressed() {

    fill(145,196,153);
    text(key, mouseX, mouseY);

}

function mouseReleased() {

    fill (207,209,26); 
    text(key, mouseX, mouseY);
  
 }
 
function keyPressed() {

 background (250,250,250);
 
} 

function keyReleased() {

 background (255,255,255);
 
}