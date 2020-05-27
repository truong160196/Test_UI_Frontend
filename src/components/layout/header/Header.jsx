import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
} from '@fortawesome/free-solid-svg-icons'

import {
  faBell,
  faQuestionCircle
} from '@fortawesome/free-regular-svg-icons'

// import component
import './header.scss';

class Header extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
		showMenu: false,
	}
  }

  componentWillMount = () => {
    //
  }

  openMenuMobile = () => {
    const {
      showMenu,
    } = this.state;

    this.setState({
      showMenu: ! showMenu,
    })
  }

  render() {
    const {
      showMenu,
    } = this.state;

    return (
		<section className="header">
			<div className="header-container container">
        <div className="top-header">
          <div className="left-bar">
            <button
              type="button"
              className="btn btn-default btn-menu-mobile"
              onClick={this.openMenuMobile}
              >
              <FontAwesomeIcon className="icon-menu-bar" icon={faBars} />
            </button>
            <h3 className="name-text">Henry Chou</h3>
          </div>
          <div className="right-bar">
            <FontAwesomeIcon className="menu-notify" icon={faBell} />
            <FontAwesomeIcon className="menu-question" icon={faQuestionCircle} />
          </div>
        </div>
        <div
          className="menu-mobile"
          style={{display: showMenu ? 'block' : 'none'}}
        >
          <ul>
            <li className="menu-item">Quota</li>
            <li className="menu-item">Cash out</li>
            <li className="menu-item">Bank accounts</li>
            <li className="menu-item">Requests</li>
          </ul>
        </div>
      </div>
	  </section>
    );
  }
}

export default Header;