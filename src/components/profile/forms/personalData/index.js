import React from 'react';
import { connect } from 'react-redux';

import { saveProfile } from '../../actions';

import ProfileFrom from '../../form/index';
import ProfileField from '../../field/index';

export class PersonalDataForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      processing: false,
      errors: {},
    };

    this.onFieldChange = this.onFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      this.setState({
        processing: true,
      });

      this.props.dispatch(saveProfile)
        .then(
          () => {
            this.props.onFinishEdit();
          },
          (error) => {
            this.setState({
              processing: false,
              errors: {

              }
            })
          }
        );
    }
  }

  validate(){
    const errors = {};

    ['first_name', 'last_name'].forEach((fieldName) => {
      if (!this.state[fieldName])
        errors[fieldName] = 'Заполните поле';
    });

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors,
      });
      return false;
    } else {
      return true;
    }
  }

  onFieldChange(event) {
    const fieldName = event.target.name;

    this.setState({
      [fieldName]: event.target.value,
      errors: {}
    });
  }

  render() {
    const errors = this.state.errors;

    return (
      <ProfileFrom onFinishEdit={this.props.onFinishEdit} onSubmit={this.onSubmit}>
        <ProfileField name="first_name" type="text" title="Имя" value={this.props.first_name} onChange={this.onFieldChange}  error={errors.first_name} />
        <ProfileField name="last_name" type="text" title="Фамилия" value={this.props.last_name} onChange={this.onFieldChange} error={errors.last_name} />
      </ProfileFrom>
    );
  }
}

function mapStateToProps(state) {
  const { first_name, last_name } = state.profile;
  return {
    first_name,
    last_name
  };
}

export default connect(mapStateToProps)(PersonalDataForm);
