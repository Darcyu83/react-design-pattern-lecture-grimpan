import AbstractGrimpan, {
  GRIMPAN_PRIVATE_PROTECTED_CONSTRUCTOR_SYMBOL,
} from "./AbstractGrimpan";

// singleton 패턴
class IEGrimpan extends AbstractGrimpan {
  // protected static override instance: IEGrimpan;

  static override getInstance() {
    if (!this.instance) {
      this.instance = new IEGrimpan(
        document.querySelector("#canvas"),
        GRIMPAN_PRIVATE_PROTECTED_CONSTRUCTOR_SYMBOL // private constructor
      );
    }
    return this.instance;
  }

  initialize() {}

  // initializeMenu() {}
}

export default IEGrimpan;
