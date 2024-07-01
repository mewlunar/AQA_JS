// 2. Создайте конвертер валют, используя Exchange Rates API. (зарегистрироваться и получить токен) Данные с сайта брать запросом используя fetch().
//   Пользователь должен иметь возможность передавать валюту и сумму денег в функцию и получать сумму денег в желаемой валюте на выходе.
//   Например: currencyConvertor(USD, 40, EUR) ⇒ 35 EUR
//   Решить с помощью в 2 вариантах: с  .then() и с использованием async/await

//Could not register with the "Exchange Rates API", so decided to use another API
function getCurrenciesThen(currencyName) {
  return fetch("https://www.cbr-xml-daily.ru/daily_json.js")
    .then((response) => response.json())
    .then((data) => data.Valute[currencyName])
    .catch((error) => {
      console.error(error.message);
    });
}

function currencyConvertorThen(inCurrency, value, outCurrency) {
  getCurrenciesThen(inCurrency)
    .then((inCurrencyData) => {
      getCurrenciesThen(outCurrency).then((outCurrencyData) => {
        const rub = (inCurrencyData.Value * value) / inCurrencyData.Nominal;
        const result = (
          (rub / outCurrencyData.Value) *
          outCurrencyData.Nominal
        ).toFixed(2);
        console.log(result, outCurrencyData.CharCode);
      });
    })
    .catch((error) => {
      console.error(error.message);
    });
}

async function getCurrencies(currencyName) {
  try {
    const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
    const data = await response.json();

    return data.Valute[currencyName];
  } catch (error) {
    console.error(error.message);
  }
}

async function currencyConvertor(inCurrency, value, outCurrency) {
  try {
    const inCurrencyData = await getCurrencies(inCurrency);
    const outCurrencyData = await getCurrencies(outCurrency);

    const rub = (inCurrencyData.Value * value) / inCurrencyData.Nominal;
    const result = (
      (rub / outCurrencyData.Value) *
      outCurrencyData.Nominal
    ).toFixed(2);
    console.log(result, outCurrencyData.CharCode);
  } catch (error) {
    console.log(error.message);
  }
}

currencyConvertorThen("USD", 40, "EUR");
currencyConvertor("USD", 40, "EUR");
