module.exports = (app) => {
  const courses = require("../controllers/courses.controller.js");
  var router = require("express").Router();

  // Create a new Course
  router.post("/", courses.create);

  // Retrieve all Courses
  router.get("/", courses.findAll);

  // Retrieve a single Course with course_number (id)
  router.get("/:course_number", courses.findOne);

  // Update a Course with id
  router.put("/:course_number",   courses.update);

  // Delete a Course with id
  router.delete("/:course_number",   courses.delete);

  app.use("/course/courses", router);
};
