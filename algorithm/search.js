/**
 * 二分法查找
 */ 
var array = [0,1,2,3,4,5,6,7,8,9];

function search(array, num) {
	var len = array.length;
	var left = 0;
	var right = len-1;
	var mid = Math.floor(len / 2);

	while(array[mid] != num && left < right) {
		if(array[mid] > num) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
		mid = Math.floor((right + left) / 2)
	}

	if(array[mid] === num) {
		console.log(mid);
	} else {
		console.log(-1);
	}
}

search(array, 0);