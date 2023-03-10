function op(o) {
	let j = 0;
	for (let i = 0; i < o.length; i++) {
		if (o[i] === true) {
			j++;
		}
		return j;
	}
}
console.log(io([true, false, false]));

// (2)
function io(n) {
	let u = 0;
	n.map((m) => {
		if (m === true) u++;
	});
	return u;
}

console.log(io([true, false, true, false, true]));
