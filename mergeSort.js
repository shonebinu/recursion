function merge(array1, array2) {
	const array = [];

	let i = 0;
	let j = 0;

	while (i < array1.length && j < array2.length) {
		if (array1[i] < array2[j]) {
			array.push(array1[i++]);
		} else {
			array.push(array2[j++]);
		}
	}

	while (i < array1.length) array.push(array1[i++]);

	while (j < array2.length) array.push(array2[j++]);

	return array;
}

function mergeSort(array) {
	if (array.length === 1) return array;

	const mid = Math.floor(array.length / 2);

	const leftArray = array.slice(0, mid);
	const rightArray = array.slice(mid);

	const leftSorted = mergeSort(leftArray);
	const rightSorted = mergeSort(rightArray);

	return merge(leftSorted, rightSorted);
}
