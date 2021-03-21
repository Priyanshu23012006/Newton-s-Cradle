
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ballObject1,ballObject2,ballObject3,ballObject4,ballObject5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
     rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Surface=new Bar(width/2,height/4,width/5,20);
	
	ballDiameter=40;

	startBallPositionX=width/2;
	startBallPositionY=height/4+500;

	ballObject1=new Ball(startBallPositionX-ballDiameter*2,startBallPositionY,ballDiameter);

	ballObject2=new Ball(startBallPositionX-ballDiameter,startBallPositionY,ballDiameter);

	ballObject3=new Ball(startBallPositionX,startBallPositionY,ballDiameter);

	ballObject4=new Ball(startBallPositionX+ballDiameter,startBallPositionY,ballDiameter);

	ballObject5=new Ball(startBallPositionX+ballDiameter*2,startBallPositionY,ballDiameter);

	
	rope1=new Rope(ballObject1.body,Surface.body,-ballDiameter*2,0);

	rope2=new Rope(ballObject2.body,Surface.body,-ballDiameter*1,0);

	rope3=new Rope(ballObject3.body,Surface.body,0,0);

	rope4=new Rope(ballObject4.body,Surface.body,ballDiameter*1,0);

	rope5=new Rope(ballObject5.body,Surface.body,ballDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Surface.display();
  ballObject1.display();
  ballObject2.display();
  ballObject3.display();
  ballObject4.display();
  ballObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ballObject1.body,ballObject1.body.position,{x:-50,y:-45});
	}
}

function Line(constraint)
{
  ballBodyPosition=constraint.bodyA.position;
  SurfaceBodyPosition=constraint.bodyB.position;

  SurfaceBodyOffset=constraint.point;

  SurfaceBodyX=SurfaceBodyPosition.x+SurfaceBodyOffset.x;
  SurfaceBodyY=SurfaceBodyPosition.y+SurfaceBodyOffset.y;
  line(ballBodyPosition.x,ballBodyPosition.y,SurfaceBodyX,SurfaceBodyY);
}



