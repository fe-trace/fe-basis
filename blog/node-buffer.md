### Buffer

#### 概述
> Buffer是nodeJS中操作二进制流的方式，它可以在内存中分配一块空间用于存储二进制数据。Buffer分配缓冲区大小之后，不可再修改大小。

### Buffer.form/Buffer.alloc/Buffer.allocUnsafe/Buffer.allocUnsafeSlow
> Buffer.form 接受 字符串，数组和buffer作为参数初始化 buffer。
>
> Buffer.alloc 分配一个指定大小的缓冲区，并将缓冲区中之前的内容清空
>
> Buffer.allocUnsafe 分配一个指定大小的缓冲区，但是缓冲区中可能保留之前的老数据.性能比alloc好
>
> Buffer.allocUnsafeSlow 功能和 Buffer.alloc类似。如果分配的缓冲区小于 Buffer.poolSize/2(4K)。allocaUnsafe性能更好

备注：
1. Buffer模块在预先分配一个内部大小为 Buffer.poolSize 的 Buffer 实例，作为快速分配的内存池。 Buffer.allocUnsafe分配小于4K的缓冲区时，分配的区域可能是从预分配的 Buffer 中进行分配，所以性能更好。
2. Buffer 分配的内存属于堆外内存，不计算在nodeJs进程内存空间限制上。
3. 基于 arrayBuffer 创建的 Buffer 对象，buffer 的内存空间会共享

### Buffer与TypedArray
> TypedArray.slice 会创建新的内存区域并拷贝。Buffer.slice是在现有的区域上创建而不拷贝。
>
> Buffer.form(TypedArray) 会拷贝TypedArray的内容初始化Buffer
>
> Buffer.form(TypedArray.buffer) 会共享 TypedArray 的缓冲区