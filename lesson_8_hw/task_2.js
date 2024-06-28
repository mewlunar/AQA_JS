// Task 2. Перед вами структура компани, и ниже представлены задания, относящиеся к ней.
// В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
// чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!

const enterprises = [
	{
		id: 1,
		name: 'Предприятие 1',
		departments: [
			{
				id: 2,
				name: 'Отдел тестирования',
				employees_count: 9,
			},
			{
				id: 3,
				name: 'Отдел маркетинга',
				employees_count: 20,
			},
			{
				id: 4,
				name: 'Администрация',
				employees_count: 15,
			},
		],
	},
	{
		id: 5,
		name: 'Предприятие 2',
		departments: [
			{
				id: 6,
				name: 'Отдел разработки',
				employees_count: 50,
			},
			{
				id: 7,
				name: 'Отдел маркетинга',
				employees_count: 20,
			},
			{
				id: 8,
				name: 'Отдел охраны труда',
				employees_count: 5,
			},
		],
	},
	{
		id: 9,
		name: 'Предприятие 3',
		departments: [
			{
				id: 10,
				name: 'Отдел аналитики',
				employees_count: 0,
			},
		],
	},
]

function formattedEnterpriseObject(enterprise) {
	return JSON.stringify(enterprise, null, 2)
}

function printEnterpriseObject(enterprise) {
	console.log(JSON.stringify(enterprise, null, 2))
}
// Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

function calculateEmployees(data) {
	const dataCopy = [...data]
	const result = dataCopy.reduce((sum, cur) => sum + cur.employees_count, 0)
	return result !== 0 ? result : 'нет'
}

function getEmployeeWordEnding(count, isAdmin = false) {
	if (10 < count && count < 15) {
		return isAdmin ? 'человек' : 'сотрудников'
	} else {
		let residue = count % 10
		if (isAdmin) {
			return residue === 1
				? 'человек'
				: 1 < residue && residue < 5
				? 'человека'
				: 'человек'
		} else {
			return residue === 1
				? 'сотрудник'
				: 1 < residue && residue < 5
				? 'сотрудника'
				: 'сотрудников'
		}
	}
}

function getEnterprisesInfo(enterprises) {
	const copyEnterprises = JSON.parse(JSON.stringify(enterprises))
	return copyEnterprises
		.map(enterprise => {
			const totalEmployees = calculateEmployees(enterprise.departments)
			const enterpriseInfo = `${
				enterprise.name
			} (${totalEmployees} ${getEmployeeWordEnding(totalEmployees)})`
			const departmentsInfo = enterprise.departments
				.map(department => {
					const count =
						department.employees_count === 0
							? 'нет'
							: department.employees_count
					const isAdmin = department.name === 'Администрация'
					const word = getEmployeeWordEnding(
						department.employees_count,
						isAdmin
					)
					return `- ${department.name} (${count} ${word})`
				})
				.join('\n')
			return `${enterpriseInfo}\n${departmentsInfo}`
		})
		.join('\n\n')
}

console.log(getEnterprisesInfo(enterprises))
// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2
function getEnterpriseName(id) {
	const copyEnterprises = JSON.parse(JSON.stringify(enterprises)).find(
		enterprise =>
			enterprise.departments.some(dep => dep.id === id || dep.name === id)
	)

	return copyEnterprises
		? copyEnterprises.name
		: 'Такого id или отдела не существует'
}

console.log(getEnterpriseName(3))
console.log(getEnterpriseName('Отдел разработки'))
console.log(getEnterpriseName(999))
console.log(getEnterpriseName('Несуществующий отдел'))
console.log('==============================================')
// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
// Пример:
// addEnterprise("Название нового предприятия")
function addEnterprise(name) {
	const copyEnterprises = JSON.parse(JSON.stringify(enterprises))
	const newId =
		Math.max(...copyEnterprises.map(enterprise => enterprise.id)) + 1

	const newEnterprise = {
		id: newId,
		name: name,
		departments: [],
	}

	copyEnterprises.push(newEnterprise)

	return copyEnterprises
}

