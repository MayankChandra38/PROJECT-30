//for namespacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
}

function setup() {
    //for creating engine and world
    engine = Engine.create();
    world = engine.world;

    //for creating canvas
    canvas = createCanvas(1280,550);

    //for creating objects
    //for ground
    ground1 = new Ground(640,540,10000,30);
    ground2 = new Ground(500,400,300,10);
    ground3 = new Ground(900,200,300,10);
    //for blue blocks
    blockBlue = new boxBlue(500,380,30,40);
    blockBlue1 = new boxBlue(470,380,30,40);
    blockBlue2 = new boxBlue(440,380,30,40);
    blockBlue3 = new boxBlue(410,380,30,40);
    blockBlue4 = new boxBlue(530,380,30,40);
    blockBlue5 = new boxBlue(560,380,30,40);
    blockBlue6 = new boxBlue(590,380,30,40);
    blockBlue7 = new boxBlue(900,180,30,40);
    blockBlue8 = new boxBlue(870,180,30,40);
    blockBlue9 = new boxBlue(840,180,30,40);
    blockBlue10 = new boxBlue(930,180,30,40);
    blockBlue11 = new boxBlue(960,180,30,40);
    //for pink blocks
    blockpink = new boxPink(440,335,30,40);
    blockpink2 = new boxPink(470,335,30,40);
    blockpink3 = new boxPink(500,335,30,40);
    blockpink4 = new boxPink(530,335,30,40);
    blockpink5 = new boxPink(560,335,30,40);
    blockpink6 = new boxPink(870,135,30,40);
    blockpink7 = new boxPink(900,135,30,40);
    blockpink8 = new boxPink(930,135,30,40);
    //for green blocks
    blockGreen = new boxGreen(470,295,30,40);
    blockGreen2 = new boxGreen(500,295,30,40);
    blockGreen3 = new boxGreen(530,295,30,40);
    blockGreen4 = new boxGreen(900,95,30,40);
    //for black blocks
    blockBlack = new boxBlack(500,255,30,40);
    //for polygon
    polygn = new Polygon(200,400,100,100);
    //for rope
    rope1 = new Rope(polygn.body,{x:200,y:200});
}

function draw() {
    background(60,46,46)
    //for updating engine
    Engine.update(engine);
    //for displaying objects
    //for ground
    ground1.display();
    ground2.display();
    ground3.display();
    //for blue blocks
    blockBlue.display();
    blockBlue1.display();
    blockBlue2.display();
    blockBlue3.display();
    blockBlue4.display();
    blockBlue5.display();
    blockBlue6.display();
    blockBlue7.display();
    blockBlue8.display();
    blockBlue9.display();
    blockBlue10.display();
    blockBlue11.display();
    //for pink blocks
    blockpink.display();
    blockpink2.display();
    blockpink3.display();
    blockpink4.display();
    blockpink5.display();
    blockpink6.display();
    blockpink7.display();
    blockpink8.display();
    //for green blocks
    blockGreen.display();
    blockGreen2.display();
    blockGreen3.display();
    blockGreen4.display();
    //for black blocks
    blockBlack.display();
    //for polygon
    polygn.display();
    //for rope
    rope1.display();

    //for displaying text
    Text1();
}

function Text1() {
    strokeWeight(4);
    stroke("black");
    fill("yellow");
    textSize(20);
    text("DRAG THE STONE AND RELEASE IT TOWARDS THE BLOCKS",350,50);
}

function mouseDragged() {
    Matter.Body.setPosition(polygn.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
    rope1.fly();
}

function keyPressed() {
    if(keyCode === 32) {
        rope1.attach(polygn.body);
    }
}