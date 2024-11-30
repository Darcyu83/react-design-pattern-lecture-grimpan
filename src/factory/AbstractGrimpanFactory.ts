import AbstractGrimpan from "./components/AbstractGrimpan";

export default abstract class AbstractGrimpanFactory {
  static createGrimpan(): AbstractGrimpan {
    throw new Error("팩토리 클래스 createGrimipan 메소드를 구현해야합니다.");
  }
}
