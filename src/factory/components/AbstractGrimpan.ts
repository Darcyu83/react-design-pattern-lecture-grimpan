export const GRIMPAN_PRIVATE_PROTECTED_CONSTRUCTOR_SYMBOL = Symbol();

export default abstract class AbstractGrimpan {
  protected static instance: AbstractGrimpan;
  protected constructor(
    canvas: HTMLElement | null,
    symbol: typeof GRIMPAN_PRIVATE_PROTECTED_CONSTRUCTOR_SYMBOL // private constructor
  ) {
    if (symbol !== GRIMPAN_PRIVATE_PROTECTED_CONSTRUCTOR_SYMBOL) {
      throw new Error("new를 통해서 객체를 생성할 수 없습니다.");
    }

    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error("Canvas 엘리먼트를 입력하세요.");
    }
  }

  abstract initialize(): void;
  abstract initializeMenu(): void;
  static getInstance() {}
}
