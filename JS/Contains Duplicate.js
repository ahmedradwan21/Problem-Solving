/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (arr) {
	let ah = [];
	for (let i = 0; i < arr.length; i++) {
		if (ah[arr[i]]) {
			return true;
		}
		ah[arr[i]] = true;
	}
	return false;
};
