import Grimpan from "./sigleton/grimpan";

import GrimpanSimpleIFFactory from "./factory/grimpanSimpleFactory";
import { ChromeGrimpanFactory } from "./factory/grimpanFactoryMethod";

// singleton
let grimpan = Grimpan.getInstance();

// factory
grimpan = GrimpanSimpleIFFactory.createGrimpan("ie");
function main() {
  const grimpan = ChromeGrimpanFactory.createGrimpan();

  grimpan.initialize();
  grimpan.initializeMenu();
}
