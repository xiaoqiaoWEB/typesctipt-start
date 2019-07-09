# typesctipt-start
## arr
```
  let arr: number [] = [1,2,3]
  let arr: Arrary<number> = [1,2,3]
```
## 枚举 enmu
```
  TS----
  enum flag {
    suc = 1,
    err = 2
  }

  let s: flag = flag.suc; // 1
  let e: flag = flag.err; // 2
  JS ----
  var flag;
  (function (flag) {
      flag[flag["suc"] = 1] = "suc";
      flag[flag["err"] = 2] = "err";
  })(flag || (flag = {}));
  var s = flag.suc;
  var e = flag.err;
```
## fucntion 
- 函数声明
```
  function getInfo (name: string):string {
    return `${name} --name`
  }
  
  编译之后
  function getInfo(name) {
    return name + "--name";
  }
```
- 函数表达式
```
let getInfo = function (name: string): string { 
    return `${name} --name`
}

编译之后
var getInfo = function (name) {
    return name + " --name";
};
```
- 可选参数
> 方法的形参 和实参 不一致 编译 会报错 -- 如果不一样就要配置可选参数
> 可选参数 要配置发哦参数的最后面 ---》 否则编译报错
```
function getInfo (name: string, age?: number): string { 
    return `${name} --- ${age}`
}

编译之后
function getInfo(name, age) {
    return name + " --- " + age;
}
```

- 默认参数
```
function getInfo (name: string, age:number = 18): string { 
    return `${name} --- ${age}`
}
```

- 剩余参数
```
function getNum(a: number, b: number, ...c: number[]): number { 
    let num = a + b;
    for (var i = 0; i < c.length; i++) { 
        num += c[i]
    }
    return num;
}

getNum(1,2,3,6,4,5)
```
- 函数重载
> java中的重载: 重载指的是两个或者两个以上的同名的函数， 但他们的参数不一样， 这是出现函数的重载情况
> typescipt 中的重载： 通过为同一个函数提供多个函数类型定义来试下多重功能的目的
> 同一个函数 不同的参数 执行不同的 功能
```
01 
function getInfo(name: string): string;
function getInfo(age: number): string;

function getInfo(str: any): any { 
    if (typeof str === 'string') {
        return `this is ${str}`
    } else { 
        return `age: ${str}`
    }
}

02
function getInfo(name: string): string;
function getInfo(name: string, age: number): string;

function getInfo(name: string, age?: number): string { 
    if (age) {
        return `this is ${name}, age: ${age}`
    } else { 
        return `this is ${name}`
    }
}
```
## class
- class 声明
```
class Name { 
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    get(): string { 
        return `this is name: ${this.name}`
    }
}

let p = new Name('QQ')
console.log(p.get())
```

- class 继承
```
class Name { 
    public name: string;
    constructor(name: string) {
        this.name = name;
    }

    get(): string { 
        return `this is name: ${this.name}`
    }
}

class OneName extends Name { 
    constructor(name: string) { 
        super(name)
    }

    set(): string { 
        return `this is name: AAA${this.name}`
    }
}
```

- claa 属性修饰符
> public     共有
> protected  保护类型  在当前类和子类中可以 访问 ，类外部 不能访问
> private    私有      只能在当前类中访问

- class 静态属性 静态方法
```
class Name { 
    public name: string;
    static sypes = true;
    constructor(name: string) {
        this.name = name;
    }

     static get(name: string): string { 
        return `this is name: ${name}`
    }
}

Name.get('QQQ');
```

## class 多态
> 属于继承   父类 定义一个方法 不去实现， 让继承他的子类去实现， 每一个子类 有不同的表现
```
class Animal { 
    name: string;
    constructor(name: string) {
        this.name = name;     
    }
    eat(): any { };
}

class Cat extends Animal { 
    constructor(name: string) { 
        super(name)
    }
    eat(): string { 
        return `${this.name} --- 吃鱼`
    }
}

class Dog extends Animal { 
    constructor(name: string) { 
        super(name)
    }
    eat(): string { 
        return `${this.name} --- 吃屎`
    }
}

let p = new Cat('猫');
p.eat();

let p1 = new Dog('狗');
p1.eat();
```
- 抽象类
> 是提供其他类继承的 基类， 不能被直接实例化
> 用 abstract 关键字定义抽象类和抽象方法， 抽象类中抽象方法不包含具体的实现并且必须在派生类中实现
> abstract 抽象方法 只能放在抽象类里面
> 简单来说 抽象类和抽象方法  用来定义标准，抽象的子类 必须实现 抽象方法
```
abstract class Animal { 
    name: string;
    constructor(name: string) { 
        this.name = name;
    }
    abstract eat(): any;
}

class Cat extends Animal { 
    constructor(name: string) {
        super(name)
    }
    eat(): string { 
        return `${this.name} --- 吃老鼠`
    }
}

class Dog extends Animal { 
    constructor(name: string) {
        super(name);
    }
    eat(): string { 
         return `${this.name} --- 吃屎`
    }
}

let p1 = new Cat('猫')
p1.eat()

let p2 = new Dog('狗')
p2.eat();

```


