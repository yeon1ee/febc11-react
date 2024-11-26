import { Link, useNavigate, useOutlet, useOutletContext } from "react-router-dom";

function TodoEdit() {

  const { item } = useOutletContext();

  const navigate = useNavigate();

  // 수정 버튼을 눌렀을 때
  const onSubmit = (event) => {
    try {
      event.preventDefault();
      // TODO: API 서버에 수정 요청
  
      alert('할 일이 수정 되었습니다.');

      // 할 일 상세보기로 이동
      // navigate('..', { relative: true});  // 상대 경로로 이동
      // navigate(`/list/${ item._id }`);  // 절대 경로로 이동
      navigate(-1);
    } catch(err) {
      console.error(err);
      alert('할 일 수정에 실패했습니다.');
    }
  };

  return (
    <>
      <h2>할일 수정</h2>
      <div className="todo">
        <form onSubmit={ onSubmit }>
          <label htmlFor="title">제목 :</label>
          <input type="text" id="title" defaultValue={ item.title } autoFocus />
          <br/>
          <label htmlFor="content">내용 :</label>
          <textarea id="content" cols="23" rows="5" defaultValue={ item.content }></textarea>
          <br/>
          <label htmlFor="done">완료 :</label>
          <input type="checkbox" id="done" defaultChecked={ item.done } />
          <br/>
          <button type="submit">수정</button>
          <Link to="/list/1">취소</Link>
        </form>
      </div>
    </>
  );
}

export default TodoEdit;