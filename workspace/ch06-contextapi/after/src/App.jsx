import { useEffect, useState } from 'react';
import Left1 from '@components/Left1';
import Right1 from '@components/Right1';
import { CounterProvider } from '../context/CounterContext';

function App() {
  const [count, setCount] = useState(0);

  const countUp = function(step){
    setCount(count + step);
  };

  useEffect(()=>{
    console.log('# App 렌더링.');
  });

  return (
    <>
      <h1>Props Drilling 대신 Context API사용</h1>
      <div id="container">
        <h1>App</h1>
        <div id="grid">
          <CounterProvider>
            <Left1 />
            <Right1 />
          </CounterProvider>
        </div>
      </div>
    </>
  );
}

export default App;