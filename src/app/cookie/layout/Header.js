import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../img/cookie-logo.svg';

class Header extends React.Component {

  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <nav className="navbar"
          aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item">
            <NavLink
              className="navbar-item"
              to="/cookie"
              activeClassName="is-active"
            >
              <img 
                src={logo}
                alt="cookie Logo"
                aria-label="cookie Logo"
                style={{ margin: '0.8rem' }}
              />
              <span className="title">cookie</span>
            </NavLink>
          </a>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>







        
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
              <NavLink
                className="navbar-item"
                to="/cookie/timeline"
                activeClassName="is-active"
              >
                Timeline
              </NavLink>
              <NavLink
                className="navbar-item"
                to="/cookie/friends"
                activeClassName="is-active"
              >
                Friends
              </NavLink>
              <NavLink
                className="navbar-item"
                to="/cookie/messages"
                activeClassName="is-active"
              >
                Messages
              </NavLink>
          </div>
          <div className="navbar-end">
            <a className="navbar-item" to="/cookie/editaccount">
              Edit Account
            </a>
            <a className="navbar-item" to="/cookie/help">
              Help
            </a>
            <a className="navbar-item" to="/cookie/logout">
              Logout
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
