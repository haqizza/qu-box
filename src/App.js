import React from 'react';
import './App.css';
import RootRouter from './Router';
import { BrowserRouter } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Guid } from 'js-guid';


const App = () => {
  const [userId, setuserId] = useCookies(['userId']);

  if(!userId){
    let newUserId = Guid.newGuid().toString();
    let d = new Date();
    d.setTime(d.getTime + (3 * 24 * 3600 * 1000));
    setuserId('userId', newUserId, { path: '/', expires: d});
    console.log(userId)
  }

  return (
    <BrowserRouter>
      <RootRouter>
      </RootRouter>
    </BrowserRouter>
  );
}

export default App;
