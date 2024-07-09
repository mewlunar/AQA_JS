// 1. Создайте функцию delay, принимающую на вход коллбэк функцию и количество милисекунд.
//     Функция должна исполнить колбэк строго через переданное количество миллисекунд
//     Пример: delay(() => console.log('hello'), 2000) // Через 2 секунды в консоли появится слово hello
function delay(callback, time) {
  return setTimeout(callback, time);
}

delay(() => console.log("hello"), 5000);

// 2. Создайте два промиса:
//   - promise1 должен резолвать "After 3 seconds" через 3 секунды
//   - promise2 должен резолвать "After 5 seconds" через 5 секунд
//   Резолвните оба промиса параллельно используя Promise.All и Promise.allSettled двумя способами:
//     1. Обработайте результат Promise.All и Promise.allSettled в .then блоке. Выведите в консоль резолвы обоих промисов по очереди
//     2. Обработайте результат await Promise.All и Promise.allSettled в асинхронной функции в try..catch блоке.
//         Используйте деструктуризацию, чтобы создать переменные promise1Result и promise2Result с резолвами соответствующих промисов
//         Вывести в консоль результат обоих промисов по очереди

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("After 3 seconds");
  }, 3000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("After 5 seconds");
  }, 5000);
});

Promise.all([promise1, promise2]).then((values) => {
  console.log(values);
});

Promise.allSettled([promise1, promise2]).then((values) => {
  console.log(values);
});

async function promisesWithAll() {
  try {
    const [promise1Result, promise2Result] = await Promise.all([
      promise1,
      promise2,
    ]);
    console.log(promise1Result);
    console.log(promise2Result);
  } catch (error) {
    console.error(error.message);
  }
}

async function promisesWithAllSettled() {
  try {
    const results = await Promise.allSettled([promise1, promise2]);
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log(`Fulfilled`, result.value);
      } else {
        console.log(`Rejected:`, result.reason);
      }
    });
  } catch (error) {
    console.error(error.message);
  }
}

promisesWithAll();
promisesWithAllSettled();

// 3. Напишите функцию, которая возвращает Promise, который резолвается в сумму двух чисел.
//   Функция должна принимать два аргумента (a и b) и возвращать Promise, который резолвает в a+b.
//   Если какой-либо из аргументов не является числом, Promise должен быть rejected с сообщением об ошибке.
//   Протестируйте свою функцию, вызвав ее с допустимыми и недопустимыми аргументами,
//   и обработайте любые ошибки с помощью метода .catch(), а также в блоке try/catch
function sumAsyncNumbers(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject(new Error("Argument must be a number"));
    } else {
      resolve(a + b);
    }
  });
}

sumAsyncNumbers(1, 10)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });

async function testSumAsyncNumbers() {
  try {
    const result_1 = await sumAsyncNumbers("20", 30);
    console.log(result_1);
  } catch (error) {
    console.error(error.message);
  }
}

testSumAsyncNumbers();
// 4. С помощью fetch отправьте GET запрос на адрес "https://jsonplaceholder.typicode.com/todos".
//     Преобразуйте респонс в объект (.json()), выведите в консоль все объекты из респонса, где userId === 1. Решить с помощью try/cath и then (обоими способами)

const requestURL = "https://jsonplaceholder.typicode.com/todos";
fetch(requestURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const userArray = [];
    data.forEach((obj) => {
      if (obj.userId === 1) {
        userArray.push(obj);
      }
    });
    console.log(userArray);
  })
  .catch((error) => {
    console.error(error.message);
  });

async function fetchObjects() {
  try {
    const response = await fetch(requestURL);
    const data = await response.json();
    const userArray = [];
    data.forEach((obj) => {
      if (obj.userId === 1) {
        userArray.push(obj);
      }
    });
    console.log(userArray);
  } catch (error) {
    console.error(error.message);
  }
}

fetchObjects();
