var groundHeight;
var mountain1;
var mountain2;

var tree;

var moon;
var sun;
var darkness;

// GMG Used to define the X position of the trunk of tree, so that other shapes used in the tree can move with the trunk.

var treePosX;

function setup()
{
	createCanvas(800, 600);
	//set the groundHeight proportional to the canvas size
	groundHeight = (height / 3) * 2;

	//initalise the mountain objects with properties to help draw them to the canvas
	mountain1 = {
		x: 400,
		y: groundHeight,
		height: 320,
		width: 230
	};
	mountain2 = {
		x: 550,
		y: groundHeight,
		height: 200,
		width: 130
	};

	//initalise the tree object
	tree = {
		x: 150,
		y: groundHeight + 20,
		trunkWidth: 40,
		trunkHeight: 150,
		canopyWidth: 120,
		canopyHeight: 100
	};

    //initalise the sun 
	sun = {
		x: 150,
		y: 70,
		diameter: 80,
	};
    
    //TASK: intialise a moon object with an extra property for brightness

    moon = {
        x: 704,
        y: 75,
        height: 100,
        width: 100,
        brightness: 0,
    };
    

	//set the initial darkness
    
	darkness = 15;
    
    treePosX = 170;
    
}


  

function draw()
{
	//TASK: update the values for the moons brightness, the sun's position and the darkness.
	//You can either map this to the mouse's location (i.e. the futher left the mouse is the more daylight) or you can just change the values gradually over time.
    
	//draw the sky
	background(150, 200, 255);
	noStroke();

	//draw the sun
	fill(255, 255, 0);
	ellipse(mouseX, mouseY, sun.diameter);
    
    //TASK: you'll need to draw the moon too. Make sure you use brightness to adjust the colour


	//draw the ground and make it green
	fill(70, 200, 0);
	rect(0, groundHeight, width, height - groundHeight);

	//draw the mountains
	fill(120);
	triangle(mountain1.x, mountain1.y,
		mountain1.x + mountain1.width, mountain1.y,
		mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

	triangle(mountain2.x, mountain2.y,
		mountain2.x + mountain2.width, mountain2.y,
		mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);
    
    //TASK: You can draw the tree yourself
    
    // Green, leafy part of tree
    fill(150,75,0);
    rect (treePosX,groundHeight-100,50,125);
    
    // Trunk of tree
    fill(70, 200, 0);
    ellipse(treePosX+25,250,175,140)
    
	//TASK: make the scene dark by drawing a rectangle that covers the whole canvas.
    
    fill(40,40,40,(mouseY/3));
    rect(0,0,width,height);
    
    //moon
    fill(255, 255, 240, moon.brightness=((mouseY*1)/2.25));
    ellipse(moon.x, moon.y, moon.height, moon.width);
    
    //console.log(mouseX,mouseY);
       
	//Use the alpha value of fill to determine how dark to make it

}