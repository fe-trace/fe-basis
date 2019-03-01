> Q：执行 fn() 输出结果?
> ```
> function fn() {
>   console.log(F);
>   var F = 1;
>   function F(){}
>   console.log(F);    
> }
> ```

> Q：代码执行结果？
> ```
> Function.prototype.a = function() {
>    console.log('a');
> }
> Object.prototype.b = function() {
>     console.log('b');
> }
> let F = function(){};
> let f = new F();
> F.a();
> F.b();
> f.a();
> f.b();
> ```

> Q：代码执行结果？
> ```
> let array = [1,4,2,3];
> let narray = array.sort(function(a,b) { return a-b; });
> console.log(narray);
> console.log(array);
> ```

> Q：0.1+0.2 = ？双精度浮点数在内存中如何存储？

> Q：XMLHttpRequest 默认发送异步请求，如何发送同步请求？

> Q：如何实现预览和压缩本地图片？
>
> A：FileReader和 input type="file"  读取本地文件，转换为base64进行展示，利用canvas进行图片压缩

> Q：如何做图片上传进度展示？
>
> A：progress事件

> Q：React-Router进入页面时如何做登录校验？

> Q：React兄弟节点如何通信
>
> A：props/getChildContext/redux

> Q：redux实现原理

> Q：介绍React声明周期以及如何和redux结合

> Q：React组件如何优化？
>
> A：function组件/PureComponent/shouldupdate

> Q：setState调用过程细节