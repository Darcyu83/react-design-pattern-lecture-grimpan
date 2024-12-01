"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GRIMPAN_PRIVATE_CONSTRUCTOR_SYMBOL = void 0;
exports.GRIMPAN_PRIVATE_CONSTRUCTOR_SYMBOL = Symbol();
// singleton 패턴
class Grimpan {
    constructor(canvas, symbol // private constructor
    ) {
        if (symbol !== exports.GRIMPAN_PRIVATE_CONSTRUCTOR_SYMBOL) {
            throw new Error("new를 통해서 객체를 생성할 수 없습니다.");
        }
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error("Canvas 엘리먼트를 입력하세요.");
        }
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Grimpan(document.querySelector("#canvas"), exports.GRIMPAN_PRIVATE_CONSTRUCTOR_SYMBOL // private constructor
            );
        }
        return this.instance;
    }
    initialize() { }
    initializeMenu() { }
}
exports.default = Grimpan;
