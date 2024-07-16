// 2. Создайте функцию, которая подсчитает, сколько в объекте значений каждого типа.
//   Принимает на вход объект или массив таких же объектов, у которого ключ всегда string, а значение - string, number, boolean.
//   Возвращает же - объект с ключами string, number, boolean и количеством таких значений в объекте или в сумме у всех объектов в массиве.

// 1. Создайте интерфейс IEmployee с полями name, surname, salary, address (типы для этих полей такие же как в ItEmployee из таск 1)
//   Создайте функцию getEmployeeInfo(employee), выводящую в консоль всю информацию про employee (формат текста придумать самим)
//   Создайте type guard isItEmployee, принимающий юнион типов IEmployee и ItEmployee. Используйте его в функции getEmployeeInfo.
//   Если на входе itEmployee - выводите в консоль все поля айтишника (а не только те, что в employee)
//   Функция должна принимать union type между IEmployee и ItEmployee, и через тайпгвард определять что за объект и как работать с ним

interface IEmployee {
  name: string;
  surname: string;
  readonly salary: number;
  adress?: IAddress;
}

interface ItEmployee {
  name: string;
  surname: string;
  readonly salary: number;
  grade: Grade;
  occupation: OCCUPATION;
  adress?: IAddress;
  projectNames: string[];
}

type Grade = "junior" | "middle" | "senior" | "lead";

interface IAddress {
  country: string;
  street: string;
  house: number;
  flat?: number;
}

enum OCCUPATION {
  DEVELOPER = "Developer",
  QA = "QA",
  AQA = "Automation qa engineer",
  PM = "Project manageer",
}

function isItEmployee(obj: ItEmployee | IEmployee): obj is ItEmployee {
  return "occupation" in obj;
}

function getEmployeeInfo(employee: ItEmployee | IEmployee) {
  console.log(`Employee Info:
    Name: ${employee.name}
    Surname: ${employee.surname}
    Salary: ${employee.salary}
    Address: ${employee.adress?.country}, ${employee.adress?.street}, ${employee.adress?.house}`);

  if (isItEmployee(employee)) {
    console.log(`IT Employee Info:
      Occupation: ${employee.occupation}
      Project names: ${employee.projectNames}
      Grade: ${employee.grade}`);
  }

  console.log("==================================");
}

const employeeIt: ItEmployee = {
  name: "Tanya",
  surname: "Ignatova",
  salary: 1500,
  grade: "junior",
  occupation: OCCUPATION.AQA,
  projectNames: [],
  adress: { country: "Russia", street: "Krasnolymanskaya", house: 22 },
};

const employeeI: IEmployee = {
  name: "Tanya",
  surname: "Ignatova",
  salary: 1500,
  adress: { country: "Russia", street: "Krasnolymanskaya", house: 22 },
};

getEmployeeInfo(employeeIt);
getEmployeeInfo(employeeI);

// 3. Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат (коллбэк),
//     который будет использоваться для проверки каждого числа на соответствие требованиям.
//     Помимо самой функции следует реализовать алиасы типов для функций и аттрибутов.
//     Пример функции:
//     const numbers = [1, -5, 2, 3, 4, 133];
//     filter(numbers, (n) => n > 3); // [4, 133]
//     filter(numbers, (n) => n % 2 == 0); // [2, 4]
//     Параметры функции: Массив чисел и Анонимная функция, принимающая на вход число и возвращающая логическое значение.

const numbers = [1, -5, 2, 3, 4, 133];

type NumberArray = number[];
type Predicate = (n: number) => boolean;

function filter(numbers: NumberArray, callback: Predicate) {
  return numbers.filter(callback);
}

console.log(filter(numbers, (n) => n > 3));
console.log(filter(numbers, (n) => n % 2 == 0));

console.log("==================================");

// 2. Создайте функцию, которая подсчитает, сколько в объекте значений каждого типа.
//   Принимает на вход объект или массив таких же объектов, у которого ключ всегда string, а значение - string, number, boolean.
//   Возвращает же - объект с ключами string, number, boolean и количеством таких значений в объекте или в сумме у всех объектов в массиве.

type ValidValue = string | number | boolean;

type ValidObject = Record<string, ValidValue>;

interface TypeCounts {
  string: number;
  number: number;
  boolean: number;
}

function countValueTypes(input: ValidObject | ValidObject[]): TypeCounts {
  const counts: TypeCounts = { string: 0, number: 0, boolean: 0 };

  const countTypesInObject = (obj: ValidObject) => {
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === "string") {
        counts.string += 1;
      } else if (typeof value === "number") {
        counts.number += 1;
      } else if (typeof value === "boolean") {
        counts.boolean += 1;
      }
    }
  };

  if (Array.isArray(input)) {
    for (const obj of input) {
      countTypesInObject(obj);
    }
  } else {
    countTypesInObject(input);
  }

  return counts;
}

const singleObject: ValidObject = {
  name: "Tanya",
  surname: "Ignatova",
  age: 25,
  isStudent: true,
};

const arrayOfObjects: ValidObject[] = [
  {
    name: "Tanya",
    surname: "Ignatova",
    age: 25,
    isStudent: true,
  },
  {
    name: "Eugene",
    surname: "Saenko",
    age: 24,
    isStudent: false,
    hasJob: true,
  },
];

console.log(countValueTypes(singleObject));
console.log(countValueTypes(arrayOfObjects));
