"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Race = void 0;
class Race {
    _pet;
    get result() {
        return this._pet.x;
    }
    constructor(pet) {
        this._pet = pet;
    }
}
exports.Race = Race;
