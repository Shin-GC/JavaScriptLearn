// fetch('https://learn.codeit.kr/api/interviews/summer')
//     .then((response) => response.json())
//     .then((interviewResult) => {
//       const {interviewees} = interviewResult;
//       return interviewees.filter((interviewee) => interviewee.result === 'pass');
//     })
//     .then((newMembers) => fetch('https://learn.codeit.kr/api/members', {
//       method: 'POST',
//       body: JSON.stringify(newMembers),
//     }))
//     .then((response) => {
//       if (response.status === 200) {
//         return fetch('https://learn.codeit.kr/api/members');
//       } else {
//         throw new Error('New members not added');
//       }
//     })
//     .then((response) => response.json())
//     .then((members) => {
//       console.log(`총 직원 수: ${members.length}`);
//       console.log(members);
//     });

// fetch('https://learn.codeit.kr/api/members')
//     .then((response) => response.json())
//     .then((result) => {
//       return result.filter((r) => r.id >=3)
//     })
//     .then((response) => {
//       for (let r of response) {
//         fetch(`https://learn.codeit.kr/api/members/${r.id}`,{
//           method: 'DELETE'
//         })
//         console.log(`${r.name}이 지워졌습니다.`)
//       }
//     })

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => {
//     // return response.json(); // <- Case(1)
//     // return 10; // <- Case(2)
//     // // <- Case(3)
//     // throw new Error('failed'); // <- Case(4)
//   })
//   .then((result) => {
//     console.log(result);
//   });

// 존재하지 않는 URL
/* fetch('https://jsonplaceholder.typicode.commmmmm/users')
  .then((response) => response.json()) // <- Case(5)
  .then((result) => { }, (error) => { console.log(error) }); */

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((result) => {
//     console.log(result);
//     // throw new Error('too long');
//   })
//   .then((result) => {
//     console.log(result);
//     // throw new Error('no required field');
//   })
//   .catch((error) => {
//     console.log(`${error.name}: ${error.message}`);
//   });

// let isLoading = true;
// const url = 'https://jsonplaceholder.typicode.com/users';
// const url = 'https://www.google.com';

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => {
//     const contentType = response.headers.get('content-type');
//     if (contentType.includes('application/json')) {
//       return response.json();
//     }
//     throw new Error('response is not json data');
//   })
//   .then((result) => {
//     // 리스폰스 처리
//     console.log(result);
//   })
//   .catch((error) => {
//     // 에러 처리
//     console.log(error);
//   })
//   .finally(() => {
//     isLoading = false;
//     console.log(isLoading)
// })

// function removeUnnecessaryInfo(users) {
//   const processedUserList = users.map((user) => {
//     const keys = Object.keys(user);
//     const processedUser = {};
//     keys.forEach((key) => {
//       if (key === 'name' || key === 'email') {
//         processedUser[key] = user[key];
//       }
//     });
//     return processedUser;
//   });
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(processedUserList);
//     }, 1000);
//   });
// }
//
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((result) => removeUnnecessaryInfo(result))
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     console.log('This job will be done by server soon!');
//   })

