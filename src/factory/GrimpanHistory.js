"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IEGrimpanHistory = exports.ChromeGrimpanHistory = exports.GrimpanHistory = void 0;
class GrimpanHistory {
    constructor(grimpan) {
        this.grimpan = grimpan;
    }
    static getInstance(grimpan) { }
}
exports.GrimpanHistory = GrimpanHistory;
class ChromeGrimpanHistory extends GrimpanHistory {
    initialize() {
        throw new Error("Method not implemented.");
    }
    static getInstance(grimpan) {
        if (!this.instance) {
            this.instance = new ChromeGrimpanHistory(grimpan);
        }
        return this.instance;
    }
}
exports.ChromeGrimpanHistory = ChromeGrimpanHistory;
class IEGrimpanHistory extends GrimpanHistory {
    initialize() {
        throw new Error("Method not implemented.");
    }
    static getInstance(grimpan) {
        if (!this.instance) {
            this.instance = new IEGrimpanHistory(grimpan);
        }
        return this.instance;
    }
}
exports.IEGrimpanHistory = IEGrimpanHistory;
