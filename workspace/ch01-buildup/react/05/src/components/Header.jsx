function Header(){
  return (
    <header>
      <h1>Todo List - 컴포넌트를 모듈화 :()</h1>
      <p>파일 경로: <span id="filepath">{ `ch${document.URL.split('/ch')[1]}index.html` }</span></p>
    </header>
  );
}

export default Header;