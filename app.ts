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
import { Bank } from "./Bank";
import { credits,creditsBankText,creditsMinus,creditsPlus,counterText } from "./src/texts_consts";

//  Pixi App
const app = new PIXI.Application({
  width: 1550,
  height: 750,
  backgroundColor: "lightblue",
  antialias: true,
  view: document.getElementById("game-canvas") as HTMLCanvasElement,
});

const cat = new Player(textureCat, 80, 545, 80, 80, "Cat");
const rabbit = new Player(textureRabbit, 80, 600, 80, 80, "Rabbit");
const dog = new Player(textureDog, 80, 660, 80, 80, "Dog");
const pig = new Player(texturePig, 80, 700, 120, 100, "Pig");

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
counterContainer.addChild(counterText);

function updateCounter() {
  count++;
  counterText.text = `Race №: ${count}`;
}



let bank = new Bank(credits);



//  Update BetContainer
const mainText: PIXI.Text = new PIXI.Text(
  `Select your runner to bet on!`,
  style2
);
betContainer.addChild(mainText);

//  Bet Pets Pointer Events
let selectedPet: any = null;

const petText: PIXI.Text = new PIXI.Text(
  `Your bet is ${selectedPet}! Good luck!`,
  style2
);

//  Find Winners Function
const findWinner = (pet: string) => {

    console.log("error   !!!!");

    let winnerText = betContainer.getChildByName("winnerText");
    if (!winnerText) {
      winnerText = new PIXI.Text(
        `${selectedPet} is winner! Congratulations!`,
        style2
      );
      winnerText.name = "winnerText";
    }

    if (selectedPet === pet) {
      bank.bankPlus();

      betContainer.removeChildren();
      betContainer.addChild(winnerText);

      new TWEEN.Tween({ x: 1, y: 1 })
        .to({ x: 1.3, y: 1.3 }, 1500)
        .yoyo(true)
        .repeat(10)
        .onUpdate((data) => {
          winnerText?.scale.set(data.x, data.y);
          console.log("scale", data);
        })
        .start();
    } else {
      // betContainer.removeChildren();
      // betContainer.addChild(
      //   new PIXI.Text(
      //     `Unfortunately you lost this time.
      //   Try again!`,
      //     style2
      //   )
      // );
      mainText.text = `Unfortunately you lost this time.
      //   Try again!`
  }

};

//  Bet Pet
let isBet = false;
const pets = [cat, rabbit, dog, pig];
pets.forEach((pet) => {
  pet.animatedSprite.on("pointerdown", () => {
    if (!isBet) {
      betContainer.removeChildren();
      selectedPet = pet.id;
      petText.text = `Your bet is ${pet.id}! Good luck!`;
      betContainer.addChild(petText);
      bankContainer.removeChildren();
      bank.bankMinus();
      isBet = true;
    }
  });
});

//  Function StartRace
function startRace() {

  resetButton.interactive = false;
  bank.updateBankText()
  listContainer.removeChildren();
  const finishers: string[] = [];
  const promises : Promise<void> [] = [];
  pets.forEach((pet) => {
    // Reset Implementation
    resetButton.on("pointerdown", () => {
      betContainer.removeChildren();
      betContainer.addChild(mainText);
      pet.startPosition();
      selectedPet = null;
      isBet = false;
    });

    const speed = Math.random() * 2 + 1;
    pet.animatedSprite.play();

    const promise = new Promise <void>(resolve => {
      pet.moveTweens(1500, speed * 222).onComplete(() => {
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
        resolve()
      });

    })
    promises.push(promise)


  })
  Promise.all(promises).then(()=> {
    findWinner(finishers[0]);
  })
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
  counterContainer,
  bank.bankContainer
);
