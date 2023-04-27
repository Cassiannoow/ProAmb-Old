import './App.css';
import Home from './Components/Telas/Home'
import Header from './Components/Templates/Header';
import MenuVertical from './Components/MenuVertical/MenuVertical';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
      </div>

      <div>
          <MenuVertical />
      </div>
    </BrowserRouter>
  );
}

export default App;
