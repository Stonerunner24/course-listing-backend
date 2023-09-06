const db = require("../models");
const Courses = db.courses;
const Op = db.Sequelize.Op;
// Create and Save a new Course
exports.create = (req, res) => {
  // Valcourse_numberate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a Course object
  const Course = {
    department: req.body.department,
    course_number: req.body.course_number,
    course_level: req.body.course_level,
    credit_hours: req.body.credit_hours,
    course_name: req.body.course_name,
    description: req.body.description,
  };
  // Save Course object in the database
   Courses.create(Course)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the  Course.",
      });
    });
};
// Retrieve all Courses from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
   Courses.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving  Courses.",
      });
    });
};

// Find a single Course with an course_number
exports.findOne = (req, res) => {
  const course_number = req.params.course_number;
   Courses.findByPk(course_number)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find  Course with course_number=${course_number}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving  Courses with course_number=" + course_number,
      });
    });
};
// Update a Course by the course_number in the request
exports.update = (req, res) => {
  const course_number = req.params.course_number;
   Courses.update(req.body, {
    where: { course_number: course_number },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: " Course was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update  Course with course_number=${course_number}. Maybe  Course was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating  Course with course_number=" + course_number,
      });
    });
};
// Delete a Course with the specified course_number in the request
exports.delete = (req, res) => {
  const course_number = req.params.course_number;
   Courses.destroy({
    where: { course_number: course_number },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: " Course was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete  Course with course_number=${course_number}. Maybe  Course was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Could not delete  Course with course_number=" + course_number,
      });
    });
};
