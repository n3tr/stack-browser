import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class Header extends React.Component {
  render () {
    return (
      <header>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Stack Browser</a>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/questions">Browser</Link>
              </li>
              <li>
                <Link to="/favorite">Favorite</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;
