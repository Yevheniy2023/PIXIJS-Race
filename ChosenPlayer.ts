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
  chose() {

  }
}
const rabbitTexture = PIXI.Texture.from('./img/yellowRabbit/rabbit-selected.png')
export const chosenRabbit = new ChosenPlayer(rabbitTexture,80,600,85,85)

const catTexture = PIXI.Texture.from('./img/cat/chosenCat.png')
export const chosenCat = new ChosenPlayer(catTexture,80,545,85,85)

const dogTexture = PIXI.Texture.from('./img/dog/chosenDog.png')
export const chosenDog = new ChosenPlayer(dogTexture,80,660,90,90)

const pigTexture = PIXI.Texture.from('./img/piggy/chosenPig.png')
export const chosenPig = new ChosenPlayer(pigTexture,80,720,140,85)
