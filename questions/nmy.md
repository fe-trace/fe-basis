> Q：行内元素和行内快元素的区别？

> Q：垂直居中布局

> Q：纯css实现flex实现三列布局，中间宽度可变，两边自适应
>
> A：resize属性实现宽度可变，布局flex

> Q：解释transition/transform/animation并实现简单的心跳动画

> Q：数组打平方式？[1,2,[3]] => [1,2,3]
>
> A：Array.prototype.flat/Array.prototype.reduce

> Q：数组去重方式？[1,2,1] => [1,2]
>
> A：[...new Set([1,2,1])]

> Q：代码执行结果？
> ```
> let fn = () => { 
>   console.log(this); 
>   // ?
> };
> fn.bind({})();
> ```

> Q：截流函数实现

> Q：1234567890.12 格式化成 1,234,567,890.12
>
> A：toLocalString

> Q：什么是csrf以及解决方案？

> Q：A 标签设置 target="_blank" 点击跳转时如何防止当前页面被篡改？
>
> A：rel="noopener noreferrer"，打开的页面不能访问到当前页面。

> Q：解释原型和原型链

> Q：如何创建一个没有原型的对象？
>
> A：Object.create(null)/Object.setPrototypeOf({}, null)

> Q：Component和PureComponent的区别？
>
> A：PureComponent更新会进行一次浅比较

> Q：redux和React如何结合？
>
> A：react-redux 实现细节

> Q：redux异步请求插件原理
>
> A：redux-think/redux-promise/redux-saga实现细节

> Q：介绍Generator以及如何自动执行
>
> A：Generator基本语法和co库实现细节

> Q：事件发布订阅如何实现？

> Q：介绍 Reack hook

> Q：首屏加载速度如何优化？
>
> A：ssr/浏览器缓存/静态资源压缩合并/动态加载静态资源/CDN/JS和css位置对页面渲染的影响

> Q：无限长度列表如何优化？
>
> A：活动窗口思想，只展示屏幕内的数据，其他的数据缓存在内存中