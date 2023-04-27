import './App.css';
import Header from './Components/Templates/Header';
import MenuVertical from './Components/MenuVertical/MenuVertical';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>

      <div>
          <MenuVertical />
      </div>
    </BrowserRouter>
  );
}

export default App;
