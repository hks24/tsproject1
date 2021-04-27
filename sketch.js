const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function preload(){
    polygonImage = loadImage("polygon.png");
}


function setup(){
createCanvas(1200,700);

engine = Engine.create();
world = engine.world;

ground1 = new Ground(375+300,530,220+200,30);

box1 = new Block(330+240,300 + 90,70,80);
box2 = new Block(400+240,300+90,70,80);
box3 = new Block(470+240,300+90,70,80);
box4 = new Block(540+240,300+90,70,80);

box5 = new Block(300+240,380+90,70,80);
box6 = new Block(370+240,380+90,70,80);
box7 = new Block(440+240,380+90,70,80);
box8 = new Block(510+240,380+90,70,80);
box9 = new Block(580+240,380+90,70,80);

box10 = new Block(365+240,300,70,80);
box11 = new Block(435+240,300,70,80);
box12 = new Block(505+240,300,70,80);

box13 = new Block(400+240,240,70,80);
box14 = new Block(470+240,240,70,80);

box15 = new Block(435+240,170,70,80);

polygon = Bodies.circle(50,60,60);
World.add(world,polygon);

rope1 = new SlingShot(this.polygon,{x:200,y:100});


}

function draw(){

background("black")

Engine.update(engine)

box1.display();
box2.display();
box3.display();
box4.display();
ground1.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();

//polygon.display();
rope1.display();

imageMode(CENTER);
image(polygonImage,polygon.position.x,polygon.position.y,100,100);



//console.log(box1.body.position.y);



}

function mouseReleased(){
    rope1.fly();
}



function mouseDragged(){
Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}