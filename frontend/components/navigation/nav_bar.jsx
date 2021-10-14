import React from 'react';
import { faCircle, faPortrait, faThumbsUp, faPencilAlt, faTrashAlt, faEllipsisH, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

class NavBar extends React.Component {

  render(){
    return(
    <div className="topnav">
      <input type="text" placeholder="Search.."/>
      <a className="active" href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
    )
  }
}

export default NavBar;