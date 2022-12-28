const Post = require('../models/post');
const createPath = require('../helpers/create-path');

const handleError = (res, error) => {
  console.log(error);
  res.render(createPath('error'));
};

const getAllPosts = (req, res) => {
  Post.find()
    .sort({ createdAt: -1 })
    .then((posts) => res.render(createPath('index'), { posts }))
    .catch((error) => handleError(res, error));
};

const getPost = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.render(createPath('post'), { post }))
    .catch((error) => handleError(res, error));
};

const deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => handleError(res, error));
};

const getEditPost = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.render(createPath('edit-post'), { post }))
    .catch((error) => handleError(res, error));
};

const editPost = (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;

  Post.findByIdAndUpdate(id, { title, content })
    .then((result) => res.redirect(`/posts/${id}`))
    .catch((error) => handleError(res, error));
};

const addPost = (req, res) => {
  const { title, content } = req.body;
  const post = new Post({
    title,
    content,
  });
  post
    .save()
    .then((result) => res.redirect('/'))
    .catch((error) => handleError(res, error));
};

const getAddPost = (req, res) => {
  res.render(createPath('add-post'));
};

module.exports = {
  getAllPosts,
  getPost,
  deletePost,
  getEditPost,
  editPost,
  addPost,
  getAddPost,
};
