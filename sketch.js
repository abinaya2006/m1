var md;
const Engine = Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var wld,eng;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,
box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,
box31,box32,box33,box34,box35,box36,box37,box38,box39,box40,box41,box42,box43,box44,box45;

var player1;
function preload(){
 md=loadImage("mazedesign.jpg");
}

function setup(){
        createCanvas(1300,600)
        eng=Engine.create()
        wld=eng.world
        //create box
        box1=createSprite(80,278,50,515)
        box2=createSprite(650,20,1190,20)
        box3=createSprite(1218,278,50,515)
        box4=createSprite(650,540,1190,20)
        box5=createSprite(350,130,490,20)
        box6=createSprite(600,155,30,70)
        box7=createSprite(750,185,380,20)
        box8=createSprite(255,45,20,70)
        box9=createSprite(230,75,70,10)
        box10=createSprite(360,100,40,50)
        box11=createSprite(500,50,50,50)
        box12=createSprite(720,130,50,100)
        box13=createSprite(700,80,90,20)
        box14=createSprite(850,80,40,100)
        box15=createSprite(960,155,40,170)
        box16=createSprite(990,245,200,20)
        box17=createSprite(1050,220,30,50)
        box18=createSprite(1010,80,160,20)
        box19=createSprite(1150,140,100,20)
        box20=createSprite(200,480,30,100)
        box21=createSprite(410,430,450,20)
        box22=createSprite(635,405,50,70)
        box23=createSprite(320,380,30,100)
        box24=createSprite(300,320,150,20)
        box25=createSprite(205,310,40,40)
        box26=createSprite(140,373,100,10)
        box27=createSprite(600,480,550,10)
        box28=createSprite(1100,480,250,10)
        box29=createSprite(840,450,30,60)
        box30=createSprite(800,430,50,20)
        box31=createSprite(980,415,40,140)
        box32=createSprite(1010,430,100,20)
        box33=createSprite(950,380,100,20)
        box34=createSprite(1150,370,100,30)
        box35=createSprite(1100,335,30,100)
        box36=createSprite(970,297,250,24)
        box37=createSprite(700,315,350,20)
        box38=createSprite(800,370,20,100)
        box39=createSprite(550,340,20,50)
        box40=createSprite(500,360,100,10)
        box41=createSprite(310,180,270,10)
        box42=createSprite(200,210,30,50)
        box43=createSprite(370,230,400,10)
        box44=createSprite(600,300,20,40)
        box45=createSprite(750,300,20,40)
       
        //create player
        player1=createSprite(150,70,30,30)
        player1.shapeColor="red"

}

function draw(){
 background("white")
 Engine.update(eng)
 player1.velocityX=0
 player1.velocityY=0
 //move the players
 if(keyDown("UP_ARROW")){player1.velocityY-=5}
 if(keyDown("DOWN_ARROW")){player1.velocityY+=5}
 if(keyDown("LEFT_ARROW")){player1.velocityX-=5}
 if(keyDown("RIGHT_ARROW")){player1.velocityX+=5}
 
 //bounceOff for palyer
 player1.bounceOff(box1)
 player1.bounceOff(box2)
 player1.bounceOff(box3)
 player1.bounceOff(box4)
 player1.bounceOff(box5)
 player1.bounceOff(box6)
 player1.bounceOff(box7)
 player1.bounceOff(box8)
 player1.bounceOff(box9)
 player1.bounceOff(box10)
 player1.bounceOff(box11)
 player1.bounceOff(box12)
 player1.bounceOff(box13)
 player1.bounceOff(box14)
 player1.bounceOff(box15)
 player1.bounceOff(box16)
 player1.bounceOff(box17)
 player1.bounceOff(box18)
 player1.bounceOff(box19)
 player1.bounceOff(box20)
 player1.bounceOff(box21)
 player1.bounceOff(box22)
 player1.bounceOff(box23)
 player1.bounceOff(box24)
 player1.bounceOff(box25)
 player1.bounceOff(box26)
 player1.bounceOff(box27)
 player1.bounceOff(box28)
 player1.bounceOff(box29)
 player1.bounceOff(box30)
 player1.bounceOff(box31)
 player1.bounceOff(box32)
 player1.bounceOff(box33)
 player1.bounceOff(box34)
 player1.bounceOff(box35)
 player1.bounceOff(box36)
 player1.bounceOff(box37)
 player1.bounceOff(box38)
 player1.bounceOff(box39)
 player1.bounceOff(box40)
 player1.bounceOff(box41)
 player1.bounceOff(box42)
 player1.bounceOff(box43)
 player1.bounceOff(box44)
 player1.bounceOff(box45)

 drawSprites()
 
}


