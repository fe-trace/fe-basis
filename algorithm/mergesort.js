/**
 * 归并排序
 * 稳定性：稳定
 * 时间复杂度：nlgn
 * 空间复杂度：1
 */

function merge(left, right) {
	var result = [];

	while(left.length && right.length) {
		if(left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	while(left.length) {
		result.push(left.shift());
	}

	while(right.length) {
		result.push(right.shift());
	}

	return result;
}

function mergeSort(array) {
	var len = array.length;

	if(array.length < 2) {
		return array;
	}
	var index = Math.floor(len / 2);
	var left = array.splice(0, index);
	var right = array;

	return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([1,0,-0,4,6,3,5,2,3]));