// //Отправка данных с форм, используя Ajax
// //сперва нужно создат server.php, чтобы видеть, что бэкенд верно принимает наши данные
// //<?php
// //echo var_dump($_POST);
// //данные превращает в строку-var_dump и выводит-echo
// // Возвращаемся к фронту
// //Будет использоваться XMLHttpRequest(старый вариант)

// //Forms (Отправка в обычном формате)

// const forms = document.querySelectorAll("form");

// const message = {
//   loading: "Загрузка",
//   success: "Спасибо, скоро бы с вами свяжемся",
//   failure: "Что-то пошло не так",
// };

// forms.forEach((form) => {
//   postData(form);
// });

// function postData(form) {
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     //Создание блока для вывода информации
//     const statusMessage = document.createElement("div");
//     statusMessage.classList.add("status");
//     statusMessage.textContent = message.loading;
//     form.append(statusMessage);

//     const request = new XMLHttpRequest();
//     request.open("POST", "server.php");
//     //2 фориата отправки данных: FormData, JSON

//     //____________________________________________________________________________________
//     //Когда используется связка XMLHttpRequest + FormData заголовок не нужен!!!
//     //_____________________________________________________________________________________
//     ///////////request.setRequestHeader("Content-type", "multipart/form-data");////////////

//     const formData = new FormData(form); //формат ключ-значение

//     //_____________________________________________________________________________________
//     // ВАЖНО: всегда у элементов, которые позволяют интерактивить, должен быть атрибут name
//     //_____________________________________________________________________________________
//     request.send(formData); //Что-то отправляем
//     request.addEventListener("load", () => {
//       if (request.status === 200) {
//         console.log(request.response);
//         statusMessage.textContent = message.success;
//         form.reset();
//         setTimeout(() => {
//           statusMessage.remove();
//         }, 3000);
//       } else {
//         statusMessage.textContent = message.failure;
//       }
//     });
//   });
// }

// //Forms (Отправка в обычном формате)

// const forms = document.querySelectorAll("form");

// const message = {
//   loading: "Загрузка",
//   success: "Спасибо, скоро бы с вами свяжемся",
//   failure: "Что-то пошло не так",
// };

// forms.forEach((form) => {
//   postData(form);
// });

// function postData(form) {
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     //Создание блока для вывода информации
//     const statusMessage = document.createElement("div");
//     statusMessage.classList.add("status");
//     statusMessage.textContent = message.loading;
//     form.append(statusMessage);

//     const request = new XMLHttpRequest();
//     request.open("POST", "server.php");

//     //Для отправки данных в формате JSON заголовок нужен
//     request.setRequestHeader("Content-type", "application/json");
//     const formData = new FormData(form); //формат ключ-значение
//     //Манипуляции: FormData просто так не можем преобразовать в другой формат, поэтому
//     const obj = {};
//     formData.forEach(function (value, key) {
//       obj[key] = value;
//     });
//     //получили обычный объект
//     const json = JSON.stringify(obj);
//     //передаем
//     request.send(json); //передаем json
//     //_____________________________________________________________________________________
//     // ВАЖНО: всегда у элементов, которые позволяют интерактивить, должен быть атрибут name
//     //_____________________________________________________________________________________
//     request.addEventListener("load", () => {
//       if (request.status === 200) {
//         console.log(request.response);
//         statusMessage.textContent = message.success;
//         form.reset();
//         setTimeout(() => {
//           statusMessage.remove();
//         }, 3000);
//       } else {
//         statusMessage.textContent = message.failure;
//       }
//     });
//   });
// }

// //php нативно не работает с данными Json
// <?php
// //Добавляем эту строчку, чтобы была возможность поработать с файлами json
// $_POST = json_decode(file_get_contents("php://input"), true);
// echo var_dump($_POST);

// //Promise
// console.log("запрос данных..");
// const req = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Подготовка данных...");
//     const product = {
//       name: "TV",
//       price: 2888,
//     };
//     resolve(product);
//   }, 2000);
// });
// req
//   .then((product) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         product.status = "order";
//         resolve(product);
//         // reject();
//       }, 2000);
//     });
//   })
//   .then((data) => {
//     data.modify = true;
//     return data;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(() => {
//     console.error("Произошла ошибка");
//   })
//   .finally(() => {
//     console.log("Конец");
//   });

// //all, race

// const test = (time) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(), time);
//   });
// };
// // test(1000).then(()=>console.log('1000ms'));
// // test(2000).then(()=>console.log('2000ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
//   console.log("All"); //код выполнится через 2 секунды
// });
// //all - дожидается выполнение всех промиссов
// //race - выпонение первого промисса

// //Fetch API
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({ name: "Alex" }),
//   headers: {
//     "Content-type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
