import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
