/**
 * 选择排序
 * 稳定性：不稳定
 * 时间复杂度：n*n
 * 空间复杂度：1
 * 不稳定原因：后面有某个数小于前面的数，交换位置被换到后面去了
 * 示例：【-0，0，-1】-0和-1交换位置导致-0交换位置，导致算法不稳定
 * 实现：从i+1开始，找本次循环中比i小的数，最后交换位置（交换位置导致算法不稳定）
 */

function selectSort(array) {
	var len = array.length;

	for(var i=0; i<len-1; i++) {
		var min = i;

		for(var j=i+1; j<len; j++) {
			if(array[j] < array[min]) {
				min = j;
			}
		}

		var temp = array[i];

		array[i] = array[min];
		array[min] = temp;
	}

	return array;
}

console.log(selectSort([-0,2,0,-1,6,9]));