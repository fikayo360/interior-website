import './nav.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Menu } from '../menu/menu'

export const NavBar = ({toggleDrop,dropOpen}) => {
    const [navActive,setNavActive] = useState('home')
      const setHomeActive = () => {
        setNavActive('home');
      };

      const setWorksActive = () => {
        setNavActive('works');
      };

      const setProcessActive = () => {
        setNavActive('process');
      };

      const setContactActive = () => {
        setNavActive('contact');
      };

    return (
      <nav id="nav">
      <div id="navWrap">
        <h1>tyler karu</h1>
        <div id="navCenter">
          <ul>
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
        <div id="btn">
          <span>enquiry</span>
        </div>
        <Menu toggleDrop={toggleDrop} dropOpen={dropOpen} />
      </div>
    </nav>
    )
}

