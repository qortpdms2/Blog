import logo from './logo.svg';
import './App.css';


function App() {
  let posts = '강남 고기 맛집';
  function fun(){
    return 100;
  }
  return (
    <div className="App">
      <div className="black-nav">
          <div>개발 Blog</div>
      </div>
      <h4 className="content">{ fun() }</h4>
    </div>
  );
}

export default App;
