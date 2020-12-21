var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	groundSprite=createSprite(width/2, height-35, width, 10);
	groundSprite.shapeColor=color(255);

	var options = {
		isStatic : true,
		restitution : 0.55
	}

    packageBody = Bodies.circle(width/2 , 200 , 5 , options);
	World.add(world, packageBody);
	
    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

}


function draw() {
  background(0);
  
  keyPressed();

  Engine.update(engine);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
}

function keyPressed() {
	isStatic = Matter.Body.setStatic 
 if (keyCode === 40) {
	isStatic(packageBody,false);
}
}
