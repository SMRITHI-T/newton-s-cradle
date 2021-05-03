
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Ground(400,250, 500,20);
bob1=new Paper(340,500,60);
bob2=new Paper(370,500,60);
bob3=new Paper(400,500,60);
bob4=new Paper(430,500,60);
bob5=new Paper(460,500,60);
rope1=new Chain(bob1.body,roof.body, -120,0);
rope2=new Chain(bob2.body,roof.body, -60,0);
rope3=new Chain(bob3.body,roof.body, 0,0);
rope4=new Chain(bob4.body,roof.body, 60,0);
rope5=new Chain(bob5.body,roof.body, 120,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
roof.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
}

function keyPressed(){
if(keyCode===LEFT_ARROW){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50})
}
}

