### Promise 基础语法：https://www.jianshu.com/p/fe5f173276bd

* 1.promise创建未后状态为pendding，如果报错状态变成rejected，完成状态变成resolved

```
    new Promise(function(resolve, reject) {
        resolve();
    });
    // { status: resolve, value: undefined }

    new Promise(function(resolve, reject) {
        reject(1);
    });
    // { status: reject, value: 1 }
```

* 2.promise捕获错误后返回 resolved 状态的promise

```
    new Promise(function(resolve, reject) {
        reject(new Error("error"));
    }).catch(function(err) {
        console.log("err: ", err);
        return "err";
    });
    // { status: resolve, value: err }
```

* 3.promise.resolve 和 promise.reject 都会返回新的promise

* 4.promise状态变成 resolved 和 rejected 之后就不会再改变，并返回新的promise(新的promise会继承原始promise的状态)

```
    var p = Promise.resolve("1");

    p.then(function(res) {
        console.log("res: ", res);
        return "abc";
    }).then(function(res) {
        console.log("res: ", res);
    });
```

* 5.promise状态变成 resolved 和 rejected 之后重复调用then方法可以得到promise的值
```
    var p = Promise.resolve("1");

    p.then(function(res) {
        console.log("res: ", res);
        // 1
    });
    p.then(function(res) {
        console.log("res: ", res);
        // 1
    });
```

* 6.resolved 状态的 promise.then 生成 resolved 状态的 promise，rejected 状态的 promise.catch 后生成 resolved 状态的 promise。

```
    Promise.reject("1").then(function() {
        return "abc";
    })
    // { status: reject, value: 1 }
    Promise.reject("1").catch(function() {
        return "abc";
    })
    // { status: resolve, value: abc }
```

* 7.promise.then 和 promise.catch 中可以返回一个指定的promise和普通数值，返回promise对象时，返回结果就是这个promise，返回普通数据时就把数据包装成promise对象

```
    // return promise -> promise
    // return data = > promise { value: data  };

    Promise.resolve(1).then(function() {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(100);
            }, 1000);
        });
    }).then(function(data) {
        console.log("data: ", data);
    });
```

* 8.promise规范规定，即使 promise 的初始状态为resolve。then方法依然需要在下一次事件循环执行。

```
    Promise.resolve('abcd').then(function() {
        console.log('222');
    });
    console.log('111');
    // 111
    // 222
```

### Generator介绍
* Generator是ES6引入新的特性，可以多次返回。（函数默认只有遇到 return 语句才会返回）
* Generator提供函数多次返回的机制：yield
* Generator执行过程中遇到 yield 就会返回后面的计算结果
* Generator需要执行过程中需要不停的调用 next 方法，控制函数往下执行
* yield 后面的结果作为 next 执行的结果 { value: data, done: true/false }
* yield 之前的赋值操作需要第二次调用 next(data) 时传递

### Generator 示例
```
    var fuc = function*(x) {
        var a = yield x + 1;
        // a = 'b'
        var b = yield x + 2;
        // b = 'c'
        return x + 3;
    }

    var f = fuc();
    f.next('a');
    // { value: 2, done: false }
    f.next('b')
    // { value: 3, done: false }
    f.next('c')
    // { value: 4, done: true }
    f.next('d')
    // { value: undefined, done: true }
```

### Generator和Promise结合
> yield后面可以跟任何数据，通常业务中需要同步执行异步代码，此时可以结合两者的特性实现。yield后面直接跟promise对象返回
```
function *gen() {
    let data = yield Promise.resolve('abc');
    console.log(data);
    // { done: false, value: 'abc' }
}
gen().next();
```

```
Q：从上面代码执行过程可以看出执行一个 generator 需要手动调用 next 方法，实际业务中如何能让 generator 自动执行？
A：CO库
```

### CO库代码简化版
```
function co(gen) {
    const item = gen.next()
    if (item.done) {
        return item.value
    }

    const { value, done } = item
    if (value instanceof Promise) {
        value.then((data) => {
            co(gen)
        });
    } else {
        co(gen)
    }
}
```

### Promise和async/await
> async和await语法是 Generator 语法自动执行语法糖，可以更方便的使用 Generator

* await 只能在 async 修饰的function中调用
* async 修饰的函数调用时返回的结果是promise（该promise适合上面所有规则）

### 参考wiki
* generator自动执行原理
https://www.jianshu.com/p/c1b8b89c4905
* yield高级语法
https://juejin.im/post/5bc6a73ce51d450e5d0b7167#heading-0