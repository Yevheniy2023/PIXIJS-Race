import * as PIXI from "pixi.js";
import {
  credits,
  creditsBankText,
  creditsMinus,
  creditsPlus,
} from "./texts_consts";

//   Bank Class
export class Bank {
  private _bank: number = credits;
  private _bankText: PIXI.Text;
  private _bankContainer: PIXI.Container;

  public set bank(value: number) {
    this._bank = value;
    this.updateBankText();
  }
  public get bankContainer(): PIXI.Container {
    return this._bankContainer;
  }
  constructor(bank: number) {
    this._bankText = creditsBankText;
    this.bank = bank;
    this._bankContainer = new PIXI.Container();
    this._bankContainer.addChild(this._bankText);
    this._bankContainer.x = 700;
    this._bankContainer.y = 25;
  }
  updateBankText() {
    this._bankText.text = `Bank: ${this._bank}`;
  }
  public bankPlus() {
    this.bank = this._bank + creditsPlus;
  }
  public bankMinus() {
    this.bank = this._bank - creditsMinus;
  }
}

export let bank = new Bank(credits);
