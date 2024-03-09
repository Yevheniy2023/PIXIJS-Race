import * as PIXI from "pixi.js";

//  Text Style
export const style = new PIXI.TextStyle({
  fontFamily: "Waltograph",
  fontSize: 48,
  fill: ["lightblue", "violet"],
  stroke: "#000000",
  strokeThickness: 4,
  dropShadow: true,
  dropShadowColor: "#00FFFF",
  dropShadowBlur: 30,
  dropShadowDistance: 9,
});

export const style2 = new PIXI.TextStyle({
  fontFamily: "Arial",
  fontSize: 55,
  fill: ["#ffffff"],
  stroke: "#ff00ff",
  strokeThickness: 4,
  dropShadow: true,
  dropShadowColor: "#ff00ff",
  dropShadowBlur: 20,
  dropShadowAngle: 0,
  dropShadowDistance: 0,
  align: "center",
});
