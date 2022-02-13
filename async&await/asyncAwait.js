// function dummyFetch_getUser() {
//   const randTime = parseInt(Math.random() * 1000);
//   const dummyData = {
//     name: "강선규",
//     company: "Back",
//   };
//   return new Promise(resolve => setTimeout(() => {
//     resolve(dummyData);
//   }, randTime));
// }
//
//
// function dummyFetch_getProfile(name) {
//   const randTime = parseInt(Math.random() * 1000);
//   return new Promise(resolve => setTimeout(() => {
//     if (name == "강선규") {
//       resolve({
//         profile: "http://~~~.img"
//       });
//     }
//   }, randTime));
// }
//
//
// function dummyFetch_getPhone(name) {
//   const randTime = parseInt(Math.random() * 1000);
//   return new Promise(resolve => setTimeout(() => {
//     if (name == "강선규") {
//       resolve({
//         phone: "010-1234-1234"
//       });
//     }
//   }, randTime));
// }
//
// const fetchData = async () => {
//   const result = dummyFetch_getUser();
//   const result2 = dummyFetch_getPhone(result.name);
//   const result3 = dummyFetch_getProfile(result.name);
//
//   for (let i = 1; i < 10; i++) {
//     console.log(i * i);
//   }
//
//   return {
//     ...result,
//     ...result2,
//     ...result3,
//   }
// };

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => {
//     const lastUser = users[users.length - 1];
//     return lastUser.id;
//   })
//   .then((id) => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`))
//   .then((response) => response.json())
//   .then((posts) => {
//     const lastPost = posts[posts.length - 1];
//     console.log(lastPost);
//   });
//
// async function getTheLastPostOfTheLastUser() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const responseJson = await response.json();
//   const lastUser = responseJson[responseJson.length - 1];
//   const {id} = lastUser
//   const response2 = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
//   const response2Json = await response2.json();
//   const lastPost = response2Json[response2Json.length - 1];
//   console.log(lastPost)
// }
//
// await getTheLastPostOfTheLastUser().then((lastPost) => {
//   console.log(lastPost);
// });

// const p1 = fetch('https://jsonplaceholder.typicode.com/users?id=1')
//   .then((response) => response.text());
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('hello');
//   }, 2000);
// });
//
// const p3 = Promise.resolve('Success');
//
// // const p4 = Promise.reject(new Error('Fail'));
//
// async function test() {
//   console.log(await p1);
//   console.log(await p2);
//   console.log(await p3);
//   // console.log(await p4);
// }
//
// console.log('----Start----');
// test();
// console.log('-----End----');

// async function showQuiz() {
//   try {
//     const response = await fetch('https://learn.codeit.kr/api/quiz');
//     const test = await response.json();
//     console.log(test)
//     const yourAnswer = prompt(test.quiz);
//     if (yourAnswer.toLowerCase() === test.answer) {
//       alert(`정답 입니다!`);
//     } else {
//       throw new Error('wrong');
//     }
//   } catch (error) {
//     if (error.message === 'wrong') {
//       alert('틀렸습니다!');
//     } else {
//       alert('Error');
//     }
//   } finally {
//     alert("끝!");
//   }
// }
// showQuiz();

// async function pick(menus) {
//   console.log('Pick random menu!');
//
//   const p = new Promise((resolve, reject) => {
//     if (menus.length === 0) {
//       reject(new Error('Need Candidates'));
//     } else {
//       setTimeout(() => {
//         const randomIdx = Math.floor(Math.random() * menus.length);
//         const selectedMenu = menus[randomIdx];
//         resolve(selectedMenu);
//       }, 1000);
//     }
//   });
//   return p
// }
//
// async function getRandomMenu() {
//   console.log('---Please wait!---');
//   try {
//     const response = await fetch('https://learn.codeit.kr/api/menus')
//     const menus = await response.json()
//     const menu = await pick(menus);
//     console.log(`Today's lunch is ${menu.name}~`);
//   } catch (error) {
//     console.log(error.message)
//   } finally {
//     console.log('Random Menu candidates change everyday');
//   }
// }
//
//
// getRandomMenu()
