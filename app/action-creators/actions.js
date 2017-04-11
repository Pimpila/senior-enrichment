'use strict';

import axios from 'axios';


export const SET_SELECTED_STUDENT = 'SET_SELECTED_STUDENT';
export const SET_SELECTED_CAMPUS = 'SET_SELECTED_CAMPUS';
export const GET_STUDENTS = 'GET_STUDENTS';
export const GET_CAMPUSES = 'GET_CAMPUSES';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const DELETE_CAMPUS = 'DELETE_CAMPUS';
export const ADD_CAMPUS = 'ADD_CAMPUS';


// synchronous action creators:
export const setSelectedStudent = (student) => {
  return {
    type: SET_SELECTED_STUDENT,
    selectedStudent: student
  }
}

export const setSelectedCampus = (campus) => {
  return {
    type: SET_SELECTED_CAMPUS,
    selectedCampus: campus
  }
}

export const getCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    allCampuses: campuses
  }
}

export const getStudents = (students) => {
  return {
    type: GET_STUDENTS,
    allStudents: students
  }
}

export const deleteStudent = (studentId) => {
  return {
    type: DELETE_STUDENT,
    studentId
  }
}

export const deleteCampus = (campusId) => {
  return {
    type: DELETE_CAMPUS,
    campusId
  }
}

export const addCampus = (campus) => {
  return {
    type: ADD_CAMPUS,
    name: campus.name,
    image: campus.image
  }
}


// thunks:

export const getSelectedStudent = (studentId) => {
  return (dispatch) => {
    axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => {
        dispatch(setSelectedStudent(student))
      })
      .catch(err => console.error(err));
  }
}

export const getStudentsFromServer = () => {
  return (dispatch) => {
    axios.get(`/api/students/`)
      .then(res => res.data)
      .then(students => {
        dispatch(getStudents(students))
      })
      .catch(err => console.error(err));
  }
}

export const getSelectedCampus = (campusId) => {
  return (dispatch) => {
    axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => {
        dispatch(setSelectedCampus(campus))
      })
      .catch(err => console.error(err));
  }
}

export const getCampusesFromServer = () => {
  return (dispatch) => {
    axios.get('/api/campuses/')
      .then(res => res.data)
      .then(campuses => {
        dispatch(getCampuses(campuses))
      })
      .catch(err => console.error(err));
  }
}

export const deleteStudentFromServer = (studentId) => {
  return (dispatch) => {
    axios.delete(`/api/students/${studentId}`)
      .then(res => {
        dispatch(deleteStudent(studentId))
      })
      .catch(error => console.error(error));
  }
}

export const deleteCampusFromServer = (campusId) => {
  return (dispatch) => {
    axios.delete(`/api/campuses/${campusId}`)
      .then(res => {
        dispatch(deleteCampus(campusId))
      })
      .catch(error => console.log(error));
  }
}

export const addNewCampusToServer = (campus) => {
  return (dispatch) => {
    axios.post('/', {
      name: campus.name,
      image: campus.image
    })
      .then(res => res.data)
      .then(newCampus => {
        dispatch(addCampus(newCampus))
      })
  }
}
