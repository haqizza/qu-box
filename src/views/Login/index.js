import React from 'react';
import { useHistory } from 'react-router';
import DefaultLayout from '../../components/Layout/Default';
import LoginForm from '../../components/Login/loginForm';

const Login = () => {
  const history = useHistory();
  return(
    <DefaultLayout>
      <LoginForm history={ history }>
      </LoginForm>
    </DefaultLayout>
  )
};

export default Login;