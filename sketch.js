const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,pig1,pig2,box3,box4,box5;
var log1,log2,log3,log4;
var bird;

function setup()
{
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(685,300,50,50);
    box2 = new Box(745,300,50,50);
    box3 = new Box(685,200,50,50);
    box4 = new Box(745,200,50,50);
    box5 = new Box(720,140,50,50);
    ground = new Ground(600,height,1200,20);

    pig1 = new Pig(720,300);
    pig2 = new Pig(720,200);

    log1 = new Log(720,280,300,PI/2);
    log2 = new Log(720,180,300,PI/2);
    log3 = new Log(700,130,130,PI/7);
    log4 = new Log(732,130,130,-PI/7);

    bird = new Bird(200,50);
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}