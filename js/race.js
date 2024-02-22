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
exports.pig = exports.dog = exports.cat = exports.rabbit = void 0;
const PIXI = __importStar(require("pixi.js"));
const objects_1 = require("./objects");
class Player extends PIXI.AnimatedSprite {
    id;
    constructor(textures, x, y, width, height, animationSpeed, id) {
        super(textures);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.animationSpeed = animationSpeed;
        this.anchor.set(0.5);
        (this.eventMode = "static"), (this.cursor = "pointer"), (this.id = id);
    }
    run() { }
}
const rabbit = new Player(objects_1.textureRabbit, 80, 600, 80, 80, 0.4, "Rabbit");
exports.rabbit = rabbit;
const cat = new Player(objects_1.textureCat, 80, 550, 80, 80, 0.4, "Cat");
exports.cat = cat;
const dog = new Player(objects_1.textureDog, 80, 650, 80, 80, 0.2, "dog");
exports.dog = dog;
const pig = new Player(objects_1.texturePig, 80, 700, 120, 80, 0.4, "Pig");
exports.pig = pig;
