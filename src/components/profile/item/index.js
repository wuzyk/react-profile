import React from 'react';

export default class ProfileItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: true
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
    const Form = this.props.form;

    return (
      <div className="profile-item">
        <div className="profile-item__title">{this.props.title}</div>
        <div className="profile-item__value">{this.props.value}</div>
        <a href="#" className="profile-item__edit-button" onClick={this.startEdit}>Edit</a>
        {this.state.edit && Form &&
          <div className="profile-item__form">
            <Form onFinishEdit={this.finishEdit}/>
          </div>
        }
      </div>
    );
  }
}


