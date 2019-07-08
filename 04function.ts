
//函数声明

// function getInfo (name: string, age: number): string {
//   return `${name}:${age}`
// }

// console.log(getInfo('xiaoqiao', 18))


// 函数表达式

// let info = function (name: string, age: number) : string {
//   return `${name}:${age}`
// }

// console.log(info('xiaoqiao', 18))


//可选参数
// es5  方法的形参 和实参 可以不一致
// ts  方法的形参 和实参 不一致 编译 会报错 -- 如果不一样就要配置可选参数
// 可选参数 要配置发哦参数的最后面 ---》 否则编译报错

// function getInfo (name: string, age?:number) {
//   if(age) {
//     return `${name}:${age}`
//   } else {
//     return `${name}:--年龄保密`
//   }
// }

// console.log(getInfo('xiaoqiao'))
// console.log(getInfo('xiaoqiao', 18))


// 默认参数
// function getInfo (name:string, age:number=18) {
//   return  `${name}:${age}`
// }

// console.log(getInfo('xiaoqiao'))
// console.log(getInfo('xiaoqiao', 20))


//剩余参数
// function getNum(a:number, b:number, ...c:number[]): number {
//   let num = a + b;
//   for(var i=0; i<c.length; i++) {
//     num += c[i]
//   }
//   return num;
// }

// console.log(getNum(1,2,3,4,5))



// 函数的重载
  // java中的重载: 重载指的是两个或者两个以上的同名的函数， 但他们的参数不一样， 这是出现函数的重载情况
  // typescipt 中的重载： 通过为同一个函数提供多个函数类型定义来试下多重功能的目的
  // 同一个函数 不同的参数 执行不同的 功能
  

// function getInfo (name:string): string;
// function getInfo (age:number): string;

// function getInfo(str: any) :any {
//   if(typeof str === 'string') {
//     return `name is ${str}`
//   } else {
//     return `age: ${str}`
//   }
// } 

// console.log(getInfo('haixu'))
// console.log(getInfo(18))

// function getInfo (name: string): string;
// function getInfo (name: string, age: number): string;

// function getInfo (name:string, age?: number): any {
//   if(age) {
//     return `name is ${name}, age: ${age}`
//   } else {
//     return `name is ${name}`
//   }
// }

// console.log(getInfo('xiaoqiao'))
// console.log(getInfo('xiaoqiao', 12))