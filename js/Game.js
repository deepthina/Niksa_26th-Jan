class Game {
  constructor() {}

  start() {
    form = new Form();
    form.play();

    player = new Player();
    //Adding the Images
    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", playerCarimg);
    car1.addImage("flip", carFlipImg);
    car1.changeImage("car1");
    car1.scale = 1;
    car1.velocityY = -1;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", playerCarimg2);
    car2.scale = 1;
    car2.velocityY = -5;

    // car3 = createSprite();
    // car3.addImage("car1", playerCarimg3);
    // car3.scale = 1;

    // car4 = createSprite();
    // car4.addImage("car2", playerCarimg4);
    // car4.scale = 1;

    coinGrp = new Group();
    oilGrp = new Group();
    this.addSprites(coinGrp, 3, coinImg, 0.6);
    this.addSprites(oilGrp, 4, oilCanImg, 0.8);
  }
  play() {
    background(TrackImg);
    image(TrackImg, 0, -height, width, height * 3);
    //background("white");
    //  track = createSprite(width/2,height/2, width*2,height*2);
    //  track.addImage("track", TrackImg);

    //  track.velocityY= -3
    camera.position.y = car1.position.y;
    //For moving the car in Up direction
    if (keyIsDown(UP_ARROW)) {
      car1.y -= 9;

      console.log(car1.x);
      console.log(car1.y);
    }
    //For moving the car in Left direction
    if (keyIsDown(LEFT_ARROW)) {
      car1.x -= 5;
    }
    //For moving the car in Right direction
    if (keyIsDown(RIGHT_ARROW)) {
      car1.x += 5;
    }
    // this.collisionWithOIL();
    drawSprites();
  }
  addSprites(spritegroup, numberOfSprites, spriteImage, spriteScale) {
    for (var i = 0; i < numberOfSprites; i++) {
      var x, y;
      x = random(270, width - 270);
      y = random(50, height - 50);

      var Sprite = createSprite(x, y);
      Sprite.addImage("sprites", spriteImage);
      spritegroup.add(Sprite);
      Sprite.scale = spriteScale;
    }
  }

  collisionWithOIL() {
    car1.overlap(oilGrp, function (collector, collected) {
      collected.remove();
      flipped = createSprite(collector.x, collector.y);
      collector.remove();
      flipped.addImage("flippedCar", carFlipImg);
    });
  }
}
