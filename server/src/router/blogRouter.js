const express = require('express')
const {createBlog , showBlog , getBlog , updateBlog, delBlog, blogCount} = require("../controller/blogController");
const blogRouter = express.Router()

blogRouter.route('/create-blog').post(createBlog)
blogRouter.route('/show-blog').get(showBlog)
// blogRouter.route('/create-blog').post(upload.single('imgFile') ,createBlog)
blogRouter.route('/get-blog/:b_id').get(getBlog);
blogRouter.route('/update-blog/:b_id').put(updateBlog);
blogRouter.route('/del-blog/:b_id').delete(delBlog);
blogRouter.route('/blog-count').get(blogCount);

module.exports = blogRouter;