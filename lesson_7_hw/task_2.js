// 1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом,
//   чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении.
//   Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.

function transformString(string) {
	const chars = string.toLowerCase().split('')
	const charCounts = chars.reduce((counts, char) => {
		if (char.match(/[a-z]/)) {
			if (!counts[char]) {
				counts[char] = 0
			}
			counts[char]++
		}
		return counts
	}, {})

	const transformed = chars.map(char => {
		if (char.match(/[a-z]/)) {
			return charCounts[char]
		}
		return char
	})
	return transformed.join('')
}
const string = 'I am the best AQA ever!'
console.log(transformString(string))

// 2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
//   Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.
//   const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];

const prices = [
	64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421,
	9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123,
]

const amount = prices.reduce((total, price) => {
	return total + price
}, 0)
const averageNumber = Math.floor(amount / prices.length)

console.log(`Итого: ${amount} $, средняя цена товара ${averageNumber} $`)

// 3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по по следующему критерию: количество гласных букв.
//   Массив должен быть отсортирован по возврастанию количества гласных букв в слове.

function sortString(array) {
	return [...array].sort(function (a, b) {
		return vowelCount(a) - vowelCount(b)
	})
}

function vowelCount(string) {
	const vowels = 'aeijouy'
	let count = 0
	for (const symbol of string) {
		if (vowels.indexOf(symbol.toLowerCase()) != -1) {
			count++
		}
	}
	return count
}

const array_1 = [
	'every',
	'dAY',
	'writting',
	'code',
	'CeeeeDaaaYZeeee',
	'finalize',
	'y',
	'z',
]

console.log(sortString(array_1))

// 4. У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’], количество элементов и последовательность может быть разной.
//   Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
//   Усложнение: в массиве могут быть вложены еще массивы на разной глубине. (ПОПРОБУЙТЕ МЕТОД .flat(), изучите как он работает с разными глубинами вложенности)
//   Вернуть нужно всё также есть ли у каждой скобочки соответствующая пара.
//   Пример:
//   const arr = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]]

function bracketCompare(array) {
	const arr = [...array].flat(Infinity)
	const amount = arr.reduce((counter, brackets) => {
		brackets === ')' ? (counter += 1) : (counter -= 1)
		return counter
	}, 0)
	return amount
}

const array = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]]
result = bracketCompare(array)

result === 0
	? console.log(array)
	: console.log('Не у каждой скобочки есть соответствующая пара')
