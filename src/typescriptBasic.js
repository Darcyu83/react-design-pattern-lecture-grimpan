"use strict";
const obj = {
    name: "hi",
};
// 타입을 private으로 설정하기 위해서는 abstract class 사용
class AC {
    constructor(name, hello) {
        this.name = name;
        this.hello = hello;
    }
}
class AC2 {
    // 선언안해도 컨스트럭터에서 멤버필드 설정함.
    // private name: string;
    // public hello: string;
    constructor(name, hello) {
        this.name = name;
        this.hello = hello;
    }
}
class A {
    run() {
        throw new Error("Method not implemented.");
    }
    walk() {
        throw new Error("Method not implemented.");
    }
}
class ACC extends AC {
}
