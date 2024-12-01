import AbstractGrimpan from "./grimpanClass/AbstractGrimpan";
import ChromeGrimpan from "./grimpanClass/ChromeGrimpan";
import IEGrimpan from "./grimpanClass/IEGrampan";

export abstract class GrimpanMenu {
  grimpan: AbstractGrimpan;

  protected constructor(grimpan: AbstractGrimpan) {
    this.grimpan = grimpan;
  }

  abstract initialize(): void;
  static getInstance(grimpan: IEGrimpan) {}
}

export class ChromeGrimpanMenu extends GrimpanMenu {
  private static instance: ChromeGrimpanMenu;

  override initialize(): void {
    throw new Error("Method not implemented.");
  }

  static override getInstance(grimpan: ChromeGrimpan): ChromeGrimpanMenu {
    if (!this.instance) {
      this.instance = new ChromeGrimpanMenu(grimpan);
    }
    return this.instance;
  }
}

export class IEGrimpanMenu extends GrimpanMenu {
  private static instance: IEGrimpanMenu;

  override initialize(): void {
    throw new Error("Method not implemented.");
  }

  static override getInstance(grimpan: IEGrimpan): IEGrimpanMenu {
    if (!this.instance) {
      this.instance = new IEGrimpanMenu(grimpan);
    }
    return this.instance;
  }
}
