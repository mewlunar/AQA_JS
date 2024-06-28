// Task 1.
// Имеется массив объектов (ниже). Ваше задание:
const characters = [
	{ name: 'Barney', age: 36 },
	{ name: 'Fred', age: 40 },
	{ name: 'Jack', age: 50 },
]
//Имеется массив объектов (ниже). Ваше задание:
//1. Используя Object.keys и метод forEach вывести в консоль ключи каждого объекта
characters.forEach(obj => {
	console.log(Object.keys(obj))
})
//2. Используя Object.values и метод forEach вывести в консоль значения каждого объекта
characters.forEach(obj => {
	console.log(Object.values(obj))
})
// 3. Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${ket}, value = ${value}`.
//Перебирать каждый объект циклом for..of вида for(const [key, value] of Object.entries)
characters.forEach(obj => {
	for (const [key, value] of Object.entries(obj)) {
		console.log(`key = ${key}, value = ${value}`)
	}
})
// 4. Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`.
//Перебирать каждый объект циклом for..in
characters.forEach(obj => {
	for (const key in obj) {
		console.log(`key = ${key}, value = ${obj[key]}`)
	}
})
// 5. Создайте объект qa с полями name, age, salary и методом getInfo, который будет возвращать строку вида:
//`Hello, my name is ${name}, i'm ${age} and my salary is ${salary}`. Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.
const qa = { name: 'Barney', age: 36, salary: 1000 }

qa.getInfo = function () {
	console.log(
		`Hello, my name is ${this.name}, i'm ${this.age} and my salary is ${this.salary}`
	)
}
qa.getInfo()
