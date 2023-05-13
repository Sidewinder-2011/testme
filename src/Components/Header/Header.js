import React from 'react'
import Menu from '../Menu/Menu';
import './Header.css';

const Header = () => {
  return (
   <div class="HeaderMenuItems">
    <Menu value={"HOME"}/>
    <Menu value={"VALUE 1"}/>
    <Menu value={"VALUE 2"}/>
    <Menu value={"VALUE 3"}/>
    <Menu value={"VALUE 4"}/>
    <Menu value={"VALUE 5"}/>
   </div>
  )
}

export default Header;
