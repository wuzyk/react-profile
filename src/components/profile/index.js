import React from 'react';
import { connect } from 'react-redux';

import { fetchProfile } from './actions';
import ProfileItem from './item/index';
import PasswordForm from './forms/password/index';
import PersonalDataForm from './forms/personalData/index';

export class Profile extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProfile);
  }

  render() {
    const { first_name, last_name } = this.props.data;

    return (
      <div className="profile">
        <ProfileItem title="Пароль" value="Не менялся" form={PasswordForm}/>
        <ProfileItem title="Персональные данные" value={(first_name || last_name) && `${first_name} ${last_name}`} form={PersonalDataForm} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.profile
  };
}

export default connect(mapStateToProps)(Profile);
