export const BASE_URL = 'https://qrng.anu.edu.au/API/jsonI.php';

export const SINGLE_VALUE_URL = `${BASE_URL}?length=1&type=uint8`
export const BASIC_VALUES_URL = `${BASE_URL}?length=10&type=uint8`

export function arrayUpdateHelper(dataArray, item) {
	dataArray.shift()
	dataArray.push(item)
	return [...dataArray]
}