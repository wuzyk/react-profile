import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchProfile } from '../../actions/profile';

export class ProfileItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      edit: false
    };

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(){
    this.setState({
      edit: true
    })
  }

  render() {
    return (
      <div className="profile-item">
        <div className="profile-item__title">{this.props.title}</div>
        <div className="profile-item__value">{this.props.value}</div>
        <a href="#" className="profile-item__edit" onClick={this.handleEdit}>Edit</a>
        {this.state.edit &&
          <form>
            <input type="text" />
          </form>
        }
      </div>
    );
  }
}

class Profile extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProfile());
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <div className="profile">
        <ProfileItem name="password" title="Пароль" value="Не менялся" />
        <ProfileItem name="name" title="Персональные данные" value={`${this.props.data.last_name} ${this.props.data.first_name}`} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { profile } = state;

  return {
    ...profile
  }
};

export default connect(mapStateToProps)(Profile);