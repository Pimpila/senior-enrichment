import { combineReducers } from 'redux'

import {SET_SELECTED_STUDENT, SET_SELECTED_CAMPUS, GET_STUDENTS, GET_CAMPUSES, DELETE_STUDENT, DELETE_CAMPUS, ADD_CAMPUS} from '../action-creators/actions';



function getSelectedStudentReducer(state = {}, action) {
  switch (action.type) {
    case SET_SELECTED_STUDENT:
      return action.selectedStudent;
    default:
      return state;
  }
}


function getSelectedCampusReducer(state = {}, action) {
  switch (action.type) {
    case SET_SELECTED_CAMPUS:
      return action.selectedCampus;
    default:
      return state;
  }
}

function getStudentsReducer(state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.allStudents;
    case DELETE_STUDENT:
      const newState = state.concat([]);
      return newState.filter(student => {
        return student.id !== +action.studentId;
      })
    default:
      return state;
  }
}

function getCampusesReducer(state = [], action) {
  const newState = state.concat([]);
  switch (action.type) {
    case GET_CAMPUSES:
      return action.allCampuses;
    case DELETE_CAMPUS:
      return newState.filter(campus => {
        return campus.id !== +action.campusId;
      })
    case ADD_CAMPUS:
      return newState.push(action.campus)
    default:
      return state;
  }
}

export default combineReducers({
  selectedStudent: getSelectedStudentReducer,
  selectedCampus: getSelectedCampusReducer,
  allStudents: getStudentsReducer,
  allCampuses: getCampusesReducer
})
