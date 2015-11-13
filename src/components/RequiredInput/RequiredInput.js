/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './RequiredInput.css';

@withStyles(styles)

class RequiredInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', dirty: false};
  }
  handleChange(event) {
    this.setState({value: event.target.value, dirty: true});
  }
  render() {
    let Error;

    if (this.state.value.length === 0 && this.state.dirty) {
      Error = <div className="input-error">{this.props.name} is required.</div>;
    }

    return (
      <div className="input-ctn">
        <input placeholder={this.props.name} required onChange={this.handleChange.bind(this)} type={this.props.type}/>
        {Error}
      </div>
    );
  }
}
RequiredInput.propTypes = {
  name: React.PropTypes.string,
  type: React.PropTypes.string
};

module.exports = RequiredInput;
