'use strict'
const db = require('../db');
const router = require('express').Router();
const models = require('../db/models');
const Student = models.Student;


// get all students
router.get('/', (req, res, next) => {
  Student.findAll({include: [{all: true}]})
    .then(students => {
      res.send(students);
    })
    .catch(next);
})

// intercept any routes w/ studentId param and add campusId, studentId, and student instance to req obj:
router.param('studentId', (req, res, next, studentId) => {
  Student.findById(studentId, {include: {all: true}})
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

// get a student's campus:
router.get('/:studentId/campus', (req, res, next) => {
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


// create a student:
router.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(createdStudent => {
      res.send(createdStudent);
    })
})

// edit student's info

router.put('/:studentId', (req, res, next) => {
  const name = req.body.name || req.student.name;
  const email = req.body.email || req.student.email;

  req.student.update({
    name,
    email
  })
  .then(updatedStudent => {
    res.send(updatedStudent);
  })
  .catch(next);

})


module.exports = router;
