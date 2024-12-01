import AbstractGrimpanFactory, {
  ChromeGrimpanFactory,
} from "./factory/GrimpanFactory";
import Grimpan from "./sigleton/grimpan";

// singleton
let grimpan = Grimpan.getInstance();

// factory

function main(Factory: typeof AbstractGrimpanFactory) {
  console.log("run === main()");

  const grimpan = Factory.createGrimpan();
  const grimpanMenu = Factory.createGrimpanMenu(grimpan);
  const grimpanHistory = Factory.createGrimpanHistory(grimpan);

  grimpan.initialize();
  grimpanMenu.initialize();
  grimpanHistory.initialize();

  console.log(grimpan);
  console.log(grimpanMenu);
}

main(ChromeGrimpanFactory);
