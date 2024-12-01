"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IEGrimpanMenu = exports.ChromeGrimpanMenu = exports.GrimpanMenu = void 0;
class GrimpanMenu {
    constructor(grimpan) {
        this.grimpan = grimpan;
    }
    static getInstance(grimpan) { }
}
exports.GrimpanMenu = GrimpanMenu;
class ChromeGrimpanMenu extends GrimpanMenu {
    initialize() {
        throw new Error("Method not implemented.");
    }
    static getInstance(grimpan) {
        if (!this.instance) {
            this.instance = new ChromeGrimpanMenu(grimpan);
        }
        return this.instance;
    }
}
exports.ChromeGrimpanMenu = ChromeGrimpanMenu;
class IEGrimpanMenu extends GrimpanMenu {
    initialize() {
        throw new Error("Method not implemented.");
    }
    static getInstance(grimpan) {
        if (!this.instance) {
            this.instance = new IEGrimpanMenu(grimpan);
        }
        return this.instance;
    }
}
exports.IEGrimpanMenu = IEGrimpanMenu;
