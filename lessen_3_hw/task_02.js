const a = 2
const b = -4
const c = -5
const discriminant = b * b - 4 * a * c
const x_1 = (-b + Math.sqrt(discriminant)) / (2 * a)
const x_2 = (-b - Math.sqrt(discriminant)) / (2 * a)

const a_1 = 2
const b_1 = -6
const c_1 = 9
const x = -b / (2 * a)

console.log(
	'Ответ к уравнению 1: ' + x + ', ответ к уравнению 2: ' + x_1 + ' и ' + x_2
)
