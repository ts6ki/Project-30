const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var base1, base2;

// base1
var b1x1x1, b1x1x2, b1x1x3, b1x1x4, b1x1x5, b1x1x6, b1x1x7;
var b1x2x1, b1x2x2, b1x2x3, b1x2x4, b1x2x5;
var b1x3x1, b1x3x2, b1x3x3;
var b1x4x1;

// base 2
var b2x1x1, b2x1x2, b2x1x3, b2x1x4, b2x1x5;
var b2x2x1, b2x2x2, b2x2x3;
var b2x3x1;

function setup() {
  createCanvas(800,400);
  
  base1 = new Ground(390, 155, 190, 20)


}

function draw() {
  background("#331908");  

  base1.display();

  drawSprites();
}