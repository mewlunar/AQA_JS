// 1. Создайте дженерик функцию getFirstElement, которая принимает массив элементов типа T, и возвращает первый элемент (типа T).

function getFirstElement<T>(arr: T[]) {
  return arr[0];
}
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["one", "two", "three"]));

// 2. Создайте интерфейс Person, абстрактный класс Employee, который реализует интерфейс Person, и конкретные классы Manager и Developer.
//   - Интерфейс Person должен содержать:
//       Стринговые поля: name, surname, experienceYears
//       Метод, возвращающий строку: getDetails().
//   - Абстрактный класс Employee должен:
//       Реализовывать интерфейс Person.
//       Содержать защищенное поле: salary, не передающееся в конструктор (по дефолту 0)
//       Содержать защищенный абстрактный метод: calculateSalary().,
//         который считает зарплату и вызывается в конструкторе, и будет реализован в наследниках
//   - Конкретные классы Manager и Developer должны:
//       Наследоваться от Employee.
//       Класс менеджер должен на конструкторе получать поле prefered, которое может быть только 'scrum' или 'kanban'
//       Класс девелопер должен на конструкторе получать поле programmingLanguage, который может быть 'js', 'ts', 'java', 'python'
//       Метод calculateSalary должен для менеджера устанавливать зарплату по формуле: количество лет опыта * 500
//       Метод calculateSalary должен для девелопера устанавливать зарплату по формуле: количество лет опыта * 1000
//       Реализовывать метод getDetails(), который должен выводить полную информацию об объекте вида:
//         'My name is Elena TSovna, I am software developer with 6 years of experience in TypeScript and 6000$ salary' (пример для девелопера)

interface Person {
  name: string;
  surname: string;
  experienceYears: string;
  getDetails(): string;
}

abstract class Employee implements Person {
  name: string;
  surname: string;
  experienceYears: string;
  abstract getDetails(): string;

  protected abstract calculateSalary(): void;

  protected salary: number = 0;

  constructor(name: string, surname: string, experienceYears: string) {
    this.name = name;
    this.surname = surname;
    this.experienceYears = experienceYears;
    this.calculateSalary();
  }
}

class Manager extends Employee {
  public prefered: "scrum" | "canban";
  constructor(
    name: string,
    surname: string,
    experienceYears: string,
    prefered: "scrum" | "canban"
  ) {
    super(name, surname, experienceYears);
    this.prefered = prefered;
  }

  protected calculateSalary(): void {
    this.salary = parseInt(this.experienceYears.replace(/[^\d]/g, "")) * 500;
  }

  getDetails(): string {
    return `My name is ${this.name} ${this.surname}, I am a manager with ${this.experienceYears} years of experience in ${this.prefered} and ${this.salary}$ salary.`;
  }
}

class Developer extends Employee {
  public programmingLanguage: "js" | "ts" | "java" | "python";
  constructor(
    name: string,
    surname: string,
    experienceYears: string,
    programmingLanguage: "js" | "ts" | "java" | "python"
  ) {
    super(name, surname, experienceYears);
    this.programmingLanguage = programmingLanguage;
  }

  protected calculateSalary(): void {
    this.salary = parseInt(this.experienceYears.replace(/[^\d]/g, "")) * 1000;
  }

  getDetails(): string {
    return `My name is ${this.name} ${this.surname}, I am software developer with ${this.experienceYears} years of experience in ${this.programmingLanguage} and ${this.salary}$ salary.`;
  }
}

const manager = new Manager("Tanya", "Tsovna", "6", "scrum");
console.log(manager.getDetails());

const developer = new Developer("John", "Tsovna", "6", "ts");
console.log(developer.getDetails());
