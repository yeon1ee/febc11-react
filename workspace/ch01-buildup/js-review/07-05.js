// Array.prototype.find(callback): 배열의 각 요소에 대해 콜백 함수를 실행한다.
// callback(accmulator: 누적값, currentValue: 현재 값, index: 인덱스, array: 원본 배열)
// initialValue가 주어지면 누적값의 초기값으로 사용하고
// initialValue가 주어지지 않으면 배열의 첫 번째 요소가 누적값의 초기값으로 사용되고 두 번째 요소부터 콜백 함수가 호출된다.

// 배열 요소 중 홀수의 합계 구하기
var array = [6, 7, 8, 1, 4, 5, 2, 3, 9, 10];

// var result = array.reduce((sum, num) => {
//   if (num % 2 !== 0 ) {
//     return sum + num; // 홀수일 때 sum에 num을 누적해서 반환
//   } else {
//     return sum; //짝수일 때 이전 sum을 그대로 반환
//   }
// }, 0);

var result = array.reduce((sum, num) => {
  return num % 2 ? (sum + num) : sum;
})

console.log(result);  //25