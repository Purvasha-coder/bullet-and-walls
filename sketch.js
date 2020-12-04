var bullet,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

bullet= createSprite(50, 200, 50, 5);
bullet.shapeColor=rgb(255,51,82);
 
 wall= createSprite(1500,200,600,height/2);

 wall.shapeColor=("brown");

 speed=random(55,90);

 weight=random(400,1500);
 
bullet.velocityX=speed; 

 deformation=0.5*weight*speed*speed/22500;
 
}

function draw() {

  background(0,0,0); 

  if (bullet.isTouching(wall) ){
  if(wall.x-bullet.x<(bullet.width+wall.width)){

bullet.velocityX=0;

var deformation=0.5 * weight *speed * speed/22509;

if(deformation>180){

wall.shapeColor=color(255,0,0);


}

if(deformation<180 && deformation>100){

wall.shapeColor=color(230,230,0);


}

if(deformation<100){

wall.shapeColor=color(0,255,0);



}
  }
}
  drawSprites();
}