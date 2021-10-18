var path,pathImg
var bird,coin,cone
var wood,runnerboy,runnerboyImg
var ground,groundImg



function preload(){
     
   pathImg = loadImage("backgroundimg.jpg") 
   bird = loadAnimation("birds.gif");
   coin = loadImage("coin.jpg");
   cone = loadImage("cone.jpg")
   wood = loadImage("wood.jpg");
   runnerboyImg = loadAnimation("runnerboy.gif")
   groundImg = loadImage("ground.jpg")

}

function setup() {
     createCanvas(windowWidth,windowHeight)
      
     background(pathImg)
    
   runnerboy = createSprite(200,200,200,200)
   runnerboy.addAnimation(runnerboyImg)
   runnerboy.scale = 0.90

 ground = createSprite(200,200,100,200)
 ground.addAnimation(groundImg)
 ground.scale =                       

}

function draw() {
   drawSprites()
   
}