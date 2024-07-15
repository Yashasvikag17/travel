import React ,{useState} from 'react';

import './navbar.css';
//import './navbar.scss';
import { MdOutlineTravelExplore } from 'react-icons/md';
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb';


export default function Navbar() {
const [active ,setActive] = useState('navBar')
 const showNav =()=>{
   setActive('navBar activeNavbar')
 }

const removeNavbar =()=>{
   setActive('navBar ')
 }
  return (
    <nav className='navBarSection'>
      <header className='header flex'>
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1 className='icon'><MdOutlineTravelExplore />Travel.</h1>
          </a>
        </div>

        <div className= {active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Conatact</a>
            </li>
             <button className='btn'> <a href='#'>Book now</a></button>
          </ul>

          <div onClick={removeNavbar}  className="closeNavbar">
            <AiFillCloseCircle className ="icon"/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>
      </header>
    </nav>
  );
}
