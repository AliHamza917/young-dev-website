const expressAsyncHandler = require("express-async-handler");
const UserModel = require("../model/userModel")

const login = expressAsyncHandler (async (req ,res) =>{
    res.status(200).json({message: 'POST'} )
})
const register = expressAsyncHandler ( async (req , res)=>{
    const {name , email , password , confirm_password} = req.body

    if (!name || !email || !password || !confirm_password){
        res.status(400);
        throw new Error("All Fileds Are Required")

    }else {
        if (password === confirm_password){
            const CreateUser = await UserModel.create({
                name , email , password
            })
            res.status(200).json({message : 'User Register : '+email + 'and password is ' +password})

        }else{
            res.status(400);
            throw new Error("Password And Confirm Password Does Not Match")
        }

     }

})

module.exports = {login ,register}