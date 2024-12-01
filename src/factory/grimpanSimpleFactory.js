"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ChromeGrimpan_1 = __importDefault(require("./grimpanClass/ChromeGrimpan"));
const IEGrampan_1 = __importDefault(require("./grimpanClass/IEGrampan"));
// 심플 팩토리 === 예제 - 잘안쓰임 너무 단순
class GrimpanSimpleIFFactory {
    static createGrimpan(type) {
        if (type === "ie") {
            return IEGrampan_1.default.getInstance();
        }
        else if (type === "chrome") {
            return ChromeGrimpan_1.default.getInstance();
        }
        else {
            throw new Error("일치하는 그림판 type이 없습니다. ");
        }
    }
}
exports.default = GrimpanSimpleIFFactory;
