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
