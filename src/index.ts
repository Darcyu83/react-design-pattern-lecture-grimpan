import Grimpan from "./sigleton/grimpan";

import GrimpanSimpleIFFactory from "./factory/grimpanSimpleFactory";
import { ChromeGrimpanFactory } from "./factory/grimpanFactoryMethod";
import ChromeGrimpan from "./factory/components/ChromeGrimpan";
import { GRIMPAN_PRIVATE_PROTECTED_CONSTRUCTOR_SYMBOL } from "./factory/components/AbstractGrimpan";

// singleton
let grimpan = Grimpan.getInstance();

// factory
grimpan = GrimpanSimpleIFFactory.createGrimpan("ie");
function main() {
  const grimpan = ChromeGrimpanFactory.createGrimpan();

  grimpan.initialize();
  grimpan.initializeMenu();


}

main();
