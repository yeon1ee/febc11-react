var itemList = [
  { no: 1, todo: '두부', done: true},
  { no: 2, todo: '계란', done: false},
  { no: 3, todo: '라면', done: true},
];

console.log(itemList[0]);
console.log(itemList[1]);

var [first, second] = itemList;
console.log(first);
console.log(second);

console.log(second.no, second.todo);

var { no, todo, done } = second;
console.log(no, todo, done);  