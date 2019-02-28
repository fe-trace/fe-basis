### 相同点：Object.is 和 === 功能相似，比较时不进行类型转换

### 不同点：
* Object.is(0, -0) -> false
* Object.is(NaN, NaN) -> true
* 0 === -0 -> true
* NaN === NaN -> false
