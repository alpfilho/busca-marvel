export function isInt(value) {
	if (isNaN(value)) {
		return false;
	}
	const x = parseFloat(value);
	return (x | 0) === x;
}
