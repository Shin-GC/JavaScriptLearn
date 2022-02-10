const letters = ['D', 'C', 'E', 'B', 'A'];
const numbers = [1, 10, 4, 21, 36000];

letters.sort();
numbers.sort();

console.log(letters); // (5) ["A", "B", "C", "D", "E"]
console.log(numbers); // (5) [1, 10, 21, 36000, 4]
// sort 메소드에 아무런 아규먼트도 전달하지 않을 때는 기본적으로 유니코드에 정의된 문자열 순서에 따라 정렬되기 때문에 숫자는 정렬되지 않는다.


// 오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers); // (5) [1, 4, 10, 21, 36000]

// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers); // (5) [36000, 21, 10, 4, 1]

/*
반환 값 < 0 : a가 b보다 앞에 있어야 한다.

반환 값 = 0 : a와 b의 순서를 바꾸지 않는다.

반환 값 > 0 : b가 a보다 앞에 있어야 한다.
*/


const letters2 = ['a', 'c', 'b'];
const numbers2 = [421, 721, 353];

letters2.reverse();
numbers2.reverse();

console.log(letters2); // (3) ["b", "c", "a"]
console.log(numbers2); // (3) [353, 721, 421]