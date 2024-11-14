// Array.prototype.map(callback): 배열의 각 요소에 대해 콜백 함수를 실행한다.
// 반환 값은 없음

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = 0;

var newArray = array.map((number) => {
  if (number % 2 !== 0) {
    return number
  } else {
    return 0;
  }
})

var newArray = array.map(num => num % 2 ? num : 0)
newArray.forEach(number => result += number);

console.log(result);  //25