var canvas, backgroundImage;
var gameState = 0;
var playerCount,allPlayers;
var database;
var form, player, game, foodslab;
var count;
var food1,food2,food3,food4,food5,food6,food7,food8,food9,foood;
function preload(){
  dog = loadImage("images/Dog.png");
  happy = loadImage("images/happydog.png");
  fod = loadImage("images/Milk.png")
}
function setup(){
  canvas = createCanvas(400,400);
  background("white");
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  count = 20;
  foodslab = 10;

  food1 = createSprite(50,250);
  food1.addImage(fod);
  food1.scale = 0.1

  food2 = createSprite(100,250);
  food2.addImage(fod);
  food2.scale = 0.1

  food3 = createSprite(150,250);
  food3.addImage(fod);
  food3.scale = 0.1

  food4 = createSprite(200,250);
  food4.addImage(fod);
  food4.scale = 0.1

  food5 = createSprite(250,250);
  food5.addImage(fod);
  food5.scale = 0.1

  food6 = createSprite(50,350);
  food6.addImage(fod);
  food6.scale = 0.1

  food7 = createSprite(100,350);
  food7.addImage(fod);
  food7.scale = 0.1

  food8 = createSprite(150,350);
  food8.addImage(fod);
  food8.scale = 0.1

  food9 = createSprite(200,350);
  food9.addImage(fod);
  food9.scale = 0.1

  foood = createSprite(250,350);
  foood.addImage(fod);
  foood.scale = 0.1
}
function draw(){
if(playerCount == 1){
  game.update(1)
}
if(gameState === 1){
 clear()
 game.play();
}

if(foodslab === 9){
  foood.destroy();
}

if(foodslab === 8){
  foood.destroy();
  food9.destroy();
}

if(foodslab === 7){
  foood.destroy();
  food9.destroy();
  food8.destroy();
}

if(foodslab === 6){
  foood.destroy();
  food9.destroy();
  food8.destroy();
  food7.destroy();
}

if(foodslab === 5){
  foood.destroy();
  food9.destroy();
  food8.destroy();
  food7.destroy();
  food6.destroy();
}

if(foodslab === 4){
  foood.destroy();
  food9.destroy();
  food8.destroy();
  food7.destroy();
  food6.destroy();
  food5.destroy();
}

if(foodslab === 3){
  foood.destroy();
  food9.destroy();
  food8.destroy();
  food7.destroy();
  food6.destroy();
  food5.destroy();
  food4.destroy();
}

if(foodslab === 2){
  foood.destroy();
  food9.destroy();
  food8.destroy();
  food7.destroy();
  food6.destroy();
  food5.destroy();
  food4.destroy();
  food3.destroy();
}

if(foodslab === 1){
  foood.destroy();
  food9.destroy();
  food8.destroy();
  food7.destroy();
  food6.destroy();
  food5.destroy();
  food4.destroy();
  food3.destroy();
  food2.destroy();
}

if(foodslab === 0){
  foood.destroy();
  food9.destroy();
  food8.destroy();
  food7.destroy();
  food6.destroy();
  food5.destroy();
  food4.destroy();
  food3.destroy();
  food2.destroy();
  food1.destroy();
gameState.update(0);
}
drawSprites();
text(50)
text("खाना खाया = "+count,150,100);
text("खाना बचा है = "+foodslab,150,125)
}
