// 1. На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей.
//   Вывести на экран: имя, e-mail, телефон и название компании пользователя.
//   Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах.
//   Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий.
//   Для реализации трех запросов воспользоваться Promise.all().
//   (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId).
//       Пример:
//       1.  name: Leanne Graham
//           email: Sincere@april.biz
//           phone: 1-770-736-8031 x56442
//           company: Romaguera-Crona
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)
//       __________________________________

//       2.  name: Ervin Howell
//           email: Shanna@melissa.tv
//           phone: 010-692-6593 x09125
//           company: Deckow-Crist
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)

// 2. Создайте конвертер валют, используя Exchange Rates API. (зарегистрироваться и получить токен) Данные с сайта брать запросом используя fetch().
//   Пользователь должен иметь возможность передавать валюту и сумму денег в функцию и получать сумму денег в желаемой валюте на выходе.
//   Например: currencyConvertor(USD, 40, EUR) ⇒ 35 EUR
//   Решить с помощью в 2 вариантах: с  .then() и с использованием async/await
async function fetchData() {
  try {
    const [usersResponse, albumsResponse, photosResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/albums"),
      fetch("https://jsonplaceholder.typicode.com/photos"),
    ]);

    const users = await usersResponse.json();
    const albums = await albumsResponse.json();
    const photos = await photosResponse.json();

    const userAlbums = users.map((user) => {
      const userAlbums = albums.filter((album) => album.userId === user.id);
      const albumsWithPhotoCount = userAlbums.map((album) => {
        const photoCount = photos.filter(
          (photo) => photo.albumId === album.id
        ).length;
        return {
          title: album.title,
          photoCount: photoCount,
        };
      });

      return {
        name: user.name,
        email: user.email,
        phone: user.phone,
        company: user.company.name,
        albums: albumsWithPhotoCount,
      };
    });

    userAlbums.forEach((user) => {
      console.log(`name: ${user.name}`);
      console.log(`email: ${user.email}`);
      console.log(`phone: ${user.phone}`);
      console.log(`company: ${user.company}`);
      console.log("albums:");
      user.albums.forEach((album) => {
        console.log(`  ${album.title} (${album.photoCount} photos)`);
      });
      console.log("===========================================");
    });
  } catch (error) {
    console.error(error.message);
  }
}

fetchData();
