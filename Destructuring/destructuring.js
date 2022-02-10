const numbers = [1, 2, 3];

const [one, two, three] = numbers

const products = ['TV', '식탁', '냉장고', '전기밥솥', '전자레인지', '오븐', '식기세척기'];

const [livingRoom, ...kitchen] = products

let firstName = 'Kang';
let lastName = 'Young';

[firstName, lastName] = [lastName, firstName]

console.log(one);
console.log(two);
console.log(three);
console.log(livingRoom);
console.log(kitchen[1]);
console.log(firstName);
console.log(lastName);

const myBestArt = {
  title: '별이 빛나는 밤에',
  artist: '빈센트 반 고흐',
  year: 1889,
  medium: '유화',
};

const {title, artist, year, medium} = myBestArt


const myBestSong = {
  title: '무릎',
  artist: '아이유(IU)',
  release: '2015.10.23.',
  lyrics: '모두 잠드는 밤에...'
};

const {title: songName, artist: singer, ...rest} = myBestSong

const menu1 = {name: '아메리카노'};
const menu2 = {name: '바닐라 라떼', ice: true};
const menu3 = {name: '카페 모카', ice: false};

function printMenu(menu) {
  const {name, ice = true} = menu;

  console.log(`주문하신 메뉴는 '${ice ? '아이스' : '따뜻한'} ${name}'입니다.`);
}

console.log(title);
console.log(artist);
console.log(year);
console.log(medium);
console.log(songName);
console.log(singer);
console.log(rest);
printMenu(menu1);
printMenu(menu2);
printMenu(menu3);

const music1 = { title: '난치병', singer: '하림' };
const music2 = { title: '너의 모든 순간', singer: '성시경' };
const music3 = { title: '무릎', singer: '아이유' };
const music4 = { title: '옛사랑', singer: '이문세' };
const music5 = { title: '한숨', singer: '이하이' };
const music6 = { title: '추억의 책장을 넘기면', singer: '이선희' };

function printFavoriteSong(name, { title, singer }) {
  console.log(`최근 '${name}'님이 즐겨듣는 노래는 '${singer}'의 '${title}'이라는 노래입니다.`);
}
// function printFavoriteSong(name, music) {
//   const { singer, title } = music;
//   console.log(`최근 '${name}'님이 즐겨듣는 노래는 '${singer}'의 '${title}'이라는 노래입니다.`);
// }
printFavoriteSong('영훈', music4);
printFavoriteSong('동욱', music1);
printFavoriteSong('대위', music3);
printFavoriteSong('소원', music2);
printFavoriteSong('우재', music5);
printFavoriteSong('영준', music6);