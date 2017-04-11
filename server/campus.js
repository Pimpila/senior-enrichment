'use strict'
const db = require('../db');
const router = require('express').Router();
const models = require('../db/models');
const Campus = models.Campus;

router.get('/', (req, res, next) => { // in react router, set index route to show this view.
	Campus.findAll()
		.then(campuses => {
			res.send(campuses);
		})
		.catch(next);
})


// intercept any url params w/ campus id and add the campus instance, the campus id, and the students to subsequent routes w/ same url params
router.param('/:campusId', (req, res, next, campusId) => {
	Campus.findById(campusId)
		.then(campus => {
			req.campus = campus;
      req.campusId = campusId;
      req.students = campus.students; // ?? does this work b/c i have a default scope in campus model definition?
      next();
    })
		.catch(next);
})

// get a single campus
router.get('/:campusId', (req, res, next) => {
  res.send(req.campus);
})

// get all students for a single campus
router.get('/:campusId/students', (req, res, next) => {
  res.send(req.students);
})

// edit a campus's info:
router.put('/:campusId', (req, res, next) => {
  // look into addAssociation,etc for hasMany relationships...
  res.send('here for now')
})

// add a campus:
router.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => {
      res.send(campus);
    })
    .catch(next);
})




module.exports = router;
