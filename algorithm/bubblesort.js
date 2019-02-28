/**
 * 冒泡排序
 * 稳定性：稳定
 * 时间复杂度：n*n
 * 空间复杂度：1
 * 实现：相邻的两个数比较，大的数放在右边
 */

function bubble(array) {
	// flag：如果在一次循环中不发生数据交换，则认为数据是有序的

	for(var i=0,len=array.length; i<len; i++) {
		var flag = true;
		for(var j=0; j < len-1-i; j++) {
			if(array[j] > array[j+1]) {
				var temp = array[j+1];

				array[j+1] = array[j];
				array[j] = temp;
				flag = false;
			}
		}

		if(flag) {
			break;
		}
	}
	return array;
}

console.log(bubble([1,6,2,3,4,5]));