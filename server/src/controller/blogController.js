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


const updateBlog = expressAsyncHandler(async (req,res)=>{
    // const purchaseId = mongoose.Type.ObjectId(req.params.p_id);

    try{
        const purchase = await BlogModel.findById(req.params.b_id)
        res.status(200).json(purchase)

    }catch (error){
        console.log('Error', error)
    }
})


module.exports = { createBlog , showBlog ,updateBlog};
// module.exports = { createBlog, upload };
