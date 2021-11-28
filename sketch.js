var player,playerImg;
var bg;
var bulletgrp,bulletImg;
var asteriod1,asteriod1Img;
var asteriod2,asteriod2Img;

function preload(){
  playerImg = loadImage("images/spaceship1.png");
  bg = loadImage("images/bg1.jpg");
  asteriod1Img = loadImage("images/asteriod1.png");
  asteriod2Img = loadImage("images/asteriod2.png")
  bulletImg = loadImage("images/bullet.png");
}

function setup() {
  createCanvas(1500,750);

  player = createSprite(750, 650);
  player.addImage(spaceship);
  player.scale = 0.3;
}

function draw() {
  background(bg); 
  
  if (keyDown("left")) {
    player.x = player.x -5;
  }
  
  if (keyDown("right")) {
    player.x = player.x +5;
  }

  drawSprites();
}
