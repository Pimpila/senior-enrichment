'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, IndexRedirect, hashHistory, onEnter} from 'react-router';



import store from './store'
// import Root from './components/Root'
import AllCampusesContainer from './containers/AllCampusesContainer';
import SingleCampusContainer from './containers/SingleCampusContainer';
import AllStudentsContainer from './containers/AllStudentsContainer';
import SingleStudentContainer from './containers/SingleStudentContainer';
import NewCampusContainer from './containers/NewCampusContainer';
import { getStudentsFromServer, getCampusesFromServer, getSelectedStudent, getSelectedCampus } from './action-creators/actions';


const loadAllCampuses = () => {
  store.dispatch(getCampusesFromServer())
}

const loadSelectedCampus = (nextRouterState) => {
  const campusId = nextRouterState.params.campusId
  store.dispatch(getSelectedCampus(campusId))
}

const loadAllStudents = () => {
  store.dispatch(getStudentsFromServer())
}

const loadSelectedStudent = (nextRouterState) => {
  const studentId = nextRouterState.params.studentId;
  store.dispatch(getSelectedStudent(studentId))
}

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" onEnter={loadAllCampuses} >
        <Route path="/campuses" component={AllCampusesContainer} />
        <Route path="/campuses/:campusId" component={SingleCampusContainer} onEnter={loadSelectedCampus} />
        <Route path="/students" component={AllStudentsContainer} onEnter={loadAllStudents} />
        <Route path="/students/:studentId" component={SingleStudentContainer} onEnter={loadSelectedStudent}/>
        <Route path={"/campuses/new-campus"} component={NewCampusContainer} />
        <IndexRedirect to="/campuses" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
