import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Home from './Components/Telas/Home';
import Header from './Components/Templates/Header';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
