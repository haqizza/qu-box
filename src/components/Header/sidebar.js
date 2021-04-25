import React from 'react';
import Burger from './burger'
import { slide as Menu } from 'react-burger-menu';
import Logo from './cross.svg';

const SideBar = (props) => {

  return(
    <Menu
      pageWrapId="page-wrap"
      customBurgerIcon={ <Burger/> }
      customCrossIcon={ <img src={ Logo } alt="Cross icon" /> }
      width="100%"
    >
      <a id="home" className="menu-item white" href="/">Home</a>
      <a id="login" className="menu-item white" href="/login">Login as Admin</a>
      <a id="help-support" className="menu-item white" href="/help-support">Help and Support</a>
      <a id="register" className="menu-item white" href="/register">Register Box</a>
    </Menu>
  )
}

export default SideBar;
