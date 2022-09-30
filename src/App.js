import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import Question from './Components/Question/Question';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Question></Question>
    </div>
  );
}

export default App;
