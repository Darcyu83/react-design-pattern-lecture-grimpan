"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GRIMPAN_PRIVATE_PROTECTED_CONSTRUCTOR_SYMBOL = void 0;
exports.GRIMPAN_PRIVATE_PROTECTED_CONSTRUCTOR_SYMBOL = Symbol();
class AbstractGrimpan {
    //! 지금 클래스 / 상속받은 클래스 내에서만 new 키워드 사용가능
    constructor(canvas, symbol // private constructor
    ) {
        if (symbol !== exports.GRIMPAN_PRIVATE_PROTECTED_CONSTRUCTOR_SYMBOL) {
            throw new Error("new를 통해서 객체를 생성할 수 없습니다.");
        }
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error("Canvas 엘리먼트를 입력하세요.");
        }
    }
    // abstract initializeMenu(): void;
    static getInstance() {
        throw new Error("getInstance must be implemented in subclasses.");
    }
}
// private static instance: Grimpan; 프라이빗 오버라이딩 안됨
// protected는 상속받은 클래스에서 값 설정 가능함.
AbstractGrimpan.instance = null;
exports.default = AbstractGrimpan;
