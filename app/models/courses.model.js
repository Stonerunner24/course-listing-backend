module.exports = (sequelize, Sequelize) => {
  const Courses = sequelize.define("courses", {
    department: {
      type: Sequelize.STRING,
    },
    course_number: {
      type: Sequelize.STRING,
      primaryKey: true,
      alowNull: false,
    },
    course_level: {
      type: Sequelize.INTEGER,
    },
    credit_hours: {
      type: Sequelize.INTEGER,
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
