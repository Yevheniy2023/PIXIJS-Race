import * as PIXI from "pixi.js";
import {chosenCatTexture, chosenRabbitTexture, chosenDogTexture, chosenPigTexture,
} from "./ChosenPlayer";
import { textureCat, textureRabbit, textureDog, texturePig } from "./objects";
//  Class Player
const petTexture = {
  Cat: textureCat,
  Rabbit: textureRabbit,
  Dog: textureDog,
  Pig: texturePig,
};
const chosenPetTexture = {
  Cat: chosenCatTexture,
  Rabbit: chosenRabbitTexture,
  Dog: chosenDogTexture,
  Pig: chosenPigTexture,
};
export class Player {
  id: "Cat" | "Rabbit" | "Dog" | "Pig";
  animatedSprite: PIXI.AnimatedSprite;

  constructor(
    textures: PIXI.Texture[],
    x: number,
    y: number,
    width: number,
    height: number,
    id: "Cat" | "Rabbit" | "Dog" | "Pig"
  ) {
    this.id = id;
    this.animatedSprite = new PIXI.AnimatedSprite(textures);
    this.animatedSprite.position.set(x, y);
    this.animatedSprite.width = width;
    this.animatedSprite.height = height;
    this.animatedSprite.anchor.set(0.5)
    this.addEventListeners();
  }

  addEventListeners() {
    this.animatedSprite.cursor = "pointer";
    this.animatedSprite.interactive = true;
    this.animatedSprite.on("pointerover", () => {
      this.animatedSprite.texture = chosenPetTexture[this.id];
    });

    this.animatedSprite.on("pointerout", () => {
      this.animatedSprite.texture = petTexture[this.id][0];
    });
    this.animatedSprite.on("pointerdown", () => {
      this.animatedSprite.play();
    });
  }
  select() {
    return this.animatedSprite
  }
}

