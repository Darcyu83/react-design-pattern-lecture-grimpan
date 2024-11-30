import ChromeGrimpan from "./components/ChromeGrimpan";
import IEGrimpan from "./components/IEGrampan";

// 심플 팩토리 === 예제 - 잘안쓰임 너무 단순
class GrimpanSimpleIFFactory {
  static createGrimpan(type: string) {
    if (type === "ie") {
      return IEGrimpan.getInstance();
    } else if (type === "chrome") {
      return ChromeGrimpan.getInstance();
    } else {
      throw new Error("일치하는 그림판 type이 없습니다. ");
    }
  }
}

export default GrimpanSimpleIFFactory;
