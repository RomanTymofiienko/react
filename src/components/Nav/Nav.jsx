import React from 'react';
import s from './Nav.module.css';
import Link from './Link/Link'


const Nav = (props) => {

  let navElemants = props.sidebar.navBar.map( navBar =>  <Link name={navBar.name} id={navBar.id} link={navBar.link}/> )

    return (
      <nav className={s.nav}>
        {navElemants}
      </nav>
    )
};

export default Nav;