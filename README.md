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

