const snacks = ['원카칩', '꿀버터칩', '헛스윙칩', '태양칩', '야채시간'];
const drinks = ['사이다', '콜라', '우유', '물', '커피', '레몬에이드'];

function printArguments(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}

const mySnacks = [...snacks]
const myDrinks = [...drinks]

mySnacks.splice(2, 3);
myDrinks.splice(1);

const myChoice = [...mySnacks, ...myDrinks]

printArguments(...myChoice);