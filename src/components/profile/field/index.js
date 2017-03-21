import React, { Component } from 'react';

export default class ProfileField extends Component {
  render() {
    return (
      <div className="profile-field">
        <label htmlFor={this.props.name}>{this.props.title}</label>
        <input type={this.props.type} name={this.props.name} value={this.props.value} onChange={this.props.onChange}/>
        {this.props.error && <div className="profile-field__error">{this.props.error}</div>}
      </div>
    );
  }
}
