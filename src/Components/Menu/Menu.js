import React from 'react';
import './Menu.css';
import {
    useFocusable,
    FocusContext
  } from "@noriginmedia/norigin-spatial-navigation";

const Menu = (props) => {
    const { ref, focused, focusSelf, setFocus } = useFocusable();
  return (
<div ref={ref} className={`menu-details ${focused ?'focused': ''}`}>
    <p className="MenuItemText">{props.value}</p>

</div>
  )
}

export default Menu;
