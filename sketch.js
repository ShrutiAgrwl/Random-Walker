var x1, y1, x2, y2, fps, inst;
function setup(){
  	fps = createSpan().id('fps');
  	inst = createSpan().id('inst');

  	createCanvas(windowWidth, windowHeight);
  	background(0);

  	x1 = width / 2;
  	y1 = height / 2;
  	x2 = width / 2;
  	y2 = height / 2;
}
function draw(){
	fps.html("fps: "+ floor(frameRate()));
	inst.html("Click to refresh the screen");

	var n = random();
	var r = random() * 255;
	var g = random() * 255;

	if(n < 0.25){
		x1 -= 4;
		x2 += 4;
	}
	else if(n < 0.5){
		x1 += 4;
		x2 -= 4;	
	}
	else if(n < 0.75){
		y1 -= 4;
		y2 += 4;
	}
	else{
		y1 += 4;
		y2 -= 4;
	}
	// red random walker
	update(x1, y1);
	stroke(r, 0, 0);
	strokeWeight(5);
	point(x1, y1);

	// green random walker
	update(x2, y2);
	stroke(0, g, 0);
	strokeWeight(5);
	point(x2, y2);
}
function update(x, y){
	if(x >= width || x <= 0){
		x = width/2;
	}
	if(y >= height || y <= 0){
		y = height/2;
	}
}
// refresh the screen
function mouseClicked(){
	background(0);
	x1 = width / 2;
  	y1 = height / 2;
  	x2 = width / 2;
  	y2 = height / 2;
}
