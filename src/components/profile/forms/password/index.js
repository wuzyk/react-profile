import React from 'react';
import { connect } from 'react-redux';

import { changePassword } from './actions';

import ProfileFrom from '../../form/index';
import ProfileField from '../../field/index';

export class PasswordForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      processing: false,
      errors: {},
    };

    this.onFieldChange = this.onFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onFieldChange(event) {
    const fieldName = event.target.name;
    
    this.setState({
      [fieldName]: event.target.value,
      errors: {}
    });
  }


  onSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      this.setState({
        processing: true,
      });

      this.props.dispatch(changePassword(this.state.oldPassword, this.state.newPassword))
        .then(
          () => this.props.onFinishEdit(),
          (error) => {
            this.setState({
              processing: false,
              errors: {
                oldPassword: error.old_password
              }
            })
          }
        );
    }
  }

  validate(){
    const errors = {};

    ['oldPassword', 'newPassword', 'newPasswordRepeat'].forEach((fieldName) => {
      if (!this.state[fieldName])
        errors[fieldName] = 'Заполните поле';
    });

    if (this.state.newPassword && this.state.newPasswordRepeat && this.state.newPassword !== this.state.newPasswordRepeat) {
      errors.newPasswordRepeat = 'Пароли не совпадают';
    }

    if (this.state.newPassword && this.state.newPassword.length < 6) {
      errors.newPassword = 'Слишком короткий';
    }

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors,
      });
      return false;
    } else {
      return true;
    }
  }

  render() {
    const errors = this.state.errors;

    return (
      <ProfileFrom onFinishEdit={this.props.onFinishEdit} onSubmit={this.onSubmit}>
        <ProfileField name="oldPassword" type="password" title="Текущий" onChange={this.onFieldChange}  error={errors.oldPassword} />
        <ProfileField name="newPassword" type="password" title="Новый" onChange={this.onFieldChange} error={errors.newPassword} />
        <ProfileField name="newPasswordRepeat" type="password" title="Подтверждение нового пароля" onChange={this.onFieldChange} error={errors.newPasswordRepeat}/>
      </ProfileFrom>
    );
  }
}

export default connect()(PasswordForm);
