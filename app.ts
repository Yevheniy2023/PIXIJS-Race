import * as PIXI from "pixi.js";
import {
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
} from "./objects";
import * as TWEEN from "@tweenjs/tween.js";
import gsap from "gsap";

//  Pixi App
const app = new PIXI.Application({
  width: 1550,
  height: 750,
  backgroundColor: "lightblue",
  antialias: true,
  view: document.getElementById("game-canvas") as HTMLCanvasElement,
});

//  Background Trees
const treesTexture = PIXI.Texture.from("img/grass2.png");
const treesSPrite = new PIXI.TilingSprite(
  treesTexture,
  app.screen.width,
  app.screen.height / 1
);
treesSPrite.y = 180;
app.stage.addChild(treesSPrite);

//  Background clouds
const cloudTexture = PIXI.Texture.from("img/clouds2.png");
const cloudsSPrite = new PIXI.TilingSprite(
  cloudTexture,
  app.screen.width,
  app.screen.height / 4
);
app.ticker.add(function () {
  cloudsSPrite.tilePosition.x += 0.3;
});
app.stage.addChild(cloudsSPrite);

//  Event Pointerdown Start Button
let isEvent = false;
startButton.on("pointerdown", () => {
  if (!isEvent) {
    isEvent = true;
    lounch();
  }
});



//  Counter Container Number Race
let count = 0;

const counterContainer: PIXI.Container = new PIXI.Container();

counterContainer.x = 1300;
counterContainer.y = 25;

app.stage.addChild(counterContainer);

const counterText = new PIXI.Text(`Race №: `, style);
counterContainer.addChild(counterText);

//  Update Counter Number Race
function updateCounter() {
  count++;
  counterText.text = `Race №: ${count}`;
}

//  Bank Container
let bank = 200;
const bankContainer: PIXI.Container = new PIXI.Container();

bankContainer.x = 700;
bankContainer.y = 25;

app.stage.addChild(bankContainer);

const bankText = new PIXI.Text(`Bank: ${bank}`, style);
bankContainer.addChild(bankText);

//  Bet Container
const betContainer: PIXI.Container = new PIXI.Container();

betContainer.x = 500;
betContainer.y = 200;

app.stage.addChild(betContainer);

const betText = new PIXI.Text(`Select your runner to bet on!`, style2);
betContainer.addChild(betText);

//  Bet Pets Pointer Events
let selectedPet: any = null;

const petText = new PIXI.Text(`Your bet is ${selectedPet}! Good luck!`, style2);

pig.on("pointerdown", () => {

  selectedPet = "Pig";
  betContainer.removeChildren();
  petText.text = `Yor bet is ${selectedPet}! Good luck!`;
  betContainer.addChild(petText);
  bankContainer.removeChildren();
  bank -= 20;
  bankText.text = `Bank: ${bank}`;
  bankContainer.addChild(bankText);
});

cat.on("pointerdown", () => {
  selectedPet = "Cat";
  betContainer.removeChildren();
  petText.text = `Yor bet is ${selectedPet}! Good luck!`;
  betContainer.addChild(petText);
  bankContainer.removeChildren();
  bank -= 20;
  bankText.text = `Bank: ${bank}`;
  bankContainer.addChild(bankText);
});

rabbit.on("pointerdown", () => {
  selectedPet = "Rabbit";
  betContainer.removeChildren();
  petText.text = `Yor bet is ${selectedPet}! Good luck!`;
  betContainer.addChild(petText);
  bankContainer.removeChildren();
  bank -= 20;
  bankText.text = `Bank: ${bank}`;
  bankContainer.addChild(bankText);
});

dog.on("pointerdown", () => {
  selectedPet = "Dog";
  betContainer.removeChildren();
  petText.text = `Yor bet is ${selectedPet}! Good luck!`;
  betContainer.addChild(petText);
  bankContainer.removeChildren();
  bank -= 20;
  bankText.text = `Bank: ${bank}`;
  bankContainer.addChild(bankText);
});

//  Check Bet Function

const checkBet = (pet: string) => {
  //  Animated Text
  const winnerText = new PIXI.Text(
    `${selectedPet} is winner! Congratulations!`,
    style2
  );
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

//  Function Lounch
const pets = [cat, rabbit, dog, pig];
function lounch() {
  bankText.text = `Bank: ${bank}`;
  maskContainer.removeChildren();
  const arrOfWinners: any = [];
  arrOfWinners.length = 0;
  pets.forEach((pet) => {
    // Reset Implementation
    resetButton.on("pointerdown", () => {
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
          arrOfWinners.push("Cat");
        }
        if (index + 1 === 2) {
          arrOfWinners.push("Rabbit");
        }
        if (index + 1 === 3) {
          arrOfWinners.push("Dog");
        }
        if (index + 1 === 4) {
          arrOfWinners.push("Pig");
        }
        pet.stop();
        if (arrOfWinners.length >= 4) {
          isEvent = false;
        }

        console.log(arrOfWinners);
        arrOfWinners.forEach((winner: any, index: any) => {
          const text = new PIXI.Text(` ${index + 1}. ${winner}`, style);
          text.y = index * 60;
          maskContainer.addChild(text);
        });

        checkBet(arrOfWinners[0]);
      });
  });
  app.ticker.add(() => {
    TWEEN.update();
  });

  updateCounter();
}

app.stage.addChild(
  line,
  finish,
  cat,
  rabbit,
  dog,
  pig,
  start,
  maskContainer,
  startButton,
  resetButton
);
