//Eu definitivamente vou precisar de ajuda em umas coisas aqui. Se não for erro no código base, eu fiz algo de errado. Apaguei ua boa parte para refazer e vou ir atualizando no Git
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var arrow;
var baseimage;
var playerimage;
var marine, marineImg, marineImg2;

function preload() {
  backgroundImg = loadImage("./assets/fundo.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/marine1.png");
  playerimage2 = loadImage("./assets/marine2.png");
  marineImg=loadImage("./assets/marine1.png")
  marineImg2=loadImage("./assets/marine2.png");

}

  

function setup() {
  canvas = createCanvas(1000, 800);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  };

  player = Bodies.rectangle(windowHeight/4, windowWidth/4-10, 50, 180, options);
  World.add(world,player)
}

function draw() {
  background(backgroundImg);
  image(playerimage,player.position.x,player.position.y,400,400)
  Engine.update(engine);

 // if(keyPressed("space")){   
 //   playerimage=playerimage2;
 // }
 // if(keyReleased("space")){
    
  //}


}
