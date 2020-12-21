var bullet,wall;
var speed,weight,thickness;
var deformation;
deformation = 0;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(200, 200, 20, 20);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);
  wall = createSprite(700,200,thickness,height/2);
  deformation = (0.5*weight*speed*speed)/22500;
}

function draw() {
  background(255,255,255); 
  collision(bullet,wall);
  if (keyDown("space")){
    bullet.velocityX = 40;
  }
  if (bullet.x > 700){
    bullet.velocityX = 0;
  }
  
  
  if (deformation > 180){
    bullet.shapeColor=(255,0,0);
  }
  if (deformation < 180 && deformation > 100) {
    bullet.shapeColor = (230,230,0)
  }
  if (deformation < 100){
    bullet.shapeColor = (0,255,0);
  }
  
  drawSprites();
}


