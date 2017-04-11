'use strict'
const db = require('../db');
const router = require('express').Router();
const models = require('../db/models');
const Student = models.Student;


// get all students
router.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => {
      res.send(students);
    })
    .catch(next);
})

// intercept any routes w/ studentId param and add campusId, studentId, and student instance to req obj:
router.param('/:studentId', (req, res, next, studentId) => {
  Student.findById(studentId)
    .then(student => {
      // router.param puts student instance, campusId, and studentId onto the req obj.
      req.campus = student.campus; // included b/c of default scope?
      req.studentId = studentId;
      req.student = student;
      next();
    })
    .catch(next);
})

// get single student:
router.get('/:studentId', (req, res, next) => {
  res.send(req.student);
})

router.get('/:studentId/:campus', (req, res, next) => {
  res.send(req.campus)
})

// delete single student:
router.delete('/:studentId', (req, res, next) => {
  req.student.destroy()
    .then(() => {
      res.sendStatus(200);
    })
    .catch(next);
})

router.get('/:studentId/:campusId', (req, res, next) => {
  res.send(req.campusId);
})

module.exports = router;
