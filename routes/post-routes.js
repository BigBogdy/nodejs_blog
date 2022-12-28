const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  getPost,
  deletePost,
  getEditPost,
  editPost,
  addPost,
  getAddPost,
} = require('../controllers/post-controller');

router.get('/', getAllPosts);

router.get('/posts/:id', getPost);

router.get('/edit/:id', getEditPost);

router.put('/edit/:id', editPost);

router.delete('/posts/:id', deletePost);

router.get('/add-post', getAddPost);

router.post('/add-post', addPost);

module.exports = router;
