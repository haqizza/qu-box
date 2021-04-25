import React, { useState } from 'react';
import AuthService from '../../services/auth.service';
import Button from '../button';
import Input from '../input';

const LoginForm=(props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const validateForm = () => {
    return username.length > 0 && password.length > 0;
  }
  
  const loginAuth = () =>{
    console.log(username, password);
    AuthService.login(username, password)
      .then(() => {
        props.history.push("/dashboard");
        window.location.reload();
      }, console.error("err"))
  }

  return(
    <div className="flex-column align-item-center">
      <div className="title-big margin-y30">Qu-Box</div>
      <div>
        <h3 className="white">Login As Admin</h3>
      </div>
      <form onSubmit={() => { loginAuth() } }>
        <Input
          type='text'
          className='input margin-y10 width-80'
          value={ username }
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
          />
        <Input
          type='password'
          className='input margin-y10 width-80'
          value={ password }
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          />
        <Button
          id='loginButton'
          type='submit'
          className='button margin-y10'
          title='Login'
          // action={ loginAuth() }
          disabled={ !validateForm() }
          />
      </form>
    </div>
  )
};

export default LoginForm;