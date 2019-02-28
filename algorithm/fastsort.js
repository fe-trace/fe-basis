/**
 * 快速排序
 * 稳定性：不稳定
 * 时间复杂度：n^2
 * 空间复杂度：lgn
 * 实现：取数组中间位置数A作为基准，比A小的放在左边，比A大的放在右边，不停递归
 */

function fastSort(array, left, right) {
	// 两个下标重叠时退出循环
	if(left >= right) {
		return array;
	}
	var index = sort(array, left, right);

	if(left < index - 1) {
		fastSort(array, left, index-1);
	}

	if(right > index) {
		fastSort(array, index, right);
	}
	return array;
}

function sort(array, left, right) {
	// 保存当次循环的中间值
	var mid = array[Math.floor((left + right) / 2)];

	while(left <= right) {
		while(array[left] < mid) {
			left ++;
		}

		while(array[right] > mid) {
			right --;
		}

		// =时退出循环
		if(left <= right) {
			var temp = array[left];

			array[left] = array[right];
			array[right] = temp;
			left ++;
			right --;
		}
	}
	return left;
}

let array = [1,0,4,6,-2,-0,5,2,3];
console.log(fastSort(array, 0, array.length-1));