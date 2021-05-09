
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	crumpledballs = new CrumpledBalls(200,650,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  crumpledballs.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(crumpledballs.body,crumpledballs.body.position,{x:30,y:-145});
	}
}