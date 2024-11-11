import yong from '../../../yong.js';
import Todo from './Todo.js';
import TodoItem from './TodoItem.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';


// Application 루트 컴포넌트
function App(){
  // 샘플 목록
  let itemList = [
    { no: 1, title: '두부', done: true} ,
    { no: 2, title: '계란', done: false },
    { no: 3, title: '라면', done: true },
  ];

  // "추가" 클릭 이벤트 핸들러
  const handleAdd = () => {
    const inputElem = document.querySelector('.todoinput > input');
    if(inputElem.value.trim() !== ''){
      addItem(inputElem.value);
      inputElem.value = '';
      inputElem.focus();
    }
  };

  // 엔터 이벤트 핸들러
  const handleAddKeyup = (event) => {
    if(event.key === 'Enter') handleAdd();
  };

  // 할일 추가
  function addItem(title){
    const item = {
      no: itemList[itemList.length-1].no + 1,
      title,
      done: false,
    };

    // TODO: 데이터 갱신
    itemList.push(item);

    // TODO: 화면 갱신
    const liElem = TodoItem({ item, toggleDone, deleteItem });
    const todolistElem = document.querySelector('.todolist');
    todolistElem.appendChild(liElem);
  }

  // 완료/미완료 처리
  function toggleDone(no){
    // TODO: 데이터 갱신
    let selectedItem = itemList.find(item => item.no === no);
    selectedItem.done = !selectedItem.done;

    // TODO: 화면 갱신
    const selectedLiElem = document.querySelector(`.todolist > li[data-no="${ no }"]`);
    const titleSpanElem = selectedLiElem.children[1];
    if(selectedItem.done){
      const sElem = document.createElement('s');
      sElem.appendChild(titleSpanElem.firstChild);
      titleSpanElem.appendChild(sElem);
    }else{
      titleSpanElem.appendChild(titleSpanElem.firstChild.firstChild);
      titleSpanElem.firstChild.remove();
    }
  }

  // 할일 삭제
  function deleteItem(no){
    // TODO: 데이터 갱신
    itemList = itemList.filter(item => item.no !== no);

    // TODO: 화면 갱신
    const selectedLiElem = document.querySelector(`.todolist > li[data-no="${ no }"]`);
    selectedLiElem.remove();
  }

  

  return yong.createElement('div', { id: 'todo' }, Header, Todo({ handleAdd, handleAddKeyup, itemList, toggleDone, deleteItem }), Footer);
}


export default App;
