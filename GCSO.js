var car,wall;
var speed,weight;

speed=random(55,90);
weight=random(400,1500);

function setup () {
car = createSprite(50,200,50,50);
wall= createSprite(1500,200,60,height/2);
car.velocityX = speed;

Deformation= (0.5*weight*speed*speed)/22500;

if (Deformation >= 100) {
    car.shapeColor = "green";
}
if (Deformation <100 >180) {
    car.shapeColor = "Yellow";
}
if (Deformation <180) {
    car.shapeColor = "Red";
}
}

function draw () {
background(0,0,0);
drawSprites();
}