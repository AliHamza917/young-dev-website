const express = require('express')
const {createBlog , showBlog , getBlog , updateBlog} = require("../controller/blogController");
const blogRouter = express.Router()

blogRouter.route('/create-blog').post(createBlog)
blogRouter.route('/show-blog').get(showBlog)
// blogRouter.route('/create-blog').post(upload.single('imgFile') ,createBlog)
blogRouter.route('/get-blog/:b_id').get(getBlog);
blogRouter.route('/update-blog/:b_id').put(updateBlog);


module.exports = blogRouter;