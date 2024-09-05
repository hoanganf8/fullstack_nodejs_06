const { User } = require("../models/index");
module.exports = {
  addCourse: async (req, res) => {
    const { id } = req.params;
    const { courses } = req.body;
    const user = await User.findByPk(id);
    await user.addCourses(courses);
    res.json({ user });
  },
  updateCourse: async (req, res) => {
    const { id } = req.params;
    const { courses } = req.body;
    const user = await User.findByPk(id);
    await user.setCourses(courses);
    res.json({ user });
  },
};
