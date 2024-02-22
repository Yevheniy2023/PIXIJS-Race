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
exports.chosenPig = exports.chosenDog = exports.chosenCat = exports.chosenRabbit = exports.ChosenPlayer = void 0;
const PIXI = __importStar(require("pixi.js"));
class ChosenPlayer extends PIXI.Sprite {
    constructor(texture, x, y, width, height) {
        super(texture);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.anchor.set(0.5);
    }
    chose() {
    }
}
exports.ChosenPlayer = ChosenPlayer;
const rabbitTexture = PIXI.Texture.from('./img/yellowRabbit/rabbit-selected.png');
exports.chosenRabbit = new ChosenPlayer(rabbitTexture, 80, 600, 85, 85);
const catTexture = PIXI.Texture.from('./img/cat/chosenCat.png');
exports.chosenCat = new ChosenPlayer(catTexture, 80, 545, 85, 85);
const dogTexture = PIXI.Texture.from('./img/dog/chosenDog.png');
exports.chosenDog = new ChosenPlayer(dogTexture, 80, 660, 90, 90);
const pigTexture = PIXI.Texture.from('./img/piggy/chosenPig.png');
exports.chosenPig = new ChosenPlayer(pigTexture, 80, 720, 140, 85);
