// 1. Напишите функцию, реализующую методы массивов map. Функции принимают на вход массив и колбэк. Используйте дженерик типы.
//    Затипизировать надо саму функцию и коллбэк.
//    Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив,
//    где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
//    Пример:
//    map([1,2,3,4,5], callback) => [0,2,6,12,20]

function map<T, U>(
  array: T[],
  callback: (element: T, index: number) => U
): U[] {
  const result: U[] = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i));
  }
  return result;
}

const multiplyIndex = (element: number, index: number): number => {
  return element * index;
};

const arr = [1, 2, 3, 4, 5];
const result = map(arr, multiplyIndex);

console.log(result);

// 2. Напишите дженерик функцию generateObject, которая принимает массив пар [string, T]
//   и возвращает объект, где каждая пара ключ-значение из массива превращается в соответствующую пару ключ-значение в объекте.
//   В случае если ключи повторяются, значение в объекте должно быть последним из встречающихся.

//   Требования:
//     - Функция должна быть дженерик и работать с любыми типами значений.
//     - Функция должна корректно обрабатывать массив пар, включая случаи, когда ключи повторяются.

//   Пример:
// const result = generateObject([
//   ["1", 1],
//   ["2", 2],
//   ["3", 3],
//   ["4", 4],
//   ["4", 5], // повторяющийся ключ, значит это значение должно быть в результирующем объекте
// ]);

// console.log(result); //{ '1': 1, '2': 2, '3': 3, '4': 5 }

function generateObject<T>(arrayOfPairs: [string, T][]): { [key: string]: T } {
  const result: { [key: string]: T } = {};

  for (const [key, value] of arrayOfPairs) {
    result[key] = value;
  }

  return result;
}

const result_2 = generateObject([
  ["1", 1],
  ["2", 2],
  ["3", 3],
  ["4", 4],
  ["4", 5],
]);

console.log(result_2);
