import React from 'react';

import './index.css';

export default class ProfileItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    };

    this.startEdit = this.setEdit.bind(this, true);
    this.finishEdit = this.setEdit.bind(this, false);
  }

  setEdit(edit) {
    this.setState({
      edit,
    });
  }

  render() {
    const { title, value } = this.props;
    const Form = this.props.form;
    const edit = this.state.edit;

    return (
      <div 
        className={'profile-item' + (!value && !edit ? ' profile-item--empty' : '')} 
      >
        <div className="profile-item__header" onClick={this.startEdit}>
          <div className="profile-item__title">{title}</div>
          {!edit && <div className="profile-item__value">{value}</div>}
          {!edit && value && <a href="#" className="profile-item__edit-button" onClick={this.startEdit}>Edit</a>}
        </div>
        {edit && Form &&
          <div className="profile-item__form">
            <Form onFinishEdit={this.finishEdit}/>
          </div>
        }
      </div>
    );
  }
}


