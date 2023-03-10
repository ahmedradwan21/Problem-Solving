function ah(num1) {
	if (num1 % 2 === 0) {
		return `even`;
	} else {
		return `odd`;
	}
}
console.log(ah(2));

//(2)
function o(num1) {
	return num1 % 2 === 0 ? "even" : "odd";
}

//(3)
let solve = function (oo) {
	return oo % 2 === 0 ? "even" : "odd";
};
console.log(solve(2));

//(4)
let kl = (num1) => (num1 % 2 === 0 ? "even" : "odd");

console.log(kl(2));
