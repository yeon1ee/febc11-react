function TodoList() {
  return(
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <a href="./todoadd.html">추가</a>
        <br />
        <form className="search">
          <input type="text" autoFocus />
          <button type="submit">검색</button>
        </form>
        <ul className="todolist">
          <li>
            <span>1</span>
            <a href="./tododetail.html">잠자기</a>
            <a href="./todolist.html">삭제</a>
          </li>
          <li>
            <span>2</span>
            <a href="./tododetail.html">자바스크립트 복습</a>
            <a href="./todolist.html">삭제</a>
          </li>
          <li>
            <span>3</span>
            <a href="./tododetail.html"><s>리액트 과제 하기</s></a>
            <a href="./todolist.html">삭제</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TodoList;