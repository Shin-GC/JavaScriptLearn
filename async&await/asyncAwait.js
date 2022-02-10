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
