import React from 'react';
import LandingPagelayout from '../../components/LandingPage/Layout';
import EnterRoom from '../../components/EnterRoom';
import { BrowserView } from 'react-device-detect';
import Button from '../../components/button';
import { useHistory } from 'react-router-dom';

const LandingPage = (props) => {
  const history = useHistory();
  
  const loginAsAdmin = () =>{
    history.push('/login');
  }

  const headerContent = (
    <BrowserView >
      <Button
        className="button-secondary"
        title="Login As Admin"
        action={ loginAsAdmin }
      />
    </BrowserView>
  );
  return (
    <LandingPagelayout
      headerContent={ headerContent }
    >
      <EnterRoom action={ loginAsAdmin } />
    </LandingPagelayout>
  )
}


export default LandingPage;