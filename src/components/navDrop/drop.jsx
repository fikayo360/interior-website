import './drop.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
export  const Drop = ({dropOpen,toggleDrop}) => {
    const [navActive,setNavActive] = useState('home')
    const setHomeActive = () => {
      toggleDrop()
      setNavActive('home');
    };

    const setWorksActive = () => {
      toggleDrop()
      setNavActive('works');
    };

    const setProcessActive = () => {
    toggleDrop()
      setNavActive('process');
    };

    const setContactActive = () => {
      toggleDrop()
      setNavActive('contact');
    };


    return(
        <div  className={`drop ${dropOpen?'dropActive':''}`}>
            <ul id='dropList'>
            <li onClick={setHomeActive} key="home">
              <Link to="/" className={navActive === 'home' ? 'active' : ''}>home</Link>
            </li>
            <li onClick={setWorksActive} key="works">
              <Link to="/works" className={navActive === 'works' ? 'active' : ''}>works</Link>
            </li>
            <li onClick={setProcessActive} key="process">
              <Link to="/process" className={navActive === 'process' ? 'active' : ''}>process</Link>
            </li>
            <li onClick={setContactActive} key="contact">
              <Link to="/contact" className={navActive === 'contact' ? 'active' : ''}>contact</Link>
            </li>
          </ul>
        </div>
    )
}