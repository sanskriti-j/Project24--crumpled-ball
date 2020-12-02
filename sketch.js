
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ground

function setup() {
	createCanvas(1200, 700);
  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground= new Ground(400,600,1700,30)
ball= new Paper(200,200)
side1= new Box(800,530,20,100)
side2= new Box(1005,530,20,100)
side3= new Box(900,580,205,20)
	Engine.run(engine);
  
}


function draw() {
	background("black")
  rectMode(CENTER);
  background(0);
 ground.display()
 ball.display()
 side1.display()
 side2.display()
 side3.display()
}
function keyPressed(){
	if(keyCode=UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:85,y:-85})
	}
}



