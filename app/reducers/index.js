import { combineReducers } from 'redux'

import {SET_SELECTED_STUDENT, SET_SELECTED_CAMPUS, GET_STUDENTS, GET_CAMPUSES} from '../action-creators/actions';



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
    default:
      return state;
  }
}

function getCampusesReducer(state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.allCampuses;
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
