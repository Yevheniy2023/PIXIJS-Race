import * as PIXI from "pixi.js";
import { game } from "./game";

//  Pixi App
export const app = new PIXI.Application({
  width: 1550,
  height: 750,
  backgroundColor: "lightblue",
  antialias: true,
  view: document.getElementById("game-canvas") as HTMLCanvasElement,
});

game()
