/*
1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив) 
  и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null
  Пиццы конкурента:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
*/

function getEmployeeInfo(pizza) {
	const competitorPizzas = [
		'Peperoni',
		'Caprichosa',
		'Diablo',
		'4 cheeses',
		'hawai',
	]
	let unique = []
	for (let i = 0; i < pizza.length; i++) {
		if (competitorPizzas.indexOf(pizza[i]) === -1) {
			unique.push(pizza[i])
		}
	}
	return unique.length > 0 ? unique : null;
}

const myPizzas = [
	'Peperoni',
	'Caprichosa',
	'Diablo',
	'4 cheeses',
	'hawai',
	'Calzone',
	'Carbonara',
	'Marinara',
	'Crudo',
]

const myPizzas_2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
console.log(getEmployeeInfo(myPizzas))

// 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово с наибольшим количеством букв.
//   Если таких слов несколько - выводит их все.

function moreLetters(string) {
	string = string.split(' ')
	let arr = []
	let maxLengthWord = 0
	for (let i = 0; i < string.length; i++) {
		if (string[i].length > maxLengthWord) {
			maxLengthWord = string[i].length
			arr = [string[i]]
		} else if (string[i].length === maxLengthWord) {
		    arr.push(string[i])
	     }
	return arr.join(' ')
}

const string = 'have a nice day'
console.log(moreLetters(string))

// 3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты и возвращает массив с только уникальными значениями.

function duplicate(numberArray) {
	const mySet = new Set(numberArray)
	const newArr = Array.from(mySet)
	return newArr
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 7, 8]
console.log(duplicate(numberArray))

// 4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом

function palindrome(string) {
	invert = string.split('').reverse().join('')
	if (invert === string) {
		return 'palindrome'
	} else {
		return "it's not a palindrome"
	}
}

const str = 'alla'
console.log(palindrome(str))
