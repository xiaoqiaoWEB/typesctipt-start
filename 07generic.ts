/*

泛型：软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。


通俗理解：泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持(类型校验)

*/

// 泛型：可以支持不特定的数据类型   要求：传入的参数和返回的参数

// T 表示泛型，具体什么类型是调用这个方法的时候决定的
// function getInfo<T> (name: T):T {
//   return name;
// }

// getInfo<string> ('xiaqo')
// getInfo<number> (123)


//泛型类：
// class MinNum <T> {
//   public list: T[] = [];

//   add(v: T): void {
//     this.list.push(v)
//   }

//   min(): T {
//     let x = this.list[0];
//     for(var i=0; i<this.list.length; i++) {
//       if(x > this.list[i]) {
//         x = this.list[i]
//       }
//     }
//     return x;
//   }
// }

// let p = new MinNum <number> ();
// p.add(2)
// p.add(5)
// p.add(1)

// console.log(p.min()) //1

// 泛型接口
// interface Config <T> {
//   (value:T):T;
// }

// function getData <T> (value: T): T {
//   return value
// }

// let myData:Config <string> = getData

// myData('20')



// 把类作为 参数类型的 泛型类

//定义操作数据库的泛型类
class MysqlDb <T> {
  add(info: T): boolean {
    console.log(info)
    return true;
  }
}


//想给User表增加数据
// 1、定义一个User类 和数据库进行映射
class User {
  userName: string | undefined;
  age: number | undefined;
}

let u = new User();
u.userName = 'name';
u.age = 18;

let db = new MysqlDb <User>()

db.add(u)

//2、相关ArticleCate增加数据  定义一个ArticleCate类 和数据库进行映射
class ArticleCate {
  title: string | undefined;
  desc: string | undefined;
  status: number | undefined;
}

let p =new ArticleCate();

p.title = '123';
p.desc = '456';
p.status = 1;

let pDb = new MysqlDb <ArticleCate> ();

pDb.add(p)