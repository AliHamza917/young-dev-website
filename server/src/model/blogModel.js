const mongoose =require('mongoose')

const blogSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description :{
      type:String,
      required: true,
    },
    img:{
        type:String,

    },

    user_id:{
        type: String

    }

},{
    timestamps: true
})

module.exports = mongoose.model('Blog' , blogSchema)