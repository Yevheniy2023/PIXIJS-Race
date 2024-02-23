import * as PIXI from "pixi.js";
import {
  start,
  line,
  finish,
  listContainer,
  startButton,
  resetButton,
  treesSPrite,
  bankContainer,
  betContainer,
  cloudsSPrite,
  counterContainer,
} from "./objects";
import { style, style2 } from "./styles";
import * as TWEEN from "@tweenjs/tween.js";
import gsap from "gsap";
import { textureRabbit, textureCat, textureDog, texturePig } from "./objects";
import { chosenRabbit, chosenCat, chosenDog, chosenPig } from "./ChosenPlayer";

//  Pixi App
const app = new PIXI.Application({
  width: 1550,
  height: 750,
  backgroundColor: "lightblue",
  antialias: true,
  view: document.getElementById("game-canvas") as HTMLCanvasElement,
});

//  Class Player
class Player extends PIXI.AnimatedSprite {
  id: string;
  constructor(
    textures: PIXI.Texture[],
    x: number,
    y: number,
    width: number,
    height: number,
    animationSpeed: number,
    id: string
  ) {
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

    if(selectedPet === rabbit.id) {
      app.stage.addChild(chosenRabbit)
    }
    if(selectedPet === cat.id) {
      app.stage.addChild(chosenCat)
    }
    if(selectedPet === dog.id) {
      app.stage.addChild(chosenDog)
    }
    if(selectedPet === pig.id) {
      app.stage.addChild(chosenPig)
    }
  }
}
const cat = new Player(textureCat, 80, 545, 80, 80, 0.4, "Cat");
const rabbit = new Player(textureRabbit, 80, 600, 80, 80, 0.4, "Rabbit");
const dog = new Player(textureDog, 80, 660, 80, 80, 0.2, "Dog");
const pig = new Player(texturePig, 80, 710, 120, 80, 0.4, "Pig");

app.ticker.add(function () {
  cloudsSPrite.tilePosition.x += 0.3;
});

//  Event Pointerdown Start Button
let isEvent = false;
startButton.on("pointerdown", () => {
  if (!isEvent) {
    isEvent = true;
    startRace();
  }
});

//  Update Counter Number Race
let count = 0;
const counterText: PIXI.Text = new PIXI.Text(`Race №: `, style);
counterContainer.addChild(counterText);

function updateCounter() {
  count++;
  counterText.text = `Race №: ${count}`;
}

//  Update Bank
let bank = 200;

const bankText = new PIXI.Text(`Bank: ${bank}`, style);
bankContainer.addChild(bankText);

//  Update BetContainer
const betText: PIXI.Text = new PIXI.Text(
  `Select your runner to bet on!`,
  style2
);
betContainer.addChild(betText);

//  Bet Pets Pointer Events
let selectedPet: any = false;

const petText: PIXI.Text = new PIXI.Text(
  `Your bet is ${selectedPet}! Good luck!`,
  style2
);
if(!selectedPet) {
  pig.select;
  cat.select;
  rabbit.select;
  dog.select;
}


//  Check Bet Function
const checkBet = (pet: string) => {
  const winnerText = new PIXI.Text(
    `${selectedPet} is winner! Congratulations!`,
    style2
  );

  //  Animated Text
  const t1 = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  t1.to(winnerText.scale, { x: 1.2, y: 1.2, duration: 2 });
  t1.to(winnerText.scale, { x: 1, y: 1, duration: 1.3 });

  if (selectedPet === pet) {
    bank += 30;
    bankText.text = `Bank: ${bank}`;
    betContainer.removeChildren();
    betContainer.addChild(winnerText);

    t1.play();
  } else {
    betContainer.removeChildren();
    betContainer.addChild(
      new PIXI.Text(
        `Unfortunately you lost this time.
      Try again!`,
        style2
      )
    );
  }
};

//  Function Launch
const pets = [cat, rabbit, dog, pig];
function startRace() {
  resetButton.interactive = false;
  app.stage.removeChild(chosenRabbit, chosenCat, chosenDog, chosenPig);
  bankText.text = `Bank: ${bank}`;
  listContainer.removeChildren();
  const finishers: any = [];
  pets.forEach((pet) => {
    // Reset Implementation
    resetButton.on("pointerdown", () => {
      betContainer.removeChildren();
      betContainer.addChild(betText);
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
          resetButton.interactive = true;
        }
        finishers.forEach((winner: any, index: any) => {
          const text = new PIXI.Text(` ${index + 1}. ${winner}`, style);
          text.y = index * 60;
          listContainer.addChild(text);
        });
        checkBet(finishers[0]);
      });
  });
  app.ticker.add(() => {
    TWEEN.update();
  });
  updateCounter();
}

app.stage.addChild(
  cloudsSPrite,
  treesSPrite,
  start,
  line,
  finish,
  cat,
  rabbit,
  dog,
  pig,
  listContainer,
  startButton,
  resetButton,
  bankContainer,
  betContainer,
  counterContainer
);
