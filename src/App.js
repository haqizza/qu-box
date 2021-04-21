import React from 'react';
import './App.css';
import RootRouter from './Router';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <RootRouter>
      </RootRouter>
    </BrowserRouter>
  );
}

export default App;
