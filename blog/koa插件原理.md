### koa作为一个轻量级的web框架，其核心是它的中间件机制。了解其中间件原理是必要的。

> koa的中间件机制可以看做一个洋葱模型，将处理逻辑分布在各个中间件中，当请求处理时，串行执行每个中间件。通过 next 方法执行下一个中间件逻辑。每个中间件最后都返回一个promise，promise依次返回后顶层 promise 的 then 方法才会调用。

### 核心代码实现：
```
function co(array) {
	return run(0);
	function run(i) {
		var fuc = array[i];

		if(i >= array.length) {
			return Promise.resolve('');
		}
		return Promise.resolve(fuc(run.bind(null, i+1)));
	}
}
```


### 备注
* 中间件之间数据传递对象: context.state
* state是context上的属性，可以保存数据，在渲染模版时可以直接使用
* 插件中注入的 next 对象本质上就是下一个中间件
