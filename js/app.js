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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pig = exports.dog = exports.cat = exports.rabbit = void 0;
const PIXI = __importStar(require("pixi.js"));
const objects_1 = require("./objects");
// import { rabbit, cat, dog, pig } from "./Player";
const styles_1 = require("./styles");
const TWEEN = __importStar(require("@tweenjs/tween.js"));
const gsap_1 = __importDefault(require("gsap"));
const objects_2 = require("./objects");
class Player extends PIXI.AnimatedSprite {
    id;
    constructor(textures, x, y, width, height, animationSpeed, id) {
        super(textures);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.animationSpeed = animationSpeed;
        this.anchor.set(0.5);
        (this.eventMode = "static"), (this.cursor = "pointer"), (this.id = id);
        this.on("pointerdown", this.select.bind(this));
    }
    select() {
        selectedPet = this.id;
        betContainer.removeChildren();
        petText.text = `Your bet is ${selectedPet}! Good luck!`;
        betContainer.addChild(petText);
        bankContainer.removeChildren();
        bank -= 20;
        bankText.text = `Bank: ${bank}`;
        bankContainer.addChild(bankText);
    }
}
const cat = new Player(objects_2.textureCat, 80, 545, 80, 80, 0.4, "Cat");
exports.cat = cat;
const rabbit = new Player(objects_2.textureRabbit, 80, 600, 80, 80, 0.4, "Rabbit");
exports.rabbit = rabbit;
const dog = new Player(objects_2.textureDog, 80, 660, 80, 80, 0.2, "dog");
exports.dog = dog;
const pig = new Player(objects_2.texturePig, 80, 710, 120, 80, 0.4, "Pig");
exports.pig = pig;
//  Pixi App
const app = new PIXI.Application({
    width: 1550,
    height: 750,
    backgroundColor: "lightblue",
    antialias: true,
    view: document.getElementById("game-canvas"),
});
//  Background Trees
const treesTexture = PIXI.Texture.from("img/grass2.png");
const treesSPrite = new PIXI.TilingSprite(treesTexture, app.screen.width, app.screen.height / 1);
treesSPrite.y = 180;
app.stage.addChild(treesSPrite);
//  Background clouds
const cloudTexture = PIXI.Texture.from("img/clouds2.png");
const cloudsSPrite = new PIXI.TilingSprite(cloudTexture, app.screen.width, app.screen.height / 4);
app.ticker.add(function () {
    cloudsSPrite.tilePosition.x += 0.3;
});
app.stage.addChild(cloudsSPrite);
//  Event Pointerdown Start Button
let isEvent = false;
objects_1.startButton.on("pointerdown", () => {
    if (!isEvent) {
        isEvent = true;
        launch();
    }
});
//  Counter Container Number Race
let count = 0;
const counterContainer = new PIXI.Container();
counterContainer.x = 1300;
counterContainer.y = 25;
app.stage.addChild(counterContainer);
const counterText = new PIXI.Text(`Race №: `, styles_1.style);
counterContainer.addChild(counterText);
//  Update Counter Number Race
function updateCounter() {
    count++;
    counterText.text = `Race №: ${count}`;
}
//  Bank Container
let bank = 200;
const bankContainer = new PIXI.Container();
bankContainer.x = 700;
bankContainer.y = 25;
app.stage.addChild(bankContainer);
const bankText = new PIXI.Text(`Bank: ${bank}`, styles_1.style);
bankContainer.addChild(bankText);
//  Bet Container
const betContainer = new PIXI.Container();
betContainer.x = 500;
betContainer.y = 200;
app.stage.addChild(betContainer);
const betText = new PIXI.Text(`Select your runner to bet on!`, styles_1.style2);
betContainer.addChild(betText);
//  Bet Pets Pointer Events
let selectedPet = null;
const petText = new PIXI.Text(`Your bet is ${selectedPet}! Good luck!`, styles_1.style2);
pig.select;
cat.select;
rabbit.select;
dog.select;
//  Check Bet Function
const checkBet = (pet) => {
    //  Animated Text
    const winnerText = new PIXI.Text(`${selectedPet} is winner! Congratulations!`, styles_1.style2);
    const t1 = gsap_1.default.timeline({ repeat: -1, repeatDelay: 1 });
    t1.to(winnerText.scale, { x: 1.2, y: 1.2, duration: 2 });
    t1.to(winnerText.scale, { x: 1, y: 1, duration: 1.3 });
    if (selectedPet === pet) {
        bank += 30;
        bankText.text = `Bank: ${bank}`;
        betContainer.removeChildren();
        betContainer.addChild(winnerText);
        t1.play();
    }
    else {
        betContainer.removeChildren();
        betContainer.addChild(new PIXI.Text(`Unfortunately you lost this time.
      Try again!`, styles_1.style2));
    }
};
//  Function Lounch
const pets = [cat, rabbit, dog, pig];
function launch() {
    bankText.text = `Bank: ${bank}`;
    objects_1.maskContainer.removeChildren();
    const finishers = [];
    finishers.length = 0;
    pets.forEach((pet) => {
        // Reset Implementation
        objects_1.resetButton.on("pointerdown", () => {
            betContainer.removeChildren();
            betContainer.addChild(betText);
            pet.position.x = 80;
            selectedPet = null;
        });
        const targetX = 1500;
        const speed = Math.random() * 2 + 1;
        pet.play();
        const tween = new TWEEN.Tween(pet);
        tween
            .to({ x: targetX }, speed * 999)
            .start()
            .onComplete(() => {
            const index = pets.indexOf(pet);
            if (index + 1 === 1) {
                finishers.push("Cat");
                console.log(cat.id);
            }
            if (index + 1 === 2) {
                finishers.push("Rabbit");
            }
            if (index + 1 === 3) {
                finishers.push("Dog");
            }
            if (index + 1 === 4) {
                finishers.push("Pig");
            }
            pet.stop();
            if (finishers.length >= 4) {
                isEvent = false;
            }
            console.log(finishers);
            finishers.forEach((winner, index) => {
                const text = new PIXI.Text(` ${index + 1}. ${winner}`, styles_1.style);
                text.y = index * 60;
                objects_1.maskContainer.addChild(text);
            });
            checkBet(finishers[0]);
        });
    });
    app.ticker.add(() => {
        TWEEN.update();
    });
    updateCounter();
}
app.stage.addChild(objects_1.start, objects_1.line, objects_1.finish, cat, rabbit, dog, pig, objects_1.maskContainer, objects_1.startButton, objects_1.resetButton);
