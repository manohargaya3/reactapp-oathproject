import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  handle() {
    switch (this.props.auth) {
      case null:
        return <li>still deciding</li>;

      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );

      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav className="container">
        <a className="brand-logo">Emaily</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {this.handle()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  null
)(Header);
