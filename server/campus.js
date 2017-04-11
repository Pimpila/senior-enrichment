'use strict'
const db = require('../db'); // even though we don't use db, requiring it runs the file and syncs the db.
const router = require('express').Router();
const models = require('../db/models'); // requring it so associations are set up.
const Campus = models.Campus; // or db.model('campus') (pass in the string you used in db.define but you might not get your associations)


router.get('/', (req, res, next) => {
	Campus.findAll({include: [{all: true}]})
  // Campus.findAll()
		.then(campuses => {
      if (!campuses) {
        const error = new Error('No campuses found');
        next(error)
      }
			res.send(campuses);
		})
		.catch(next);

})


// intercept any url params w/ campus id and add the campus instance, the campus id, and the students to subsequent routes w/ same url params
router.param('campusId', (req, res, next, campusId) => {
  Campus.findById(campusId, {include: {all: true}})
		.then(campus => {
			req.campus = campus;
      req.campusId = campusId;
      req.students = campus.students;
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
  console.log('req.campus', req.campus)
  if (req.body.name && req.body.image) {
    req.campus.update({
      name: req.body.name,
      image: req.body.image
    })
    .then(updatedChapter => {
      res.send(updatedChapter);
    })
    .catch(next);
  }
  else if (req.body.name) {
    req.campus.update({
      name: req.body.name
    })
    .then(updatedChapter => {
      res.send(updatedChapter);
    })
    .catch(next);
  }
  else if (req.body.image) {
    req.campus.update({
      image: req.body.image
    })
    .then(updatedChapter => {
      res.send(updatedChapter);
    })
    .catch(next);
  }

})

// delete a campus:
router.delete('/:campusId', (req, res, next) => {
  req.campus.destroy()
    .then(() => {
      res.sendStatus(200);
    })
    .catch(next);
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
