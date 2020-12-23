var m,ma
var g
var b,bi,bg
var gameState="PLAY"
var o,oi,og
var score=0
function preload(){
ma=loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  bi=loadImage("banana.png")
  oi=loadImage("obstacle.png")
}
function setup(){
  createCanvas(600,600)
  m=createSprite(60,560,10,10)
  m.addAnimation("moving",ma)
  m.scale=0.2
  g=createSprite(300,580,600,20)
  g.shapeColor="black"
  bg=new Group()
  og=new Group()
}
function draw(){
  background("brown")
  text("Score:"+score,450,150)
  if(gameState==="PLAY"){
    if(keyDown("space")){
      m.velocityY=-10
    }
    m.velocityY=m.velocityY+0.5
    if(m.isTouching(bg)){
      bg.destroyEach()
      score=score+2
    }
    if(m.isTouching(og)){
      gameState="END"
    }
  }
  if(gameState==="END"){
    m.destroy()
    bg.destroyEach()
    og.destroyEach()
    textSize(30)
    text("GAMEOVER",200,300)
    
  }
  m.collide(g)
  Banana()
  O()
  drawSprites()
}
function Banana(){
  if(frameCount%120===0){
    b=createSprite(600,300,20,20)
    b.addImage(bi)
    b.y=random(300,450)
    b.velocityX=-4
    b.scale=0.1
    b.lifetime=300
    bg.add(b)
  }
}
function O(){
  if(frameCount%150===0){
    o=createSprite(600,550,20,20)
    o.addImage(oi)
    o.velocityX=-5
    o.lifetime=300
    og.add(o)
    o.scale=0.15
  }
}
