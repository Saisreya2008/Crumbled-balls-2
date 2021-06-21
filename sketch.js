
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
       dustbin1=new dustbin(900,530,20,120)
	   dustbin2=new dustbin(700,530,20,120)
	   dustbin3=new dustbin(800,580,180,20)
	   ground1= new ground (700,600,1350,15)
	   ball=new paper (100,100,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  
dustbin1.display();
dustbin2.display();
dustbin3.display();
ground1.display();
ball.display();


 
}
function keyPressed (){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:35 , y:-35})
	}
}


