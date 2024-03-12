import * as PIXI from "pixi.js";
import { style, style2 } from "./styles";
import { MainText } from "./MainText";
import { mainTextContainer } from "./objects";

//  Bank Class Texts
export const credits: number = 200;
export const creditsMinus: number = 20;
export const creditsPlus: number = creditsMinus * 5;
export const creditsBankText = new PIXI.Text(`Bank: ${credits}`, style);

//  Counter Text
export const counterText: PIXI.Text = new PIXI.Text(`Race №: `, style);

//  Main Text
export const mainText = new MainText(
  `Select your runner to bet on!`,
  style2,
  mainTextContainer
);
