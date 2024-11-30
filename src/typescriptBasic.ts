interface Obj {
  name: string;
}

const obj: Obj = {
  name: "hi",
};

// 타입을 private으로 설정하기 위해서는 abstract class 사용

abstract class AC {
  private name: string;
  public hello: string;

  constructor(name: string, hello: string) {
    this.name = name;
    this.hello = hello;
  }
}

abstract class AC2 {
  // 선언안해도 컨스트럭터에서 멤버필드 설정함.
  // private name: string;
  // public hello: string;

  constructor(private name: string, public hello: string) {}
}

// 에러: name은 private 설정할 수 없다.
// const ac: AC2 = {
//   name: "aaaa",
//   hello: "world",
// };

interface Runnable {
  run(): void;
}
interface Walkable {
  walk(): void;
}

class A implements Runnable, Walkable {
  run(): void {
    throw new Error("Method not implemented.");
  }
  walk(): void {
    throw new Error("Method not implemented.");
  }
}

class ACC extends AC{


}


