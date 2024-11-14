// Array.prototype.find(callback): 배열의 각 요소에 대해 콜백 함수를 실행한다.
// callback(elem, index)
// true를 반환하는 첫 번째 콜백 함수에 전달된 요소를 반환
// false를 반환하는 콜백 함수가 없을 경우 undefined를 반환

// 배열 요소 중 2와 3의 최소 공배수 구하기
var array = [6, 7, 8, 1, 4, 5, 2, 3, 9, 10];
// - 를 반환할 경우: a, b 정렬
// + 를 반환할 경우: b, a 정렬
// = 를 반환할 경우: 그대로

var result = 0;

array.sort((a, b) => a - b );
console.log(array);  // 오름차수 정렬 됨

var result = array.find((item) => item % 2 === 0 && item % 3 === 0 );

console.log(result);  //6