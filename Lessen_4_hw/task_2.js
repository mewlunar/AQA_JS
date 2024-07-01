const age = 18
const age_2 = 18
const age_3 = 60

//Реализовать Task 1 через switch
switch (true) {
	case age < age_2:
		console.log(
			"You don't have access cause your age is " + age + ", It's less than"
		)
		break
	case age >= age_2 && age <= age_3:
		console.log('Welcome!')
		break
	case age > age_3:
		console.log('Keep calm and look Culture channel')
		break
	default:
		console.log('Technical work')
}

/*
Преобразовать написанный код в task 1 так, чтобы сначала проверялся тип данных. 
И если он не number - кидалась ошибка в консоль.
*/
if (typeof age !== 'number') {
	console.log('Error')
} else if (age < age_2) {
	console.log(
		"You don't have access cause your age is " + age + ", It's less than"
	)
} else if (age >= age_2 && age <= age_3) {
	console.log('Welcome!')
} else if (age > age_3) {
	console.log('Keep calm and look Culture channel')
}
/*
Преобразовать Task 2 - 1 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, преобразовываясь в number
*/
if (isNaN(age)) {
	console.log('Error')
} else if (age < age_2) {
	console.log(
		"You don't have access cause your age is " + age + ", It's less than"
	)
} else if (age >= age_2 && age <= age_3) {
	console.log('Welcome!')
} else if (age > age_3) {
	console.log('Keep calm and look Culture channel')
}
