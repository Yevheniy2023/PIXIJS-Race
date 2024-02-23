import * as PIXI from "pixi.js";

//  Rabbit Texture
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
const textureRabbit = rabbitImages.map((image) => PIXI.Texture.from(image));

//  Dog Texture
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
const textureDog = dogImages.map((image) => PIXI.Texture.from(image));

//  Pig Texture
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
const texturePig = pigImages.map((image) => PIXI.Texture.from(image));

// //  Cat Texture
const catImages = [
  "img/cat/cat1.png",
  "img/cat/cat2.png",
  "img/cat/cat3.png",
  "img/cat/cat4.png",
  "img/cat/cat5.png",
  "img/cat/cat6.png",
];
const textureCat = catImages.map((image) => PIXI.Texture.from(image));

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
const line: PIXI.Graphics = new PIXI.Graphics();
line.lineStyle(5, "violet", 1).moveTo(145, 570).lineTo(145, 800);

// Finish object
const finish = PIXI.Sprite.from("img/finish.png");
finish.x = 1400;
finish.y = 570;

// Finish List
let listContainer: PIXI.Container = new PIXI.Container();
listContainer.position.set(5, 5);

//  Background clouds
const cloudTexture = PIXI.Texture.from("img/clouds2.png");
export const cloudsSPrite = new PIXI.TilingSprite(
  cloudTexture,
  screen.width,
  screen.height / 4
);

//  Background Trees
const treesTexture = PIXI.Texture.from("img/grass2.png");
export const treesSPrite = new PIXI.TilingSprite(
  treesTexture,
  screen.width,
  screen.height / 1
);
treesSPrite.y = 180;

//  Bank Container
export const bankContainer: PIXI.Container = new PIXI.Container();
bankContainer.x = 700;
bankContainer.y = 25;

//  Bet Container
const betContainer: PIXI.Container = new PIXI.Container();
betContainer.x = 500;
betContainer.y = 200;

//  Counter Container Number Race
export const counterContainer: PIXI.Container = new PIXI.Container();
counterContainer.x = 1300;
counterContainer.y = 25;

export {
  textureRabbit,
  textureCat,
  textureDog,
  texturePig,
  start,
  line,
  finish,
  listContainer,
  startButton,
  resetButton,
  betContainer,
};
