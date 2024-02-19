"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tank = void 0;
const pixi_js_1 = require("pixi.js");
class Tank {
    _view;
    trackLeft;
    constructor() {
        this._view = new pixi_js_1.Container();
        this.trackLeft = new pixi_js_1.AnimatedSprite([
            pixi_js_1.Texture.from('./img/flowerTop.png')
        ]);
        this._view.addChild(this.trackLeft);
    }
    get view() {
        return this._view;
    }
}
exports.Tank = Tank;
