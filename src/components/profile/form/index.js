import React, { Component } from 'react';

import './index.css';

export default class ProfileForm extends Component {
  render() {
    return (
      <form className="profile-form" onSubmit={this.props.onSubmit}>
        {this.props.children}
        <div className="profile-form__buttons">
          <button className="profile-form__button" type="submit">Сохранить</button>
          <button className="profile-form__button" onClick={this.props.onFinishEdit}>Отмена</button>
        </div>
      </form>
    );
  }
}
