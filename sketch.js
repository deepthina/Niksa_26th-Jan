var playerCarimg, playerCarimg2, playerCarimg3, playerCarimg4;
var game,
  form,
  player,
  gameState = 0;

var coinImg, TrackImg, oilCanImg, carFlipImg, formimg;

var car1, car2, car3, car4;
 var tracksound, explosionS, swooshS;
 var track,coinGrp, oilGrp,flipped;

var myInterval,
  flag = 4;

function preload() {
  playerCarimg = loadImage("GCimg/car1.png");
  playerCarimg2 = loadImage("GCimg/car2.png");
  playerCarimg3 = loadImage("GCimg/car3.png");
  playerCarimg4 = loadImage("GCimg/car4.png");
  coinImg = loadImage("GCimg/CoinImg.png");
  TrackImg = loadImage("GCimg/track3.jpg");
  oilCanImg = loadImage("GCimg/oilCan1.png");
  carFlipImg = loadImage("GCimg/carFlip.jpg");
  formimg = loadImage("GCimg/formimg4.jpg");
  tracksound = loadSound("sounds/trackS.mp3");
  explosionS = loadSound("sounds/explosion.wav");
  swooshS = loadSound("sounds/swoosh.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  game = new Game();
  game.start();

 
}

function draw() {
  background(formimg);
  TrackImg.scale = 0.1; 
  if (gameState === 1) {
    game.play();
  }

}
