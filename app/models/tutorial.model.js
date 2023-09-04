module.exports = (sequelize, Sequelize) => {
  const Courses = sequelize.define("courses", {
    department: {
      type: Sequelize.STRING,
    },
    course_number: {
      type: Sequelize.STRING,
    },
    course_level: {
      type: Sequelize.INT,
    },
    credit_hours: {
      type: Sequelize.INT,
    },
    course_name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
  });
  return Tutorial;
};
