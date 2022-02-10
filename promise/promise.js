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

// function pick(menus) {
//   console.log('Pick random menu!');
//   return new Promise((resolve, reject) => {
//     if (menus.length === 0) {
//       reject(new Error('Need Candidates'));
//     } else {
//       setTimeout(() => {
//         const randomIdx = Math.floor(Math.random() * menus.length);
//         const selectedMenu = menus[randomIdx];
//         resolve(selectedMenu)
//       }, 1000); // 시간이 걸리는 걸 시뮬레이션하기 위한 1초입니다.
//     }
//   });
// }
// function getRandomMenu() {
//   return fetch('https://learn.codeit.kr/api/menus')
//     .then((response) => response.json())
//     .then((result) => {
//       return pick(result); // ! random pick function
//     });
// }
// getRandomMenu()
//   .then((menu) => {
//     console.log(`Today's lunch is ${menu.name} ~`);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   })
//   .finally(() => {
//     console.log('Random Menu candidates change everyday');
//   });

// function pick(menus){
//   console.log("오늘의 랜덤 음식!")
//   return new Promise((resolve, reject) => {
//     if (menus.length === 0) {
//       reject(new Error("음식 후보가 필요합니다!"))
//     }
//     else {
//       setTimeout(() => {
//         const randomIdx = Math.floor(Math.random() * menus.length);
//         const selectedMenu = menus[randomIdx];
//         resolve(selectedMenu)
//       }, 1000)
//     }
//   })
// }
//
//
// function randomMenu() {
//   return fetch('https://learn.codeit.kr/api/menus')
//     .then((response) => response.json())
//     .then((result) => {
//       return pick(result)
//     })
// }
//
// randomMenu()
//   .then((menu) => {
//     console.log(`오늘의 랜덤 메뉴는 ${menu.name} 입니다~~!`)
//   })
//   .catch((error) => {
//     console.log(`에러 발생 : ${error.message}`)
//   })
//   .finally(() => {
//     console.log("다음에 또 사용해주세요 :)")
//   })

