import React from 'react';
import SideBar from './sidebar';
import { MobileView } from "react-device-detect";

const Header = (props) => {
  return(
    <div id="header-container">
      <div id="header" className="header">
        <div className="header-slot flex-row space-between">
          <div class="title">
            {props.title}
          </div>
          { props.children }
          <MobileView>
            <SideBar outerContainerId="header-container" />
          </MobileView>
        </div>
      </div>
      {props.roomInfo}
    </div>
  )
}

export default Header;