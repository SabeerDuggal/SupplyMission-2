var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var r1, r2, r3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(400, 400);
	rectMode(CENTER);
	

	packageSprite=createSprite(200, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(200, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(200, 400, width,60);
	groundSprite.shapeColor=color("green")

	r1 = createSprite(200,390,200,40)
	r1.shapeColor = color("red")

	r2 = createSprite(100,360,20,100)
	r2.shapeColor = color("red")

	r3 = createSprite(300,360,20,100)
	r3.shapeColor = color("red")


	engine = Engine.create();
	world = engine.world;
    
	packageBody = Bodies.circle(200 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(200,400, width, 60 , {isStatic:true} );
	 World.add(world, ground);
	 
	 r1 = Bodies.rectangle(200,390, 200, 40 , {isStatic:true} );
	 r2 = Bodies.rectangle(100,360, 20, 100 , {isStatic:true} );
	 r3 = Bodies.rectangle(300,360, 20, 100 , {isStatic:true} );


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}
engine.update()
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



