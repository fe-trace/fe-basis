### nodeJs事件循环

> JS可以运行在浏览器和服务端，都通过事件循环来实现异步操作。但是两个端在事件循环过程中还是存在细微的差异。

> 浏览器端：一次事件循环从 script 标签中的宏任务开始，首先将宏任务放入执行栈中开始执行，遇到异步宏任务，将任务添加到宏任务队列，遇到异步的微任务，将任务添加到微任务队列。当执行栈为空时，先执行整个队列中的微任务，浏览器渲染之后，一次事件循环结束。下一次事件循环从宏任务队列中取出第一个任务放入执行栈中，开始下一次事件循环。

> nodeJS：node端事件循环比浏览器端更复杂，node一次事件循环分为六个阶段:
> * timers阶段：执行已经到期的timer回掉（setTimeout/setInterval）
> * I/O callback阶段：执行IO回掉（文件／网络请求）
> * idle/prepare阶段：node 内部调用
> * poll阶段：获取新的IO事件执行，或者在此阶段暂停，等待事件唤醒
> * check阶段：执行 setImmediate 回调
> * close callbacks阶段：执行close事件回调（TCP断开）
> 
> 每个阶段又会进行细分：
> * 执行当前阶段的回调函数
> * 执行 process.nextTick 回调
> * 执行整个微任务队列中的任务

```
Q：一次循环中某个阶段存在多个回调是一次执行一个回调还是一次整个队列？
A：一次循环中先执行当次循环中的所有回调，再执行 process.nextTick 和微任务

Q：不同阶段的回调中添加 setTimeout 和 setImmediate 执行的顺序是否相同？
A：不同，两个函数回调执行的阶段不同，在不同阶段的回调中添加会有不同的结果。如果在IO回调中添加两个回调，setImmediate会先执行。

Q：直接执行 setTimeout 和 setImmediate 结果如何？
A：直接执行两个回调顺序可能不一致，如果timeout执行过快，主线程执行完之后 timeout 延迟时间未到，node事件循环进入下一个阶段，timeout会在下一次循环中timer阶段执行。如果主线程执行过慢，主线程进行下一次事件循环时延时已到，则timeout会先执行。

Q：poll阶段详细过程？
A：poll阶段主要是执行IO事件的回调，如果有回调就全部执行，然后进入下一个阶段。如果没有回调，检测下一个阶段是否有 setImmediate 回调，如果有，则退出当前阶段，进入下一个阶段。如果没有 setImmediate 回调，设置当前时间到 timers 阶段中最近的回调时间之间的时间差，进入睡眠时间。超时后被唤醒进入timers 阶段，如果期间被事件唤醒，则进入正常的事件循环。

Q：setTimeout 和 setImmediate 的区别？
A：setTimeout 和 setImmediate 处于不同的阶段，setTimeout 使用最小堆存储回调，每次执行回调都要调整最小堆，setImmediate 使用队列存储，执行过程性能比 setTimeout 好。

Q：nodeJS 整个事件循环过程？
A：首先执行执行栈中的同步代码，然后执行 process.nextTick 和 微任务，然后依次执行 timers／IO callbacks／idle／poll／check／close 六个阶段的回调（每个阶段细分过程见上文）。
```

### 示例
```
setTimeout(function() {
    console.log('1');
    setTimeout(function() {
        console.log('3');
    }, 0);
    setImmediate(function() {
        console.log('2');
    });
    setImmediate(function() {
        console.log('4');
    });
    process.nextTick(function() {
        console.log('5');
    });
    // 微任务
    Promise.resolve(function() {
        console.log('6');
    });
}, 0);
// 1 5 6 2 4 3
```

### 参考wiki
* https://juejin.im/post/5b61d8e3e51d45191d7a28a8
* https://juejin.im/entry/5b261b7a6fb9a00e78664650

PS：每个阶段的回调函数和微任务队列都有个数限制，如果超过限制个数，强制进入下一个阶段

