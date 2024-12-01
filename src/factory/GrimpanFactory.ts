import AbstractGrimpan from "./grimpanClass/AbstractGrimpan";
import IEGrimpan from "./grimpanClass/IEGrampan";
import ChromeGrimpan from "./grimpanClass/ChromeGrimpan";
import { ChromeGrimpanMenu, GrimpanMenu, IEGrimpanMenu } from "./GrimpanMenu";
import {
  ChromeGrimpanHistory,
  GrimpanHistory,
  IEGrimpanHistory,
} from "./GrimpanHistory";

export default abstract class AbstractGrimpanFactory {
  static createGrimpan(): AbstractGrimpan {
    throw new Error("팩토리 클래스 createGrimipan 메소드를 구현해야합니다.");
  }

  static createGrimpanMenu(grimpan: AbstractGrimpan): GrimpanMenu {
    throw new Error("팩토리 클래스 createGrimpanMenu 메소드를 구현해야합니다.");
  }

  static createGrimpanHistory(grimpan: AbstractGrimpan): GrimpanHistory {
    throw new Error(
      "팩토리 클래스 createGrimpanHistory 메소드를 구현해야합니다."
    );
  }
}

export class ChromeGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan(): ChromeGrimpan {
    return ChromeGrimpan.getInstance();
  }
  static override createGrimpanMenu(grimpan: ChromeGrimpan): ChromeGrimpanMenu {
    return ChromeGrimpanMenu.getInstance(grimpan);
  }
  static override createGrimpanHistory(
    grimpan: ChromeGrimpan
  ): ChromeGrimpanHistory {
    return ChromeGrimpanHistory.getInstance(grimpan);
  }
}

export class IEGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan(): IEGrimpan {
    return IEGrimpan.getInstance();
  }
  static override createGrimpanMenu(grimpan: IEGrimpan): IEGrimpanMenu {
    return IEGrimpanMenu.getInstance(grimpan);
  }
  static override createGrimpanHistory(grimpan: IEGrimpan): IEGrimpanHistory {
    return IEGrimpanHistory.getInstance(grimpan);
  }
}
