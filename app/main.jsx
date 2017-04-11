'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, IndexRedirect, hashHistory, onEnter} from 'react-router';



import store from './store'
// import Root from './components/Root'
import AllCampusesContainer from './containers/AllCampusesContainer';
import SingleCampusContainer from './containers/SingleCampusContainer';
import { getStudentsFromServer, getCampusesFromServer, getSelectedStudent, getSelectedCampus } from './action-creators/actions';


const loadAllCampuses = () => {
  store.dispatch(getCampusesFromServer())
}

const loadSelectedCampus = (nextRouterState) => {
  const campusId = nextRouterState.params.campusId
  store.dispatch(getSelectedCampus(campusId))
}

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" onEnter={loadAllCampuses} >
        <Route path="/campuses" component={AllCampusesContainer} />
        <Route path="/campuses/:campusId" component={SingleCampusContainer} onEnter={loadSelectedCampus} />
        <IndexRedirect to="/campuses" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
