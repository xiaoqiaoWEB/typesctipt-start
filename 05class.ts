// 类的定义

// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }

//   run(): string {
//     return `${this.name}---person`
//   }
// }

// let p = new Person('xiaoqiao')
// console.log(p.run())


// 类的继承
// class Person {
//   private name: string;
//   constructor(name:string) {
//     this.name = name;
//   }
//   run(): string {
//     return `${this.name} --- person`
//   }
// }

// class NamePerson extends Person {
//   age: number;
//   constructor (name: string, age: number) {
//     super(name)
//     this.age = age;
//   }

//   run(): string {
//     return `${this.name} --- NamePerson --- ${this.age}`
//   }
// }

// let p = new NamePerson('QQQ', 18)
// console.log(p.run())

// 类 属性修饰符
// public     共有
// protected  保护类型  在当前类和子类中可以 访问 ，类外部 不能访问
// private    私有      只能在当前类中访问


// 静态属性 静态方法

// class Person {
//   public name:string;
//   static age=18;
//   constructor(name: string) {
//     this.name = name;
//   }

//   run (): string {
//     return `${this.name} ----- Person`
//   }

//   static getName (name: string): string {
//     return `name is ${name} --- ${Person.age}`
//   }
// }

// console.log(Person.getName('QQQ'))


// 多态 -- 》属于继承   父类定义一个方法 不去实现， 让继承他的子类去实现， 每一个子类 有不同的表现

// class Animal {
//   public name: string;
//   constructor(name: string) {
//     this.name = name;
//   }

//   eat(): any{
//     console.log('具体干什么不知道')
//   }
// }

// class Cat extends Animal {
//   constructor(name: string) {
//     super(name)
//   }

//   eat(): string {
//     return `${this.name} --- 吃鱼`
//   }
// }

// class Dog extends Animal {
//   constructor(name: string) {
//     super(name)
//   }

//   eat(): string {
//     return `${this.name} --- 吃屎`
//   }
// }

// let p1 = new Cat('猫');
// let p2 = new Dog('狗')
// console.log(p1.eat(), p2.eat())




// 抽象类
// 他是提供其他类继承的 基类， 不能被直接实例化
// 用 abstract 关键字定义抽象类和抽象方法， 抽象类中抽象方法不包含具体的实现并且必须在派生类中实现
// abstract 抽象方法 只能放在抽象类里面

// 简单来说 抽象类和抽象方法  用来定义标准，抽象的子类 必须实现 抽象方法

// abstract class Animal {
//   name: string
//   constructor(name: string) {
//     this.name = name;
//   }

//   abstract eat(): any;
// }

// class Cat extends Animal {
//   constructor(name: string) {
//    super(name)
//   }

//   eat(): string {
//     return `${this.name} --- 吃鱼`
//   }
// }

// class Dog extends Animal {
//   constructor(name: string) {
//     super(name)
//   }

//   eat(): string {
//     return `${this.name} --- 吃屎`
//   }
// }

// let p1 = new Cat('猫');
// let p2 = new Dog('狗')
// console.log(p1.eat(), p2.eat())