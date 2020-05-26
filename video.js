var canvas;

function setup() {
	canvas = createCanvas(displayWidth, displayHeight + 20);
	canvas.parent('sketch-holder');
}

function draw() {
	var h = hour();
	
	if(h == 2){
		fill(255);
		textSize(30);
		text('https://bit.ly/2yEg7Pg', displayWidth/2, displayHeight/2);
	}
}