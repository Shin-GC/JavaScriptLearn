// fetch('https://www.naver.com')
//     .then((response) => response.text())
//     .then((result) => {
//       console.log(result);
//     });

// 여기에 코드를 작성하세요.
// fetch('https://workey.codeit.kr/ratings')
//     .then((response) => response.text())
//     .then((result) => {
//       console.log(result)
//     })

// const newMember = {
//   name: 'Jerry',
//   email: 'jerry@codeitmall.kr',
//   department: 'engineering',
// };
//
// fetch('https://learn.codeit.kr/api/members', {
//   method: 'POST',
//   body: JSON.stringify(newMember),
// })
//     .then((response) => response.json())
//     .then((result) => {console.log(result);});

// const member = {
//   name: 'PUT Test',
//   email: 'test@example.com',
//   department: 'tester',
// };
//
// fetch('https://learn.codeit.kr/api/members/6', {
//   method: 'PUT',
//   body: JSON.stringify(member),
// })
//     .then((response) => response.json())
//     .then((result) => {console.log(result);});

// fetch('https://learn.codeit.kr/api/members/7', {
//   method: 'DELETE',
// })

// let target
// fetch('https://learn.codeit.kr/api/members')
//     .then((response) => response.json())
//     .then((result) => {
//       target = result.find((r) => r.name === "Jason")
//     })
//
// fetch(`https://learn.codeit.kr/api/members/${target.id}`, {
//   method: 'DELETE'
// })

// const newMember = {
//   name: "Shin",
//   email: "Shin@naver.com",
//   department: "BackEnd",
// };
//
// fetch('https://learn.codeit.kr/api/members', {
//   method: 'POST',
//   body: JSON.stringify(newMember)
// })
//     .then(() => {
//       fetch('https://learn.codeit.kr/api/members')
//           .then((response) => response.text())
//           .then((result) => {
//             const members = JSON.parse(result)
//             console.log(members[members.length - 1]);
//           });
//     });

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((result) => {
//       const users = result;
//       console.log(users)
//     });

const newMember = {
  name: 'Jerry',
  email: 'jerry@codeit.kr',
  department: 'engineering',
};

fetch('https://learn.codeit.kr/api/members', {
  method: 'POST',
  headers: { // 추가된 부분
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newMember),
})
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
    });