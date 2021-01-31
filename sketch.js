const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var drops = [];
var umbrella;
var maxDrops = 50;
var rand, thunder, thunderCreatedFrame;

function preload(){
thunder1 = loadImage("1.png");
thunder2 = loadImage("2.png");
thunder3 = loadImage("3.png");
thunder4 = loadImage("4.png");
}

function setup(){
    createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    
    umbrella = new Umbrella(200,500);
    umbrella.scale = 0.3;
    if(frameCount % 210 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(0);

    umbrella.display();

    //displaying the drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

    rand = Math.round(random(1,4));
    if (frameCount%80 === 0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10,10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage (thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3, 0.6);
    }
    if (thunderCreatedFrame +10 === frameCount && thunder){
        thunder.destroy();
    }
 
drawSprites();
}


//   https://github.com/rupinwhitehatjr/576dd8198153b2aa4dceade8929271c3
