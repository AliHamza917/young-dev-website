const expressAsyncHandler = require("express-async-handler");
// const multer = require("multer");
// const path = require("path");
const BlogModel = require('../model/blogModel');


// MULTER SETUP
// const storage = multer.diskStorage({
//     destination : (req , file , cb )=>{
//         cb(null , 'public/blog_images')
//     },
//     filename: (req , file , cb)=>{
//         cb(null,file.fieldname + "_" + Date.now()+path.extname(file.originalname))
//     }
// })
//
// const upload = multer({
//     storage : storage
// })

// Express route handler for creating a blog post
const createBlog = expressAsyncHandler(async (req , res) => {

    // console.log(req.file)

    const { title , description } = req.body;
    // const img = req.file;

    try {
        if (!title || !description ) {
            res.status(400);
            throw new Error("Title, description, and image are required fields");
        }

        const newBlog = await BlogModel.create({
            title,
            description,
            // img : path

        });

        res.status(200).json({ success: true, message: 'Blog created successfully', data: newBlog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to create blog', error: error.message });
    }
});

const showBlog = expressAsyncHandler( async (req ,res)=>{
    const purchaseData = await BlogModel.find()

    res.status(200).json(purchaseData)


})


const getBlog = expressAsyncHandler(async (req,res)=>{
    // const purchaseId = mongoose.Type.ObjectId(req.params.p_id);


    try{
        const blogId = req.params.b_id;
        const blog = await BlogModel.findById(blogId)
        res.status(200).json(blog)

    }catch (error){
        console.log('Error', error)
    }
})

const updateBlog = expressAsyncHandler(async (req ,res)=>{
    try
    {
        const blogId = req.params.b_id;
        const { title , description } = req.body;
        const blog = await BlogModel.findByIdAndUpdate(
            {_id:blogId },
            { title, description } ,
            {new: true}
        )
        res.status(200).json('Data Update Successfull')

    }catch (error) {

        console.log('Error Updating' , error)

    }
})

const delBlog = expressAsyncHandler(async (req ,res)=>{
   try{
        const blogId = req.params.b_id
        const blog = await BlogModel.findByIdAndDelete(blogId)

        if (!blog) {
            return res.status(404).json({ success: false, message: 'Blog not found' });
        }

        res.status(200).json({ success: true, message: 'Blog deleted successfully' });

   } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
}

})


const blogCount = expressAsyncHandler(async (req , res)=>{

    try{
        const count = await BlogModel.countDocuments()

        res.status(200).json(count)

    }catch (error){
        console.log(error)
    }
})



module.exports = { createBlog , showBlog ,getBlog , updateBlog , delBlog , blogCount};
// module.exports = { createBlog, upload };
