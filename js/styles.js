"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.style2 = exports.style = void 0;
const PIXI = __importStar(require("pixi.js"));
//  Text Style
exports.style = new PIXI.TextStyle({
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
exports.style2 = new PIXI.TextStyle({
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
