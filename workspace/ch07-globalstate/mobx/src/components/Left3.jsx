import counterStore from '@mobX/counterStore';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

// 스토어의 상태 변경 여부를 감시해서 상태가 변결 될 때 리렌더링을 하도록 observer() 사용 해야 된다.
const Left3 = observer(function Left3() {
  useEffect(()=>{
    console.log('      # Left3 렌더링.');
  });

  return (
    <div>
      <h3>Left3</h3>
      <span>{ counterStore.count }</span>
    </div>
  );
})


export default Left3;