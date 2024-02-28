import * as PIXI from "pixi.js";
import * as TWEEN from "@tweenjs/tween.js";
import {
  textureCat,
  textureRabbit,
  textureDog,
  texturePig,
  start,
} from "./objects";
const chosenRabbitTexture = PIXI.Texture.from(
  "./img/yellowRabbit/chosenRabbit.png"
);
const chosenCatTexture = PIXI.Texture.from("./img/cat/chosenCat.png");
const chosenDogTexture = PIXI.Texture.from("./img/dog/chosenDog.png");
const chosenPigTexture = PIXI.Texture.from("./img/piggy/chosenPig.png");

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

//  Class Player
export class Player {
  private _animatedSprite: PIXI.AnimatedSprite;
  private _id: "Cat" | "Rabbit" | "Dog" | "Pig";
  public get id() {
    return this._id;
  }
  public get animatedSprite() {
    return this._animatedSprite;
  }

  constructor(
    textures: PIXI.Texture[],
    x: number,
    y: number,
    width: number,
    height: number,
    id: "Cat" | "Rabbit" | "Dog" | "Pig"
  ) {
    this._id = id;
    this._animatedSprite = new PIXI.AnimatedSprite(textures);
    this._animatedSprite.position.set(x, y);
    this._animatedSprite.width = width;
    this._animatedSprite.height = height;
    this._animatedSprite.anchor.set(0.5);
    this.addEventListeners();
  }

  private addEventListeners() {
    this._animatedSprite.cursor = "pointer";
    this._animatedSprite.interactive = true;
    this._animatedSprite.on("pointerover", () => {
      this._animatedSprite.texture = chosenPetTexture[this.id];
    });

    this._animatedSprite.on("pointerout", () => {
      this._animatedSprite.texture = petTexture[this.id][0];
    });
  }
  public startPosition() {
    this._animatedSprite.position.x = 80;
    this._animatedSprite.texture = petTexture[this.id][0];
  }
  public moveTweens(x: number, speed: number) {
    const tween = new TWEEN.Tween(this._animatedSprite);
    tween.to({ x: x }, speed).start();

    return tween;
  }
}
