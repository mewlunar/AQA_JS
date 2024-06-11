/*
Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом),и выводить в консоль количество гласных и согласных букв в этом слове. 
Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants
*/
const vowelList = 'aeiouy'
const consonantsList = 'bcdfghjklmnpqrstvwxz'
let vowelCount = 0
let consonantsCount = 0
let str = 'I am super engineer'
str = str.toLowerCase()
for (let i = 0; i < str.length; i++) {
	if (vowelList.indexOf(str[i]) !== -1) {
		vowelCount += 1
	} else if (consonantsList.indexOf(str[i]) !== -1) {
		consonantsCount += 1
	}
}
console.log(
	`word contains vowels ${vowelCount} and ${consonantsCount} consonants`
)

/*
Написать программу, которая видоизменяет принимаемое слово (переменная со словом) шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон. 
Направление шифрования задается переменной offset, которая может быть +1 и -1.
*/
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
let input = 'A1 a 2A'
const shift = -1
let result = ''
for (let i = 0; i < input.length; i++) {
	if (alphabet.indexOf(input[i].toLowerCase()) === -1) {
		result += input[i]
	} else {
		let index = alphabet.indexOf(input[i].toLowerCase())
		let index_2 = index + shift
		if (index === alphabet.length - 1 && shift > 0) {
			index_2 = 0
		}
		if (index === 0 && shift < 0) {
			index_2 = alphabet.length - 1
		}
		if (input[i] !== alphabet[index]) {
			result += alphabet[index_2].toUpperCase()
		} else {
			result += alphabet[index_2]
		}
	}
}
console.log(result)
