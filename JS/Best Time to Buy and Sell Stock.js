/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (price) {
	let buy = price[0];
	let result = 0;
	for (let i of price) {
		if (i < buy) {
			buy = i;
		}
		result = Math.max(i - buy, result);
	}
	return result;
};
