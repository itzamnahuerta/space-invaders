

// ----- space invadors game board ------ 

let player;
let aliens; 
let missles;
let spaceShipImage, boulderImage, alienImage, missleImage;


// alien testing ------------------- 
let alien1;
let alien2;

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
    player = createSprite(width/2, height - 30);
    player.addImage('normal',spaceShipImage);
    player.maxSpeed = 3;
    player.friction = 0.98;
    player.setCollider('circle', 0 ,0, 20 );

    boulder1 = createSprite(200, 500);
    boulder1.addImage(boulderImage);
    boulder2 = createSprite(450, 500);
    boulder2.addImage(boulderImage);
    boulder3 = createSprite(700,500);
    boulder3.addImage(boulderImage);

    // testing alien
    alien1 = createSprite(100,100);
    alien1.addImage(alienImage);
    alien1.velocity.x = 0.4;


    // going to create a group of aliens by row  ~~~~ 1 row = 11 aliens etc.
    // aliens = new Group();


    //  missle testing 
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


    //  for missle strike
    if(keyDown(UP_ARROW)){
        let missle = createSprite(player.position.x, player.position.y);
        missle.addImage(missleImage);

        missle.setSpeed(4 + player.getSpeed(), player.position.y + 320);
        // missle.life = 60;
        // missles.add(missle)
    }




    drawSprites();

}


