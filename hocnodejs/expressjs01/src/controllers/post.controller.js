const { Post, User } = require("../models/index");
module.exports = {
  index: async (req, res) => {
    const posts = await Post.findAll({
      attributes: { exclude: "user_id" },
      include: {
        model: User,
        as: "user",
      },
    });
    res.json({ posts });
  },
  find: async (req, res) => {
    const { id } = req.params;
    const post = await Post.findByPk(id, {
      include: {
        model: User,
        as: "user",
      },
    });
    // const user = await post.getUser();
    res.json({ post });
  },
  create: async (req, res) => {
    const { post, user: userBody } = req.body;
    const [user] = await User.findOrCreate({
      where: { email: userBody.email },
      defaults: userBody,
    });
    const newPost = await user.createPost({
      ...post,
    });
    res.json({ newPost });
  },
};
