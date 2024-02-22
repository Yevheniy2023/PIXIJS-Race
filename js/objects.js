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
exports.resetButton = exports.startButton = exports.maskContainer = exports.finish = exports.line = exports.start = exports.texturePig = exports.textureDog = exports.textureCat = exports.textureRabbit = void 0;
const PIXI = __importStar(require("pixi.js"));
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
exports.textureRabbit = textureRabbit;
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
exports.textureDog = textureDog;
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
exports.texturePig = texturePig;
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
exports.textureCat = textureCat;
// Start object
const start = PIXI.Sprite.from("img/start.png");
exports.start = start;
start.width = 150;
start.height = 150;
start.x = 10;
start.y = 440;
//  Start Button
const startButton = PIXI.Sprite.from("img/startButton.png");
exports.startButton = startButton;
startButton.width = 250;
startButton.height = 150;
startButton.x = 220;
startButton.y = 20;
startButton.eventMode = "static";
startButton.cursor = "pointer";
//  Reset Button
const resetButton = PIXI.Sprite.from("img/resetButton2.png");
exports.resetButton = resetButton;
resetButton.width = 200;
resetButton.height = 90;
resetButton.x = 240;
resetButton.y = 200;
resetButton.eventMode = "static";
resetButton.cursor = "pointer";
//  Line
const Graphics = PIXI.Graphics;
const line = new Graphics();
exports.line = line;
line.lineStyle(5, "violet", 1).moveTo(145, 570).lineTo(145, 800);
// Finish object
const finish = PIXI.Sprite.from("img/finish.png");
exports.finish = finish;
finish.x = 1400;
finish.y = 570;
// Finish List
let mask = new PIXI.Graphics();
mask.beginFill(0xffffff);
mask.drawRect(0, 0, 250, 300);
mask.endFill();
let maskContainer = new PIXI.Container();
exports.maskContainer = maskContainer;
maskContainer.mask = mask;
maskContainer.addChild(mask);
maskContainer.position.set(5, 5);
