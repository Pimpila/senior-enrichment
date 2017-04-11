import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewCampus from '../components/NewCampus';
import { addNewCampusToServer } from '../action-creators/actions';
import store from '../store';

export default class NewCampusContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      image: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleImageChange(event) {
    this.setState({
      image: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(addNewCampusToServer(this.state))
  }

  render() {
    return (
      <NewCampus handleNameChange={this.handleNameChange}
      handleImageChange={this.handleImageChange}
      handleSubmit={this.handleSubmit} />
    )
  }

}
