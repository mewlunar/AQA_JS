// 6**. В файле вы найдете массив карточек юзеров. Задача - создать функцию, которая уберет из массива дубликаты.
//   Вернуть массив с сугубо уникальными карточками. Реализовать методом SET.
//   Разобраться, как считать данные из файла КОДОМ, а не копировать ручками.

const fs = require('fs')

function deleteDuplicates(cards) {
	const uniqueCards = Array.from(
		new Set(cards.map(card => JSON.stringify(card)))
	)
	return uniqueCards.map(card => JSON.parse(card))
}

const data = fs.readFileSync('cards.json', { encoding: 'utf8' })
let cards = JSON.parse(data)

console.log(deleteDuplicates(cards))
