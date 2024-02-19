import * as PIXI from "pixi.js";

//  Rabbit
const rabbitImages = [
  "img/yellowRabbit/rabbit1.png",
  "img/yellowRabbit/rabbit2.png",
  "img/yellowRabbit/rabbit3.png",
  "img/yellowRabbit/rabbit4.png",
  "img/yellowRabbit/rabbit5.png",
  "img/yellowRabbit/rabbit6.png",
  "img/yellowRabbit/rabbit7.png",
  "img/yellowRabbit/rabbit8.png",
];
const textureRabbit = [];
for (let i = 0; i < 8; i++) {
  const texture = PIXI.Texture.from(rabbitImages[i]);
  textureRabbit.push(texture);
}
const rabbit = new PIXI.AnimatedSprite(textureRabbit);
rabbit.animationSpeed = 0.4;
rabbit.width = 80;
rabbit.height = 80;
rabbit.x = 70;
rabbit.y = 600;
rabbit.anchor.set(0.5);
rabbit.eventMode = "static";
rabbit.cursor = "pointer";

//  Dog
const dogImages = [
  "img/dog/doggy1.png",
  "img/dog/doggy2.png",
  "img/dog/doggy3.png",
  "img/dog/doggy4.png",
  "img/dog/doggy5.png",
  "img/dog/doggy6.png",
  "img/dog/doggy7.png",
  "img/dog/doggy8.png",
  "img/dog/doggy9.png",
];
const textureDog = [];
for (let i = 0; i < 9; i++) {
  const texture = PIXI.Texture.from(dogImages[i]);
  textureDog.push(texture);
}
const dog = new PIXI.AnimatedSprite(textureDog);
dog.animationSpeed = 0.2;
dog.width = 110;
dog.height = 75;
dog.x = 70;
dog.y = 660;
dog.anchor.set(0.5);
dog.eventMode = "static";
dog.cursor = "pointer";

//  Pig
const pigImages = [
  "img/piggy/pig1.png",
  "img/piggy/pig2.png",
  "img/piggy/pig3.png",
  "img/piggy/pig4.png",
  "img/piggy/pig5.png",
  "img/piggy/pig6.png",
  "img/piggy/pig7.png",
  "img/piggy/pig8.png",
  "img/piggy/pig9.png",
  "img/piggy/pig10.png",
  "img/piggy/pig11.png",
];
const texturePig = [];
for (let i = 0; i < 11; i++) {
  const texture = PIXI.Texture.from(pigImages[i]);
  texturePig.push(texture);
}
const pig = new PIXI.AnimatedSprite(texturePig);
pig.animationSpeed = 0.3;
pig.width = 140;
pig.height = 70;
pig.x = 70;
pig.y = 715;
pig.anchor.set(0.5);
pig.eventMode = "static";
pig.cursor = "pointer";

// //  Cat
const catImages = [
  "img/cat/cat1.png",
  "img/cat/cat2.png",
  "img/cat/cat3.png",
  "img/cat/cat4.png",
  "img/cat/cat5.png",
  "img/cat/cat6.png",
];
const textureCat = [];
for (let i = 0; i < 6; i++) {
  const texture = PIXI.Texture.from(catImages[i]);
  textureCat.push(texture);
}
const cat = new PIXI.AnimatedSprite(textureCat);
cat.animationSpeed = 0.5;
cat.width = 80;
cat.height = 80;
cat.x = 70;
cat.y = 550;
cat.anchor.set(0.5);
cat.eventMode = "static";
cat.cursor = "pointer";
// function init() {
//     PIXI.Assets.load('spriteSheets/blueCat.json')
//         .then(() => {
//             const frames = [];
//             for (let i = 1; i < 7; i++) {
//                 const rab = PIXI.Texture.from(`cat${i}.png`)
//                 frames.push(rab)
//             }
//             const blueCat = new PIXI.AnimatedSprite(frames)
//             app.stage.addChild(blueCat)
//             blueCat.animationSpeed = 0.3
//             blueCat.width = 80
//             blueCat.height = 80
//             blueCat.x = 20
//             blueCat.y = 700
//             blueCat.anchor.set(0.5)
//             blueCat.x += 1
//             blueCat.play()
//             app.ticker.add(() => {
//                 if (blueCat.x <= 1530) {
//                     blueCat.x += Math.random() * (blueCat.x = 6)
//                 }
//                 if (blueCat.x > 1530) {
//                     blueCat.stop()
//                 }
//             })
//         })
// }

// Start object
const start = PIXI.Sprite.from("img/start.png");
start.width = 150;
start.height = 150;
start.x = 10;
start.y = 440;

//  Start Button
const startButton = PIXI.Sprite.from("img/startButton.png");
startButton.width = 250;
startButton.height = 150;
startButton.x = 220;
startButton.y = 20;
startButton.eventMode = "static";
startButton.cursor = "pointer";

//  Reset Button
const resetButton = PIXI.Sprite.from("img/resetButton2.png");
resetButton.width = 200;
resetButton.height = 90;
resetButton.x = 240;
resetButton.y = 200;
resetButton.eventMode = "static";
resetButton.cursor = "pointer";

//  Line
const Graphics = PIXI.Graphics;
const line = new Graphics();
line.lineStyle(5, "violet", 1).moveTo(145, 570).lineTo(145, 800);

// Finish object
const finish = PIXI.Sprite.from("img/finish.png");
finish.x = 1400;
finish.y = 570;

// Finish List
let mask = new PIXI.Graphics();

mask.beginFill(0xffffff);
mask.drawRect(0,0,250,300);
mask.endFill();

let maskContainer = new PIXI.Container();
maskContainer.mask = mask;
maskContainer.addChild(mask);
maskContainer.position.set(5, 5);

//  Text Style
const style = new PIXI.TextStyle({
  fontFamily: "Waltograph",
  fontSize: 48,
  fill: ["lightblue", "violet"],
  stroke: "#000000",
  strokeThickness: 4,
  dropShadow: true,
  dropShadowColor: "#00FFFF",
  dropShadowBlur: 30,
  dropShadowDistance: 9,
});

const style2 = new PIXI.TextStyle({
  fontFamily: "Arial",
  fontSize: 55,
  fill: ["#ffffff"],
  stroke: "#ff00ff",
  strokeThickness: 4,
  dropShadow: true,
  dropShadowColor: "#ff00ff",
  dropShadowBlur: 20,
  dropShadowAngle: 0,
  dropShadowDistance: 0,
  align: "center",
});

export {
  rabbit,
  dog,
  pig,
  cat,
  start,
  line,
  finish,
  maskContainer,
  startButton,
  resetButton,
  style,
  style2
};
