import React from 'react'
import { Link } from 'react-router-dom';
import * as userService from '../utilities/users-services'
import styles from './NavBar.module.css';

function NavBar(props) {
  // Add in functionality to log out
  function handleLogOut () {
    // Delegate to users-service
    userService.logOut();
    // update state will also cause a re-render
    props.setUser(null);
  }

  return (
    <div className={styles.Navbar}>
      <nav>
        <Link to='/orders'>Contact</Link>
        &nbsp; | &nbsp;
        <Link to='/orders/new'>Category</Link>
        &nbsp; | &nbsp;
        {props.user && (
          <span>Welcome, {props.user.name}</span>
        )}
        &nbsp; | &nbsp;
        <span
          role="button"
          tabIndex={0}
          onClick={handleLogOut}
          onKeyDown={(e) => e.key === 'Enter' && handleLogOut()}
        >
          Log Out
        </span>
      </nav>
    </div>
  );
}

export default NavBar