//(1)
function h(arr) {
	let p = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			p += arr[i];
		} else {
			return "ah";
		}
	}
	return p;
}
console.log(h([1, 2, 3, 4, 5]));

//(2)
function y(arr1) {
	return arr1.filter((l) => l > 0).reduce((ah, jk) => ah + jk, 0);
}
console.log(y([1, 2, 4, -3, -4]));
