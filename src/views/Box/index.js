import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import UserService from '../../services/user.service';
import DefaultLayout from '../../components/Layout/Default';
import { BrowserView } from 'react-device-detect';
import Button from '../../components/button';
import Input from '../../components/input';

const Box = () => {
  const boxId = useParams();
  var boxData = UserService.getBoxInfo();
  
  const [newBoxId, setNewBoxId] = useState('');

  const history = useHistory();


  const loginAsAdmin = () => {
    history.push('/login');
  }
  
  const changeBox = () => {
    history.replace('/Box/' + newBoxId)
    window.location.reload();
  }
  
  useEffect(() => {
    UserService.setUser(boxId);
  }, [boxId]);
  

  const headerContent = (
    <BrowserView className="flex-row space-between width-50">
      <div className='flex-row'>
        <Input
        placeholder='Enter Box Code'
        value = { newBoxId }
        onChange={(e) => setNewBoxId(e.target.value)}
        />
        <Button
          className="button border-000-2"
          title="Change Box"
          action={ changeBox }
          />
      </div>
      <Button
        className="button-secondary"
        title="Login As Admin"
        action={ loginAsAdmin }
      />
    </BrowserView>
  );

  return(
    <div>
      <DefaultLayout
        className="box-cover"
        containerClassName="container-80"
        headerContent={ headerContent }
      >
        <div>
          <div className="box-title">{ boxData['title'] }</div>
          <div className="box-code"> Box Code: #{ boxData['code'] }</div>
        </div>
      </DefaultLayout>
    </div>
  )
}

export default Box;