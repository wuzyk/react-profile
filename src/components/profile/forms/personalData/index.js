import React from 'react';
import { connect } from 'react-redux';

import { saveProfile } from '../../actions';

import ProfileFrom from '../../form/index';
import ProfileField from '../../field/index';

export class PersonalDataForm extends React.Component {
  constructor(props) {
    super(props);

    const { first_name, last_name } = this.props;

    this.state = {
      first_name,
      last_name,
      processing: false,
      errors: {},
    };

    this.onFieldChange = this.onFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();


    this.setState({
      processing: true,
    });

    const { first_name, last_name } = this.state;

    this.props.dispatch(saveProfile({ first_name, last_name }))
      .then(
        () => this.props.onFinishEdit(),
        (error) => {
          this.setState({
            processing: false,
            errors: {}
          })
        }
      );
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
        <ProfileField name="first_name" type="text" title="Имя" value={this.state.first_name} onChange={this.onFieldChange}  error={errors.first_name} />
        <ProfileField name="last_name" type="text" title="Фамилия" value={this.state.last_name} onChange={this.onFieldChange} error={errors.last_name} />
      </ProfileFrom>
    );
  }
}

function mapStateToProps(state) {
  const { first_name, last_name } = state.profile.data;
  return {
    first_name,
    last_name
  };
}

export default connect(mapStateToProps)(PersonalDataForm);
