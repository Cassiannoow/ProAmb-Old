import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { meuContext } from './Contexto';
import { useState } from 'react';
import Rotas from './Rotas';
import Header from './Components/Templates/Header';

function App() {

  const [ user, setUser ] = useState()

  return (
    <BrowserRouter>
      <div className='App'>
        <meuContext.Provider value={[user,setUser]}>
          <Header />
          <Rotas />
        </meuContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
