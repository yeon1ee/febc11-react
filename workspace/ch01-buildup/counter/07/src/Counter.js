import Yong from '../yong.js'

function Counter(){
  // let count = 0;

  let[count, setCount] = Yong.useState(10);


  const handleDown = () => {
    // TODO: 데이터 갱신
    count--;
    // TODO: 화면 갱신
    const counterSpan = document.querySelector('#counter > span');
    counterSpan.textContent = count;
  };
  const handleUp = () => {
    count++;
    const counterSpan = document.querySelector('#counter > span');
    counterSpan.textContent = count;
  };
  const handleReset = event => {
    count = 0;
    const counterSpan = document.querySelector('#counter > span');
    counterSpan.textContent = count;
  };

  return (
    Yong.createElement('div', { id: 'counter' }, 
      Yong.createElement('button', { type: 'button', onclick: handleDown }, '-'), 
      Yong.createElement('button', { type: 'button', onclick: (event) => handleReset(event) }, 0), 
      Yong.createElement('button', { type: 'button', onclick: handleUp }, '+'), 
      Yong.createElement('span', null, 0))
  );
}

export default Counter;
