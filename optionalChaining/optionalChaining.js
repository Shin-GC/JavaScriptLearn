function printCatName(user) {
  console.log(user.cat?.name ?? '함께 지내는 고양이가 없습니다.');
}

// 옵셔널 체이닝을 이용하여 연산자 왼편의 프로퍼티 값이 undefined 또는 null 이 아니라면 그다음 프로퍼티 값을 리턴하고 그렇지 않은 경우에는 undefined 를 반환하는 문법
// null 병합 연산자를 이용해 앞의 값이 null 또는 undefined 라면 ?? 뒤에 값을, 아니라면 앞의 값을 출력한다.
const user1 = {
  name: 'Captain',
  cat: {
    name: 'Crew',
    breed: 'British Shorthair',
  }
}

const user2 = {
  name: 'noCat',

}

printCatName(user1);
printCatName(user2);