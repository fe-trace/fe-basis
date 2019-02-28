/**
 * 插入排序
 * 稳定性：稳定
 * 时间复杂度：n*n
 * 空间复杂度：1
 * 实现：从I=1开始对比 (i-1)~0 之间的数，比I大就将(i-1)依次往后移动，比I小或者i=0时循环停止，交换I和i的位置
 */

function insertSort(array) {
	var len = array.length;

	/** 
	 * 使用for循环方式实现
	 **/ 
	for(var i=0; i<len-1; i++) {
		for(var j=i+1; j>0; j--) {
			if(array[j] < array[j-1]) {
				var temp = array[j];

				array[j] = array[j-1];
				array[j-1] = temp;
			}
		}
	}

	/** 
	 * 使用while方式实现
	 **/ 
	// for(var i=1; i<len; i++) {
	// 	var current = array[i];
	// 	var preIndex = i-1;

	// 	while(preIndex >=0 && array[preIndex] > current) {
	// 		array[preIndex+1] = array[preIndex];
	// 		preIndex --;
	// 	}
	// 	array[preIndex+1] = current;
	// }
	return array;
}

console.log(insertSort([1,0,-0,4,6,3,5,2,3]));