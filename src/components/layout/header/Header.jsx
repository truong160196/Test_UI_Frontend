import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faQuestionCircle,
  faBell
} from '@fortawesome/free-solid-svg-icons'
// import component
import './header.scss';

class Header extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
		isShowLogin: false,
		isShowRegister: false,
	}
  }

  componentWillMount = () => {
    //
  }

  render() {
    return (
		<section className="header">
			<div className="header-container container">
        <div className="triangles" />
        <div className="top-header">
          <div className="left-bar">
            <i className="fa fa-bars menu-hide"></i>
            <h3 className="name-text">Henry Chou</h3>
          </div>
          <div className="right-bar">
            <i className="fa fa-question-circle menu-question"></i>
            <i className="fa fa-bell menu-notify"></i>
          </div>
        </div>
        <div className="menu-mobile">

        </div>
      </div>
	  </section>
    );
  }
}

export default Header;