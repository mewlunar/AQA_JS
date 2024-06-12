// 5*. Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число)
//   и возвращает пропущенное число. Массив не отсортирован и может содержать дубликаты.
//   Решите эту задачу, используя эффективные методы массива.
function findMissingNumber(arr) {
	const arr_1 = [...new Set(arr)]
	const arrSort = arr_1.sort(function (a, b) {
		return b - a
	})
	const sum = arr_1.reduce(function (a, b) {
		return a + b
	}, 0)
	return (arrSort[0] * (arrSort[0] + 1)) / 2 - sum
}

const arr = [1, 2, 3, 4, 6, 11, 7, 8, 7, 9, 10]
console.log(findMissingNumber(arr))
