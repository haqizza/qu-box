import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header';


const Box = () => {
  const [room, setRoom] = useState();
  let { roomId } = useParams();

  useEffect(() =>{
    setRoom({ roomId })
    localStorage.setItem('roomId', room);
    axios.get('/api/question',
    
    );
  }, [room, roomId])
  
  return(
    <div>
      <Header>
        
      </Header>
    </div>
  )
}

export default Box;