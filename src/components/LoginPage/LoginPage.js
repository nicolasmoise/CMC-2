/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './LoginPage.css';
import withStyles from '../../decorators/withStyles';
import RequiredInput from '../RequiredInput';

@withStyles(styles)
class LoginPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };


  handleLogin(event) {
    event.preventDefault();
  }

  render() {
    const title = 'Log In';
    this.context.onSetTitle(title);
    return (
      <div className="LoginPage">
        <div className="LoginPage-container">
          <h1>{title}</h1>
          <form onSubmit={this.handleLogin.bind(this)} noValidate>
            <RequiredInput name="username" type="text"/>
            <RequiredInput name="password" type="password"/>
            <input type="submit" value="Login"/>
          </form>
        </div>
      </div>
    );
  }

}

export default LoginPage;
