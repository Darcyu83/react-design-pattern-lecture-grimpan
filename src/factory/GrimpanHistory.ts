import AbstractGrimpan from "./grimpanClass/AbstractGrimpan";
import ChromeGrimpan from "./grimpanClass/ChromeGrimpan";
import IEGrimpan from "./grimpanClass/IEGrampan";

export abstract class GrimpanHistory {
  grimpan: AbstractGrimpan;

  protected constructor(grimpan: AbstractGrimpan) {
    this.grimpan = grimpan;
  }

  abstract initialize(): void;
  static getInstance(grimpan: AbstractGrimpan) {}
}

export class ChromeGrimpanHistory extends GrimpanHistory {
  private static instance: ChromeGrimpanHistory;
  override initialize(): void {
    throw new Error("Method not implemented.");
  }

  static override getInstance(grimpan: ChromeGrimpan): ChromeGrimpanHistory {
    if (!this.instance) {
      this.instance = new ChromeGrimpanHistory(grimpan);
    }
    return this.instance;
  }
}

export class IEGrimpanHistory extends GrimpanHistory {
  private static instance: IEGrimpanHistory;
  override initialize(): void {
    throw new Error("Method not implemented.");
  }

  static override getInstance(grimpan: IEGrimpan): IEGrimpanHistory {
    if (!this.instance) {
      this.instance = new IEGrimpanHistory(grimpan);
    }
    return this.instance;
  }
}
