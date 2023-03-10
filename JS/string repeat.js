//(1)
function jk(l, j) {
	k = "";
	for (let i = 0; i < l; i++) {
		k += j;
	}
	return k;
}
console.log(jk(10, "i"));

//(2)
function lk(l, u) {
	return u.repeat(l);
}
console.log(lk(5, "i"));
