/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	if (s === t) {
		return true;
	} //علشان اعرف هما مساوين بعض ولا لا علشان لو مساويين بعض ف خلاص ترو
	let o = 0;
	for (let i = 0; i < t.length; i++) {
		if (s[o] === t[i]) {
			o++;
		}
	}
	return o === s.length;
	//to return character solve
};
