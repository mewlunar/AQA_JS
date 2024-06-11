// 5*. Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры.
//Если сумма получилась больше 9 - снова сложите цифры. И так пока, сумма не станет меньше либо равной 9.
//   После окончания сложений возвращает полученное число. Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1
function sumDigits(num) {
	num = Math.abs(num).toString().split('')
	let sum = 0

	for (let i = 0; i < num.length; i++) {
		sum += +num[i]
	}

	if (sum <= 9) {
		return sum
	} else {
		return sumDigits(sum)
	}
}

const number = 64
console.log(sumDigits(number))

// 6*. Написать функцию, которая принимает на вход строку с текстом, и заменяет каждую пару стоящих подряд идентичных букв на одну следующую в алфавите,
//     и так пока в тексте не останется двух одинаковых букв стоящих рядом (через пробел и другой знак препинания можно)
//     Пример: aabc => bbc => cc => d
function replacingRepeats(string) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'
	let newString = ''

	for (let i = 0; i < string.length; i++) {
		if (string[i] === string[i + 1]) {
			let index = alphabet.indexOf(string[i])
			if (index === alphabet.length - 1) {
				newString += alphabet[0]
			} else {
				newString += alphabet[index + 1]
			}
			i++
		} else {
			newString += string[i]
		}
	}
	return newString
}

function deleteSymbols(string) {
	string = string.replace(/[^a-zа-яё]/gi, '')
	return string
}

function duplicationCheck(string) {
	let duplicated = true
	string = deleteSymbols(string)

	while (duplicated) {
		let tempString = replacingRepeats(string)
		if (tempString === string) {
			duplicated = false
		} else {
			string = tempString
		}
	}

	return string
}

const string = 'a, a, b, c, z, z'
console.log(duplicationCheck(string))
