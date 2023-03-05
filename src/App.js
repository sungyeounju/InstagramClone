import './App.css';
import {Route} from 'react-router-dom';
// import Nav from './Nav.js';
function Nav(){
  return (
  <div>하 존나 막막하네 여기는 NAV 자리</div>
  )
}
function App() {
  return (
    <div className="App">

    {/* <Route>
      <Nav></Nav>
    </Route> */}
    
    <Nav></Nav>
    <div>프로필들어갈것임</div>
    <div>팔로우 팔로잉 자리</div>
    <div>여기는 콘텐츠자리</div>
    <div>여기는 메뉴인데 맨 위로 올려야할까</div>

    </div>
  );
}

export default App;