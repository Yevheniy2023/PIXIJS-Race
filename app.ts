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
import { textureRabbit, textureCat, textureDog, texturePig } from "./objects";
import { Player } from "./Player";

//  Pixi App
const app = new PIXI.Application({
  width: 1550,
  height: 750,
  backgroundColor: "lightblue",
  antialias: true,
  view: document.getElementById("game-canvas") as HTMLCanvasElement,
});

const cat = new Player(textureCat, 80, 545, 80, 80, "Cat");
const rabbit = new Player(textureRabbit,80,600,80,80,'Rabbit')
const dog = new Player(textureDog,80,660,80,80,'Dog')
const pig = new Player(texturePig,80,700,120,100,'Pig')


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
let bank = 1000;

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


//  Check Bet Function
const checkBet = (pet: string) => {
  console.log('error   !!!!');


  let winnerText = betContainer.getChildByName('winnerText')
  if (!winnerText) {

     winnerText = new PIXI.Text(
      `${selectedPet} is winner! Congratulations!`,
      style2
    );
    winnerText.name = 'winnerText'
  }

  if (selectedPet === pet) {
    bank += 30;
    bankText.text = `Bank: ${bank}`;
    betContainer.removeChildren();
    betContainer.addChild(winnerText);


    const animatedText = new TWEEN.Tween({x: 1,y: 1})
    .to({x:2, y: 2}, 1500)
    .yoyo(true)
    .repeat(10)
    .onUpdate((data)=> {
      winnerText?.scale.set(data.x,data.y)
      console.log('scale',data);

    })
    .start()

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
const pets = [cat,rabbit,dog,pig];
function startRace() {
  resetButton.interactive = false;
  bankText.text = `Bank: ${bank}`;
  listContainer.removeChildren();
  const finishers: string[]  = [];
  pets.forEach((pet) => {
    pet.select("")
      selectedPet = pet.id;
      betContainer.removeChildren();
      petText.text = `Your bet is ${selectedPet}! Good luck!`;
      betContainer.addChild(petText);
      bankContainer.removeChildren();
      bank -= 2110;
      bankText.text = `Bank: ${bank}`;
      bankContainer.addChild(bankText);


   // Reset Implementation
    resetButton.on("pointerdown", () => {
      betContainer.removeChildren();
      betContainer.addChild(betText);
      pet.animatedSprite.position.x = 80;
      selectedPet = null;
    });
    const speed = Math.random() * 2 + 1;
    pet.animatedSprite.play();
    const tween = new TWEEN.Tween(pet.animatedSprite);
    tween
      .to({ x: 1500 }, speed * 999)
      .start()
      .onComplete(() => {
        finishers.push(pet.id);
        pet.animatedSprite.stop();
        if (finishers.length >= 4) {
          isEvent = false;
          resetButton.interactive = true;
        }
        finishers.forEach((winner: any, index: any) => {
          const text = new PIXI.Text(` ${index + 1}. ${winner}`, style);
          text.y = index * 60;
          listContainer.addChild(text);
        });
        checkBet(pets[0].id);
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
  cat.animatedSprite,
  rabbit.animatedSprite,
  dog.animatedSprite,
  pig.animatedSprite,
  listContainer,
  startButton,
  resetButton,
  bankContainer,
  betContainer,
  counterContainer
);
