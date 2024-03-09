import * as PIXI from "pixi.js";
import * as TWEEN from "@tweenjs/tween.js";

//  Class Player
export class Player {
  private _animatedSprite: PIXI.AnimatedSprite;
  private _id: string;
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
    id: string,
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
    this._animatedSprite.texture = PIXI.Texture.from(`./img/chosenPet/chosen${this.id}.png`);})
    .on("pointerout", () => {
    this._animatedSprite.texture = PIXI.Texture.from(`./img/${this._id}/${this._id}1.png`);});

  }
  public startPosition() {
    this._animatedSprite.position.x = 80;
    this._animatedSprite.texture = PIXI.Texture.from(`./img/${this._id}/${this._id}1.png`);
  }
  public moveTweens(x: number, speed: number) {
    const tween = new TWEEN.Tween(this._animatedSprite);
    tween.to({ x: x }, speed).start()

    return tween;
  }
 public click (onClick:()=> void) {
    this._animatedSprite.on("pointerdown", onClick)
  }
}
