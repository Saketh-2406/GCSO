var Car,Wall;
var Speed,Weight;


function setup() {
  createCanvas(800,400);
  Speed=random(55,90);
  Weight=random(400,1500);
  Car = createSprite(50, 200, 50, 50);
  Car.scale=0.5;
  Car.velocityX = Speed;
  Wall = createSprite(700,200,60,height/2);
  Wall.scale=0.5;
  
  if (Wall.x-Car.x < (Car.width+Wall.width)/2) {
    Car.velocityX = 0;
    var Deformation = 0.5*Weight*Speed*Speed/22500;
    if (Deformation>180) {
        Car.shapeColor=color(255,0,0);
    }
    if (Deformation<180 && Deformation>100) {
        Car.shapeColor=color(230,230,0);
    } 
    if (Deformation<100) {
        Car.shapeColor=color(0,250,0);
    }
  }
}

function draw() {
  background(0,0,0);  
  drawSprites();
}