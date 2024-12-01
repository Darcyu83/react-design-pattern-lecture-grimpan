"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IEGrimpanFactory = exports.ChromeGrimpanFactory = void 0;
const IEGrampan_1 = __importDefault(require("./grimpanClass/IEGrampan"));
const ChromeGrimpan_1 = __importDefault(require("./grimpanClass/ChromeGrimpan"));
const GrimpanMenu_1 = require("./GrimpanMenu");
const GrimpanHistory_1 = require("./GrimpanHistory");
class AbstractGrimpanFactory {
    static createGrimpan() {
        throw new Error("팩토리 클래스 createGrimipan 메소드를 구현해야합니다.");
    }
    static createGrimpanMenu(grimpan) {
        throw new Error("팩토리 클래스 createGrimpanMenu 메소드를 구현해야합니다.");
    }
    static createGrimpanHistory(grimpan) {
        throw new Error("팩토리 클래스 createGrimpanHistory 메소드를 구현해야합니다.");
    }
}
exports.default = AbstractGrimpanFactory;
class ChromeGrimpanFactory extends AbstractGrimpanFactory {
    static createGrimpan() {
        return ChromeGrimpan_1.default.getInstance();
    }
    static createGrimpanMenu(grimpan) {
        return GrimpanMenu_1.ChromeGrimpanMenu.getInstance(grimpan);
    }
    static createGrimpanHistory(grimpan) {
        return GrimpanHistory_1.ChromeGrimpanHistory.getInstance(grimpan);
    }
}
exports.ChromeGrimpanFactory = ChromeGrimpanFactory;
class IEGrimpanFactory extends AbstractGrimpanFactory {
    static createGrimpan() {
        return IEGrampan_1.default.getInstance();
    }
    static createGrimpanMenu(grimpan) {
        return GrimpanMenu_1.IEGrimpanMenu.getInstance(grimpan);
    }
    static createGrimpanHistory(grimpan) {
        return GrimpanHistory_1.IEGrimpanHistory.getInstance(grimpan);
    }
}
exports.IEGrimpanFactory = IEGrimpanFactory;
