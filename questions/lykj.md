> Q：KOA插件实现原理

> Q：pm2如何实现nodejs集群

> Q：使用node命令执行脚本如何获得设置的环境变量
>
> A：process.env

> Q：docker自动部署如何做文件编排

> Q：async／await 如何做一场捕获

> Q：对象中属性可遍历的原因？
> 
> A：enumerable属性
> ```
> Object.defineProperty({}, 'name', {
>    configurable: false,
>    writable: true,
>    enumerable: true,
>    value: '张三'
> })
> ```

> Q：自定义实现webpack的 plugin 和 loader 细节？

> Q：解释原型和原型链？

> Q：解释闭包

> Q：new操作符实现细节
>
> A：
> ```
> let obj = {};
> obj.__proto__ = Constructor.prototype;
> let nobj = Constructor.call(obj);
> obj.Constructor = Constructor;
> return obj || nobj;
> ```

> Q：如何判断一个对象时数组？
>
> A：Array.isArray/Object.prototype.toString

> Q：介绍 React hook

> Q：移动端适配方案
>
> A：hostcss原理

> Q：移动端1px产生原因以及解决方案

> Q：解释 flex-wrap 属性

> Q：http请求头有哪些和缓存相关的属性以及各自的作用
>
> A：expires/cache-control/last-modify/etag

> Q：https交换密钥过程

> Q：React使用过程中遇到的问题

> Q：前端发展趋势
>
> A：大前端