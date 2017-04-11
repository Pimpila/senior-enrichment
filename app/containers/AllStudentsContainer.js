import { connect } from 'react-redux';
import React, {Component} from 'react';
import axios from 'axios';
import AllStudents from '../components/AllStudents';
import { deleteStudentFromServer } from '../action-creators/actions';


const mapState = (state) => ({
  allStudents: state.allStudents
});

const mapDispatch = (dispatch) => ({
  deleteStudent: (studentId) => {
    dispatch(deleteStudentFromServer(studentId));
  }
});

export default connect(mapState, mapDispatch)(AllStudents)

