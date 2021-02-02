const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var score=0;


var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    dayNight();
}

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;

bird=new Bird(200,480,50,400)
box1=new Box(-600,10,190,190)
    ground = new Ground(600,height,1400,20);
    
}

function draw(){
    if(backgroundImg)
    background("black");
fill("white");
   textSize(25)

    Engine.update(engine);
  
    
    ground.display();
   bird.display()
   box1.display();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}


async function dayNight(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata")
    var responseJSON=await response.json();
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13)
    if(hour>=06 && hour<=19){
    bg="sprites/bg.png"


    }else{
bg="sprites/bg2.jpg"

    }
backgroundImg=loadImage(bg)
}