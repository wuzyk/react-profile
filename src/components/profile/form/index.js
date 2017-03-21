import React, { Component } from 'react';

export default class ProfileForm extends Component {
  render() {
    return (
      <form className="profile-form" onSubmit={this.props.onSubmit}>
        {this.props.children}
        <div className="profile-form__buttons">
          <button type="submit">Сохранить</button>
          <button onClick={this.props.onFinishEdit}>Отмена</button>
        </div>
      </form>
    );
  }
}
