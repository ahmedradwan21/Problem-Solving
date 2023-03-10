function rev(n) {
	return n
		.toString()
		.split("")
		.reverse()
		.map((m) => Number(m));
}

console.log(rev(812945));
