import AbstractGrimpan from "./components/AbstractGrimpan";
import AbstractGrimpanFactory from "./AbstractGrimpanFactory";
import IEGrimpan from "./components/IEGrampan";

export class ChromeGrimpanFactory extends AbstractGrimpanFactory {
  // static override createGrimpan(): AbstractGrimpan {
  //   return ChromeGrimpan.getInstance();
  // }
}

export class IEGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan(): AbstractGrimpan {
    return IEGrimpan.getInstance();
  }
}
