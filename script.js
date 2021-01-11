function endsWith(x, y) {
  let index = x.lastIndexOf(y);
  return index !== -1 && index === x.length - y.length;
}

function f() {
	if (someCond());
		return 23;
	return 42;
}
