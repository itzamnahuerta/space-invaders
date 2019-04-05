// ----- space invadors game board ------ 

let player;
let aliens = []; 
let missles = [];
let spaceShipImage, boulderImage, alienImage, missleImage;

// --------alien rows --------------
let alienRow1;
let alienRow2;
let alienRow3;
let alienRow4;
//  --------------------------------

function preload(){
    spaceShipImage = loadImage('../media/space-ship.png');
    boulderImage = loadImage('../media/boulder.png');
    alienImage = loadImage('../media/alien.png');
}

// Sprite is the main building block of p5.play
// https://molleindustria.github.io/p5.play/docs/classes/Sprite.html

function setup(){
    createCanvas(900, 700);

    // spaceship = player 
    player = createSprite(width/2, height - 30);
    player.addImage('normal',spaceShipImage);
    player.maxSpeed = 2;
    player.friction = 0.98;
    player.setCollider('circle', 0 ,0, 20 );

    // boulders are static
    boulder1 = createSprite(200, 500);
    boulder1.addImage(boulderImage);
    boulder2 = createSprite(450, 500);
    boulder2.addImage(boulderImage);
    boulder3 = createSprite(700,500);
    boulder3.addImage(boulderImage);


    //  ----------- level 1 of game ------------
    alienRow1 = createAlienRow(10, 50);
    alienRow2 = createAlienRow(10,100);
    alienRow3 = createAlienRow(10, 150);
    alienRow4 = createAlienRow(10,200);

    // missle 
    missleImage = loadImage('../media/missle.png')
    missles = new Group()
}

function draw(){
    background(255,0,0);

    //  controll the spaceship by using left & right arrow key
    // condition to constrain the image of the spacewith within the canvas
    if(keyDown(RIGHT_ARROW) && (player.position.x < 850))
    {
        player.position.x = player.position.x + 4 ;
        // console.log(player.position.x)
    }

    if(keyDown(LEFT_ARROW) && (player.position.x > 50))
    {
        player.position.x = player.position.x - 4;
        // console.log(player.position.x)
    }

    // shoot missle vertically 
    if(keyDown(UP_ARROW))
    {
        let missle = createSprite(player.position.x, player.position.y);
        missle.addImage(missleImage);
        missle.setSpeed(4 + player.getSpeed(), player.position.y + 320);
        missle.life = 500;
        missles.add(missle)
    }

    //  alien movement position within canvas
    for(let a=0; a < aliens.length; a++){
        if(aliens[a].position.x > 900){
            aliens[a].position.x = 0;
        }
        // target + shoot aliens off of screen ]
        // set a conditional so that this happens stop the trajectory of the missle hence remove it 
        aliens[a].overlap(missles,alienHit); 
    }
    drawSprites();
}

function alienHit(alien, missles){
    let explode = alien.type - 1;

    alien.remove();
    missles.remove();
}
//  how to get missle to stop its trajectory 
// 

function createAlienRow(xR, yR){
    for(let a = 0; a < 8; a++){
        createAlien(xR + (a *70), yR);
    }
}

function createAlien(position_x, position_y){
    let create_alien = createSprite(position_x,position_y);
    create_alien.addImage(alienImage);
    create_alien.velocity.x = 0.8;
    aliens.push(create_alien);
};
