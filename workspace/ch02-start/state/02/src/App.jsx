import { useState } from "react";
function App() {
  const [number, setNumber] = useState(0)

  return (
    <>
     <h2>02 이벤트 핸들러에서 state 값을 여러번 변경했을 때 문제점</h2>
     <p>{ number }</p>
     <button onClick={ () => {
      
      // 호출 되는 즉시 리랜더링이 되지 않고 모아 두었다가 한꺼번에 반영되기 때문에
      // 여러번 호출한 것도 한 번에 처리된다.
      // ex. +3 을 하고싶어서 setNumber을 3번 호출해도 1번만 호출된다.
      // setNumber(number + 1);

      // 콜백 함수의 리턴 값을 저장해 두었다가 다음에 호출되는 콜백함수의 인자로 전달한다.
      // 내부적으로 num을 선언해서 사용함
      setNumber(num => num + 1); // 0 + 1
      setNumber(num => num + 1); // 1 + 1
      setNumber(num => num + 1); // 2 + 1
     }}>+1</button>
    </>
  )
}

export default App
