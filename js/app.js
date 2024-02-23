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
const PIXI = __importStar(require("pixi.js"));
const objects_1 = require("./objects");
const styles_1 = require("./styles");
const TWEEN = __importStar(require("@tweenjs/tween.js"));
const gsap_1 = __importDefault(require("gsap"));
const objects_2 = require("./objects");
const ChosenPlayer_1 = require("./ChosenPlayer");
//  Pixi App
const app = new PIXI.Application({
    width: 1550,
    height: 750,
    backgroundColor: "lightblue",
    antialias: true,
    view: document.getElementById("game-canvas"),
});
//  Class Player
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
        objects_1.betContainer.removeChildren();
        petText.text = `Your bet is ${selectedPet}! Good luck!`;
        objects_1.betContainer.addChild(petText);
        objects_1.bankContainer.removeChildren();
        bank -= 20;
        bankText.text = `Bank: ${bank}`;
        objects_1.bankContainer.addChild(bankText);
        if (selectedPet === rabbit.id) {
            app.stage.addChild(ChosenPlayer_1.chosenRabbit);
        }
        if (selectedPet === cat.id) {
            app.stage.addChild(ChosenPlayer_1.chosenCat);
        }
        if (selectedPet === dog.id) {
            app.stage.addChild(ChosenPlayer_1.chosenDog);
        }
        if (selectedPet === pig.id) {
            app.stage.addChild(ChosenPlayer_1.chosenPig);
        }
    }
}
const cat = new Player(objects_2.textureCat, 80, 545, 80, 80, 0.4, "Cat");
const rabbit = new Player(objects_2.textureRabbit, 80, 600, 80, 80, 0.4, "Rabbit");
const dog = new Player(objects_2.textureDog, 80, 660, 80, 80, 0.2, "Dog");
const pig = new Player(objects_2.texturePig, 80, 710, 120, 80, 0.4, "Pig");
app.ticker.add(function () {
    objects_1.cloudsSPrite.tilePosition.x += 0.3;
});
//  Event Pointerdown Start Button
let isEvent = false;
objects_1.startButton.on("pointerdown", () => {
    if (!isEvent) {
        isEvent = true;
        startRace();
    }
});
//  Update Counter Number Race
let count = 0;
const counterText = new PIXI.Text(`Race №: `, styles_1.style);
objects_1.counterContainer.addChild(counterText);
function updateCounter() {
    count++;
    counterText.text = `Race №: ${count}`;
}
//  Update Bank
let bank = 200;
const bankText = new PIXI.Text(`Bank: ${bank}`, styles_1.style);
objects_1.bankContainer.addChild(bankText);
//  Update BetContainer
const betText = new PIXI.Text(`Select your runner to bet on!`, styles_1.style2);
objects_1.betContainer.addChild(betText);
//  Bet Pets Pointer Events
let selectedPet = false;
const petText = new PIXI.Text(`Your bet is ${selectedPet}! Good luck!`, styles_1.style2);
if (!selectedPet) {
    pig.select;
    cat.select;
    rabbit.select;
    dog.select;
}
//  Check Bet Function
const checkBet = (pet) => {
    const winnerText = new PIXI.Text(`${selectedPet} is winner! Congratulations!`, styles_1.style2);
    //  Animated Text
    const t1 = gsap_1.default.timeline({ repeat: -1, repeatDelay: 1 });
    t1.to(winnerText.scale, { x: 1.2, y: 1.2, duration: 2 });
    t1.to(winnerText.scale, { x: 1, y: 1, duration: 1.3 });
    if (selectedPet === pet) {
        bank += 30;
        bankText.text = `Bank: ${bank}`;
        objects_1.betContainer.removeChildren();
        objects_1.betContainer.addChild(winnerText);
        t1.play();
    }
    else {
        objects_1.betContainer.removeChildren();
        objects_1.betContainer.addChild(new PIXI.Text(`Unfortunately you lost this time.
      Try again!`, styles_1.style2));
    }
};
//  Function Launch
const pets = [cat, rabbit, dog, pig];
function startRace() {
    objects_1.resetButton.interactive = false;
    app.stage.removeChild(ChosenPlayer_1.chosenRabbit, ChosenPlayer_1.chosenCat, ChosenPlayer_1.chosenDog, ChosenPlayer_1.chosenPig);
    bankText.text = `Bank: ${bank}`;
    objects_1.listContainer.removeChildren();
    const finishers = [];
    pets.forEach((pet) => {
        // Reset Implementation
        objects_1.resetButton.on("pointerdown", () => {
            objects_1.betContainer.removeChildren();
            objects_1.betContainer.addChild(betText);
            pet.position.x = 80;
            selectedPet = null;
        });
        const speed = Math.random() * 2 + 1;
        pet.play();
        const tween = new TWEEN.Tween(pet);
        tween
            .to({ x: 1500 }, speed * 999)
            .start()
            .onComplete(() => {
            finishers.push(pet.id);
            pet.stop();
            if (finishers.length >= 4) {
                isEvent = false;
                objects_1.resetButton.interactive = true;
            }
            finishers.forEach((winner, index) => {
                const text = new PIXI.Text(` ${index + 1}. ${winner}`, styles_1.style);
                text.y = index * 60;
                objects_1.listContainer.addChild(text);
            });
            checkBet(finishers[0]);
        });
    });
    app.ticker.add(() => {
        TWEEN.update();
    });
    updateCounter();
}
app.stage.addChild(objects_1.cloudsSPrite, objects_1.treesSPrite, objects_1.start, objects_1.line, objects_1.finish, cat, rabbit, dog, pig, objects_1.listContainer, objects_1.startButton, objects_1.resetButton, objects_1.bankContainer, objects_1.betContainer, objects_1.counterContainer);
