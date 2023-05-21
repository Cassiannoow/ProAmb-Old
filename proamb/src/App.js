import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react';
import Rotas from './Rotas';
import Header from './Components/Templates/Header';

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
          <Header />
          <Rotas />
      </div>
    </BrowserRouter>
  );
}

export default App;
