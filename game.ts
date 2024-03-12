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
  mainTextContainer,
  cloudsSPrite,
  counterContainer,
} from "./src/objects";
import { style, style2 } from "./src/styles";
import * as TWEEN from "@tweenjs/tween.js";
import {
  textureRabbit,
  textureCat,
  textureDog,
  texturePig,
} from "./src/objects";
import { Player } from "./src/Player";
import { bank } from "./src/Bank";
import { counterText } from "./src/texts_consts";
import { mainText } from "./src/texts_consts";
import { app } from "./app";

export function game() {
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

  //  Bet Pets Pointer Events
  let selectedPet: any = null;

  //  Find Winners Function
  const findWinner = (pet: string) => {
    console.log("error   !!!!");

    let winnerText = mainTextContainer.getChildByName("winnerText");
    if (!winnerText) {
      winnerText = new PIXI.Text(
        `${selectedPet} is winner! Congratulations!`,
        style2
      );
      winnerText.name = "winnerText";
    }

    if (selectedPet === pet) {
      bank.bankPlus();

      mainText.clearText();
      mainTextContainer.addChild(winnerText);

      new TWEEN.Tween({ x: 1, y: 1 })
        .to({ x: 1.3, y: 1.3 }, 1500)
        .yoyo(true)
        .repeat(10)
        .onUpdate((data) => {
          winnerText?.scale.set(data.x, data.y);
        })
        .start();
    } else {
      mainText.clearText();
      mainText.setText(`Unfortunately you lost this time.
    Try again!`);
    }
  };

  //  Bet Pet
  let isBet = false;
  const pets = [cat, rabbit, dog, pig];
  pets.forEach((pet) => {
    pet.click( () => {
      if (!isBet) {
        mainText.clearText();
        selectedPet = pet.id;
        mainText.setText(`Your bet is ${pet.id}! Good luck!`);
        bank.bankMinus();
        isBet = true;
      }
    });
  });

  //  Function StartRace
  function startRace() {
    resetButton.interactive = false;
    bank.updateBankText();
    listContainer.removeChildren();
    const finishers: string[] = [];
    const promises: Promise<void>[] = [];
    pets.forEach((pet) => {
      // Reset Implementation
      resetButton.on("pointerdown", () => {
        mainText.clearText();
        mainText.setText(`Select your runner to bet on!`);
        pet.startPosition();
        selectedPet = null;
        isBet = false;
      });

      const speed = Math.random() * 2 + 1;
      pet.animatedSprite.play();

      const promise = new Promise<void>((resolve) => {
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
          resolve();
        });
      });
      promises.push(promise);
    });
    Promise.all(promises).then(() => {
      findWinner(finishers[0]);
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
    mainTextContainer,
    counterContainer,
    bank.bankContainer
  );
}
