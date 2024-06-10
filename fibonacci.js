function fibs(n) {
	if (n <= 0) return [];
	if (n === 1) return [0];

	const sequence = [0, 1];
	for (let i = 2; i < n; i++) {
		sequence.push(sequence.at(-1) + sequence.at(-2));
	}

	return sequence;
}

function fibsRec(n) {
	if (n <= 0) return [];
	if (n === 1) return [0];
	if (n === 2) return [0, 1];

	const sequence = fibsRec(n - 1);

	return [...sequence, sequence.at(-1) + sequence.at(-2)];
}
