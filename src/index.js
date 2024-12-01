"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GrimpanFactory_1 = require("./factory/GrimpanFactory");
const grimpan_1 = __importDefault(require("./sigleton/grimpan"));
// singleton
let grimpan = grimpan_1.default.getInstance();
// factory
function main(Factory) {
    console.log("run === main()");
    const grimpan = Factory.createGrimpan();
    const grimpanMenu = Factory.createGrimpanMenu(grimpan);
    const grimpanHistory = Factory.createGrimpanHistory(grimpan);
    grimpan.initialize();
    grimpanMenu.initialize();
    grimpanHistory.initialize();
    console.log(grimpan);
    console.log(grimpanMenu);
}
main(GrimpanFactory_1.ChromeGrimpanFactory);
