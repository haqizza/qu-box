import React from 'react';
import Button from '../button';
import Input from '../input';

const LoginForm = () => {

  

  return(
    <div className="flex-column align-item-center">
      <div className="title-big margin-y30">Qu-Box</div>
      <div>
        <h3 className="white">Login As Admin</h3>
      </div>
      <Input
        className = 'input margin-y10 width-80'
        placeholder = 'Username'
      />
      <Input
        className = 'input margin-y10 width-80'
        placeholder = 'Password'
      />
      <Button
        id = 'loginButton'
        className = 'button margin-y10'
        title = 'Login'
      />
    </div>
  )
};

export default LoginForm;