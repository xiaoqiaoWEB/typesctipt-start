// 接口 typeScript中的接口
// 1 属性类接口
// 2 函数类型接口
// 3 可索引接口
// 4 类类型接口
// 5 接口扩展

//接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。
//接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。 
//typescrip中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。

// 1、属性接口     对json的约束

// function PrintLabel (lable: {name: string}): string {
//   return `this is -- ${name}`
// }
// let p = PrintLabel({name: 'xiaoqiao'})

// 对批量方法传入参数进行约束。
// 行为和动作的规范，对批量方法进行约束

//就是传入对象的约束

  // interface Info {
  //   name: string;
  //   age: number;
  // }

  // function getInfo (obj: Info): string {
  //   return `${obj.name} : ${obj.age}`
  // }

  // let p = getInfo({
  //   name: 'QQ',
  //   age: 18
  // })

  // let obj = {  /*传入的参数必须包含 nsmr  age*/
  //   name: 'QQ',
  //   age: 18,
  //   num: 100
  // }
  // let p2 = getInfo(obj);


  //可选属性
  // interface Info {
  //   name: string,
  //   age?: number
  // }

  // function getInfo (obj: Info): string {
  //   return `${obj.name} : ${obj.age}`
  // }

  // let p1 = getInfo({
  //   name: 'QQ'
  // })

  // let p2 = getInfo({
  //   name: 'QQQ',
  //   age: 18
  // })

  // let obj = {
  //   name: 'QQ',
  //   age: 18,
  //   num: 100
  // }

  // let p3 = getInfo(obj)



// 2 函数类型的接口
// 对方法传入的参数 以及返回值进行约束

// interface Info {
//   (name: string, age: number): string;
// }

// let getInfo: Info = function (name: string, age: number): string {
//   return `${name} : ${age}`
// }

// let p1 = getInfo('QQ', 18)