// function expressMultiplication(x, y){
//   console.log(`${x} * ${y} = ${x * y}`)
// }
//
// expressMultiplication(3, 4);
// expressMultiplication(3, 2);
// expressMultiplication(7, 5);
// expressMultiplication(8, 9);
// expressMultiplication(5, 5);
// expressMultiplication(9, 9);

// function calculateRectangleArea(width, height){
//   return width * height
// }
//
// let area1 = calculateRectangleArea(3, 4); // 가로 3, 세로 4인 직사각형의 넓이 계산
// let area2 = calculateRectangleArea(5, 8); // 가로 5, 세로 8인 직사각형의 넓이 계산
// let area3 = calculateRectangleArea(7, 2); // 가로 7, 세로 2인 직사각형의 넓이 계산
//
// console.log(`Area1: ${area1}, Area2: ${area2}, Area3: ${area3}`);

// function orderSetMenu(sandwich, drink = "스프라이트"){
//   console.log(`주문하신 ${sandwich}, ${drink} 세트메뉴 나왔습니다!`)
// }
// // 테스트 코드
// orderSetMenu('코드웨잇 클럽');
// orderSetMenu('터키베이컨 아보카도', '코카콜라');
// orderSetMenu('코드웨잇 멜트');
// orderSetMenu('이탈리안 비엠티', '닥터페퍼');
// orderSetMenu('에그마요', '환타 오렌지');

// 아래에 adultTag, teenagerTag, errorTag, transferTag라는 변수들을 작성해 주세요.

// let adultTag = "삑!"
// let teenagerTag = "삑삑!"
// let errorTag = "삑삑삑!"
// let transferTag = "환승입니다."
//
// function tagNotification(tag){
//   console.log(`${tag}`);
// }
//
//
// // 테스트 코드
// tagNotification(adultTag);
// tagNotification(teenagerTag);
// tagNotification(transferTag);
// tagNotification(errorTag);
// tagNotification(adultTag);

// function checkHeight(height) {
// 	if (height >= 140){
//         console.log('탑승이 가능합니다.')
//     }
//     else{
//         console.log('탑승이 불가능합니다.')
//     }
// }
//
// // 테스트 코드
// checkHeight(140);
// checkHeight(135);
// checkHeight(170);


// function printGrade(midtermScore, finalScore){
// 	let totalScore = midtermScore + finalScore;
//
//     if (totalScore >= 90){
//         console.log('A')
//     }
//     else if(totalScore >= 80){
//         console.log('B')
//     }
//     else if(totalScore >= 70){
//         console.log('C')
//     }
//     else if(totalScore >= 60){
//         console.log('D')
//     }
//     else if(totalScore < 60){
//         console.log('F')
//     }
// }
//
// // 테스트 코드
// printGrade(25, 35);
// printGrade(50, 45);
// printGrade(29, 24);
// printGrade(37, 42);

// // 나의 나이와, 나의 성별을 저장하는 변수
// let myAge = 26;
// let myGender = 'male';
//
// // 호칭을 담은 변수
// let callOlderBrother = '형';
// let callOlderSister = '누나';
// let callFriend = '친구';
// let callYoungerSister = '여동생';
// let callYoungerBrother = '남동생';
//
// // 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.
// function whatShouldICallYou(yourAge, yourGender) {
//     if (myAge === yourAge){
//         return "친구"
//     }
//     else if (myAge >= yourAge){
//         if (yourGender === 'female'){
//             return '여동생'
//         }
//         else{
//             return '남동생'
//         }
//     }
//     else{
//         if (yourGender === 'female'){
//             return '누나'
//         }
//         else{
//             return '형'
//         }
//     }
// }
//
// // 테스트 코드
// let result1 = whatShouldICallYou(25, 'female');
// let result2 = whatShouldICallYou(20, 'male');
// let result3 = whatShouldICallYou(26, 'female');
// let result4 = whatShouldICallYou(30, 'male');
// let result5 = whatShouldICallYou(31, 'female');
//
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);

// 각 등급별 가격
// let VIPPrice = 15;
// let RPrice = 13;
// let SPrice = 10;
// let APrice = 8;
//
// function checkPrice(grade) {
//     switch(grade){
//         case 'R':
//             console.log(`R석은 ${RPrice}만원 입니다.`)
//             break;
//         case 'VIP':
//         console.log(`VIP석은 ${VIPPrice}만원 입니다.`)
//         break;
//         case 'S':
//         console.log(`S석은 ${SPrice}만원 입니다.`)
//         break;
//         case 'A':
//         console.log(`A석은 ${APrice}만원 입니다.`)
//         break;
//         default:
//             console.log('VIP, R, S, A 중에서 하나를 선택해 주세요.')
//     }
// }
//
// // 테스트 코드
// checkPrice('R');
// checkPrice('VIP');
// checkPrice('S');
// checkPrice('A');
// checkPrice('B');

// for (let i = 1; i <= 100; i++){
//     if (i % 2 === 0){
//         console.log(`${i}`)
//     }
// }

// function printTriangle(height) {
//     let message = ''
//     for (let i = 0; i < height; i++){
//         message += '*';
//         console.log(`${message}`);
//     }
// }
//
// // 테스트 코드
// console.log('높이: 1');
// printTriangle(1);
//
// console.log('높이: 3');
// printTriangle(3);
//
// console.log('높이: 5');
// printTriangle(5);

