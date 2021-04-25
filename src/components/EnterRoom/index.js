import React from 'react';
import Button from '../button';
import Input from '../input';
import { MobileView } from "react-device-detect";

const EnterRoom = (props) => {
  return(
    <div className="flex-column align-item-center">
      <div className="title-big margin-y30">Qu-Box</div>
      <Input
        className = 'input margin-y10 width-80'
        placeholder = 'Enter Box Code'
      />
      <Button
        id = 'enterRoom'
        className = 'button margin-y10'
        title = 'Go to Box'
      />
      <MobileView className="width-100">
        <div className="align-center color-secondary">or</div>
        <Button
          id = 'adminLogin'
          className = 'button-secondary margin-y10'
          title = 'Login as Admin'
          action={ props.loginAction }
        />
      </MobileView>
    </div>
  )
};

export default EnterRoom;