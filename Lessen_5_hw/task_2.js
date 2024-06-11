//Написать скрипт, переводящий количество байт в нужные единицы
let counter = 0
let bytes = 2031209403490

while (counter < 4) {
	if (bytes / 1024 >= 1) {
		bytes /= 1024
		counter++
	} else break
}
switch (counter) {
	case 0: {
		console.log(bytes + 'bytes')
		break
	}
	case 1: {
		console.log(bytes.toFixed(1) + 'Kb')
		break
	}
	case 2: {
		console.log(bytes.toFixed(1) + 'Mb')
		break
	}
	case 3: {
		console.log(bytes.toFixed(1) + 'Gb')
		break
	}
	case 4: {
		console.log(bytes.toFixed(1) + 'Tb')
		break
	}
}

//Сделать из "*" в консоли ромб
const h = 4
for (let i = -h; i <= h; i++) {
	let line = ''
	for (let j = -h; j <= h; j++) {
		if (Math.abs(i) + Math.abs(j) <= h && (i + j) % 2 !== 0) {
			line += '*'
		} else {
			line += ' '
		}
	}
	if (/^\s+$/.test(line) === false) {
		console.log(line)
	}
}

//Сделать из "*" в консоли равнобедренный треугольник
for (let i = h; i >= 0; i--) {
	let line = ''
	for (let j = -4; j <= h; j++) {
		if (Math.abs(i) + Math.abs(j) <= h && (i + j) % 2 !== 0) {
			line += '*'
		} else {
			line += ' '
		}
	}
	if (/^\s+$/.test(line) === false) {
		console.log(line)
	}
}

/*
Вам нужно вывести в консоль числа от 1 до 100.
Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”.
Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.
*/

for (let i = 1; i <= 100; i++) {
	if (i === 0) {
	} else if (i % 3 === 0 && i % 5 === 0) {
		console.log(i + ' - делится и на 3 на 5')
	} else if (i % 3 === 0) {
		console.log(i + ' - делится на 3')
	} else if (i % 5 === 0) {
		console.log(i + ' - делится на 5')
	} else {
		console.log(i + ' - не делится на 3 или 5')
	}
}

/*
Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer
*/

let str = 'Hello My Name Tanya'
let arr = new Array()
str = str.split(' ')
strLength = str.length
arr.push(str[0].toLowerCase())
for (let i = 1; i < str.length; i++) {
	let str_2 = str[i]
	let res = str_2.slice(0, 1).toUpperCase() + str_2.slice(1)
	arr.push(res)
}
console.log(arr.join(''))