const newEnterpriseName = 'Предприятие 4'
console.log(formattedEnterpriseObject(addEnterprise(newEnterpriseName)))
console.log('==============================================')

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
// Пример:
// addDepartment(1, "Название нового отдела")
function addDepartment(id, name) {
	let copyEnterprises = JSON.parse(JSON.stringify(enterprises))
	let targetEnterprise = copyEnterprises.find(
		enterprise => enterprise.id === id
	)

	if (!targetEnterprise) {
		return `Предприятие с ${id} id не найдено`
	}

	const allDepartmentIds = copyEnterprises.flatMap(enterprise =>
		enterprise.departments.map(dep => dep.id)
	)
	const newDepartmentId = Math.max(...allDepartmentIds) + 1

	const newDepartment = {
		id: newDepartmentId,
		name: name,
		employees_count: 0,
	}

	let targetIndex = copyEnterprises.findIndex(
		enterprise => enterprise.id === id
	)
	copyEnterprises[targetIndex].departments.push(newDepartment)

	return copyEnterprises
}

console.log(formattedEnterpriseObject(addDepartment(9, 'Новый отдел')))
console.log('==============================================')

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")
function editEnterprise(id, newName) {
	let copyEnterprises = JSON.parse(JSON.stringify(enterprises))
	const enterprise = copyEnterprises.find(ent => ent.id === id)
	if (enterprise) {
		enterprise.name = newName
	} else {
		return `Предприятие с ${id} id не найдено.`
	}
	return copyEnterprises
}

printEnterpriseObject(editEnterprise(1, 'Предприятие 0'))
console.log('==============================================')
// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

function editDepartment(id, newName) {
	let copyEnterprises = JSON.parse(JSON.stringify(enterprises))
	for (let enterprise of copyEnterprises) {
		const department = enterprise.departments.find(dept => dept.id === id)
		if (department) {
			department.name = newName
			return copyEnterprises
		}
	}
	return `Отдел с ${id} id не найден.`
}

printEnterpriseObject(editDepartment(7, 'Новое название отдела'))
console.log('==============================================')
// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)

function deleteEnterprise(id) {
	let copyEnterprises = JSON.parse(JSON.stringify(enterprises))
	const index = copyEnterprises.findIndex(ent => ent.id === id)
	if (index !== -1) {
		copyEnterprises.splice(index, 1)
		return copyEnterprises
	} else {
		return `Предприятие с id ${id} не найдено.`
	}
}
printEnterpriseObject(deleteEnterprise(1))
console.log('==============================================')

// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)
function deleteDepartments(id) {
	let copyEnterprises = JSON.parse(JSON.stringify(enterprises))
	for (let enterprise of copyEnterprises) {
		const departmentIndex = enterprise.departments.findIndex(
			dept => dept.id === id
		)
		if (departmentIndex !== -1) {
			enterprise.departments.splice(departmentIndex, 1)
			return copyEnterprises
		}
	}

	return `Отдел с ${id} id не найден.`
}
printEnterpriseObject(deleteDepartments(2))
console.log('==============================================')

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)
function departmentId(departments, id) {
	for (let dept of departments) {
		if (dept.id === id) {
			return dept
		}
		if (dept.children) {
			const result = departmentId(dept.children, id)
			if (result) {
				return result
			}
		}
	}
	return null
}

function moveEmployees(id_1, id_2) {
	let fromDept = null
	let toDept = null
	let copyEnterprises = JSON.parse(JSON.stringify(enterprises))
	for (let enterprise of copyEnterprises) {
		if (!fromDept) {
			fromDept = departmentId(enterprise.departments, id_1)
		}
		if (!toDept) {
			toDept = departmentId(enterprise.departments, id_2)
		}
		if (fromDept && toDept) {
			break
		}
	}

	if (!fromDept || !toDept) {
		return `Один из отделов с id ${id_1} или ${id_2} не найден.`
	}

	toDept.employees_count += fromDept.employees_count
	fromDept.employees_count = 0

	return copyEnterprises
}
printEnterpriseObject(moveEmployees(2, 3))
