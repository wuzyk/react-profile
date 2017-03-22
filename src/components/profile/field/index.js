import React, { Component } from 'react';

import './index.css';

export default class ProfileField extends Component {
  render() {
    return (
      <div className="profile-field">
        <label className="profile-field__title" htmlFor={this.props.name}>{this.props.title}</label>
        <div className="profile-field__input">
          <input type={this.props.type} name={this.props.name} value={this.props.value} onChange={this.props.onChange}/>
          {this.props.error && <div className="profile-field__error">{this.props.error}</div>}
        </div>
      </div>
    );
  }
}
