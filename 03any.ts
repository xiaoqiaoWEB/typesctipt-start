// 任意类型  any  null undefined void nerver

//let name1: any = '123'

// null / undefined === > 其它（never）类型的子类型

// let num01: number;
// console.log(num01)

// let num01: undefined;
// console.log(num01)

// let num01: number | undefined
// console.log(num01)

// let num01: null
// num = 123

// number null undefined

//let num01: number | null | undefined;



// void 表示没有返回值  不属于任何类型
// function run (): void{
//   console.log('A')
// }

// run();



//nerver类型：其它类型 （包括 null 和 undefined） 的子类型，表示从不会出现的值
// 声明 nerver 的变量只能被nerver类型所赋值

// let a: null;
// a=null;
// a='a'  --> 报错

// let a: never

// a =(() => {
//   throw new Error('错误')
// })()