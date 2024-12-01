import AbstractGrimpan, {
  GRIMPAN_PRIVATE_PROTECTED_CONSTRUCTOR_SYMBOL,
} from "./AbstractGrimpan";

// singleton 패턴
class ChromeGrimpan extends AbstractGrimpan {
  protected static override instance: ChromeGrimpan | null = null;

  initialize() {}

  // initializeMenu() {}

  static override getInstance() {
    if (!this.instance) {
      this.instance = new ChromeGrimpan(
        document.querySelector("#canvas"),
        GRIMPAN_PRIVATE_PROTECTED_CONSTRUCTOR_SYMBOL // private constructor
      );
    }

    return this.instance;
  }
}

export default ChromeGrimpan;
