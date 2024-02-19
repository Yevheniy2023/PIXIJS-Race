import * as PIXI from "pixi.js";
import { rabbit, dog, pig, cat } from "./objects";

export class Race {
  private _pet: any;
  public get result(): any {
    return this._pet.x;
  }
  constructor(pet: any) {
    this._pet = pet;
  }
}
