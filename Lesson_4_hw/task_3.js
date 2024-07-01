const age = prompt('Type in your age:')
const age_2 = 18
const age_3 = 60

if (isNaN(age)) {
	alert('Error')
} else if (age < age_2) {
	alert("You don't have access cause your age is " + age + ", It's less than")
} else if (age >= age_2 && age <= age_3) {
	alert('Welcome!')
} else if (age > age_3) {
	alert('Keep calm and look Culture channel')
}