// let i = 0;
// while (i <= 100){
//     if (i % 2 !== 0){
//         console.log(i);
//         i++;
//     }
//     i++;
// }

// const N = 180;
//
// let i = 1;
// let count = 0;
// while (i <= N){
//     if (N % i === 0){
//         console.log(i);
//         count += 1;
//     }
//     i++;
// }
// console.log(`${N}의 약수는 총 ${count}개 입니다.`)

// for (let i = 1; i <= 9; i++){
//     for (let j = 1; j <= 9; j++){
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }
//
// let previous = 1;  // 1
// let current = 0;  // 2
// let i = 1;
// let temp = 0;
// while(i <= 50){
//     temp = current;
//     current += previous;
//     previous = temp;
//     console.log(current)
//     i += 1;
// }
//

// let myVoca = {
//     'function': '함수',
//     'variable': '변수',
//     'constant': '상수',
//     'local': '지역의',
//     'global': '전반적인'
// }
//
// delete myVoca.function;
// delete myVoca.constant;
// delete myVoca.local;
//
// console.log(myVoca);
// console.log(myVoca.constant);
//
// myVoca['extend'] = '확장하다';
// myVoca['export'] = '내보내다';
// myVoca['import'] = '불러오다';
// myVoca['default value'] = '기본값';
//
//
// console.log(myVoca);
// console.log(myVoca.export);
// console.log(myVoca['default value'])

// let myVoca = {
// //     addVoca: function (key, value) {
// //         myVoca[key] = value
// //     },
// //     deleteVoca: function (key){
// //         delete myVoca[key]
// //     },
// //     printVoca: function(key){
// //         console.log(`"${key}"의 뜻은 "${myVoca[key]}"입니다.`)
// //     }
// // };
// //
// // myVoca.addVoca('parameter', '매개 변수');
// // myVoca.addVoca('element', '요소');
// // myVoca.addVoca('property', '속성');
// // // console.log(myVoca);
// // //
// // // // deleteVoca 메소드 테스트 코드
// // // myVoca.deleteVoca('parameter');
// // // myVoca.deleteVoca('element');
// // // console.log(myVoca);
// // //
// // // // printVoca 메소드 테스트 코드
// // // myVoca.printVoca('property');
// //
// //
// // for (let voca in myVoca) {
// //     console.log(myVoca[voca])
// // }

// let hyesoonScore = {
//     '데이터 모델링의 이해': 10,
//     '데이터 모델과 성능': 8,
//     'SQL 기본': 22,
//     'SQL 활용': 18,
//     'SQL 최적화 기본 원리': 20,
// };
//
// let minsoonScore = {
//     '데이터 모델링의 이해': 14,
//     '데이터 모델과 성능': 8,
//     'SQL 기본': 12,
//     'SQL 활용': 4,
//     'SQL 최적화 기본 원리': 16,
// };
//
// function passChecker(scoreObject) {
//     let totalScore = 0
//     for (let score in scoreObject){
//         totalScore += scoreObject[score]
//     }
//
//     if (totalScore >= 60){
//         console.log('축하합니다! 합격입니다!')
//     }
//     else{
//         console.log('아쉽지만 불합격입니다..')
//     }
// }
//
// passChecker(hyesoonScore);
// passChecker(minsoonScore);

// // 현재시간
// let myDate = new Date();
// console.log(myDate)
//
// //설정 년월일
// myDate = new Date('1997-03-24')
// console.log(myDate.toLocaleString())
//
// // 설정 년월일 및 시간
// myDate = new Date('1997-03-24T15:30:55')
// console.log(myDate.toLocaleString())
// //하나씩 인자 주기
// myDate = new Date(1997,2,24,15,30,40)
// //이때 month 인자는 0이 1월을 의미하기 때문에 3월을 쓰고 싶다면 2를 적어줘야한다.
// console.log(myDate.toLocaleString())
//
// let today = new Date()
// let timeDiff = today.getTime() - new Date(2021,11,5,19,13)
//
// console.log(`초 : ${timeDiff / 1000}`)
// console.log(`분: ${timeDiff / 1000 / 60}`)
// console.log(`시: ${timeDiff/ 1000 / 60 / 60}`)
// console.log(`일: ${timeDiff / 1000 / 60 / 60 / 24}`)
// console.log(today.getDay())
//
// switch (today.getDay()) {
//     case 0:
//         console.log('일요일');
//         break;
//     case 1:
//         console.log('월요일');
//         break;
//     case 2:
//         console.log('화요일');
//         break;
//     case 3:
//         console.log('수요일');
//         break;
//     case 4:
//         console.log('목요일');
//         break;
//     case 5:
//         console.log('금요일');
//         break;
//     case 6:
//         console.log('토요일');
//         break;
// }
// // 일요일부터 월요일까지 0 ~ 6 의 숫자로 반환
// console.log(today.toLocaleTimeString())
// console.log(today.toLocaleDateString())
// console.log(today.toLocaleString())
// console.log(`${today.getHours()}시 ${today.getMinutes()}분`)
// console.log(today.getDate())

let today = new Date(2112, 8, 24);
let jaeSangStart = new Date(2109, 7, 1);

function workDayCalc(startDate) {
    // 여기에 코드를 작성해 주세요.
    let timeDiff = today.getTime() - startDate.getTime()
    console.log(`오늘은 입사한 지 ${(timeDiff / 1000 / 60 / 60 / 24) + 1}일째 되는 날 입니다.`)
}

workDayCalc(jaeSangStart);