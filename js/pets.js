"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.finish = exports.line = exports.start = exports.cat = exports.pig = exports.dog = exports.rabbit = void 0;
const PIXI = __importStar(require("pixi.js"));
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
exports.rabbit = rabbit;
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
exports.dog = dog;
dog.animationSpeed = 0.15;
dog.width = 120;
dog.height = 85;
dog.x = 70;
dog.y = 650;
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
exports.pig = pig;
pig.animationSpeed = 0.3;
pig.width = 140;
pig.height = 90;
pig.x = 70;
pig.y = 700;
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
exports.cat = cat;
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
exports.start = start;
start.width = 150;
start.height = 150;
start.x = 10;
start.y = 440;
start.eventMode = "static";
start.cursor = "pointer";
//  Line
const Graphics = PIXI.Graphics;
const line = new Graphics();
exports.line = line;
line.lineStyle(5, "red", 1).moveTo(145, 570).lineTo(145, 800);
// Finish object
const finish = PIXI.Sprite.from("img/finish.png");
exports.finish = finish;
finish.x = 1400;
finish.y = 570;
