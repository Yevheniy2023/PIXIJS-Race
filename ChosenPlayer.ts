import * as PIXI from "pixi.js";

export class ChosenPlayer extends PIXI.Sprite {
  constructor(
    texture: PIXI.Texture,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    super(texture);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.anchor.set(0.5)
  }
 
}
export const chosenRabbitTexture = PIXI.Texture.from('./img/yellowRabbit/chosenRabbit.png')
export const chosenRabbit = new ChosenPlayer(chosenRabbitTexture,80,600,85,85)

export const chosenCatTexture = PIXI.Texture.from('./img/cat/chosenCat.png')
export const chosenCat = new ChosenPlayer(chosenCatTexture,80,545,85,85)

export const chosenDogTexture = PIXI.Texture.from('./img/dog/chosenDog.png')
export const chosenDog = new ChosenPlayer(chosenDogTexture,80,660,90,90)

export const chosenPigTexture = PIXI.Texture.from('./img/piggy/chosenPig.png')
export const chosenPig = new ChosenPlayer(chosenPigTexture ,80,710,140,85)
