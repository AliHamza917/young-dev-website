var sessionHandler = (req , res , next)=>{
    if (req.session.user && req.cookie.user_sid){
        res.redirect('/dashboard')
    } else{
        next()
    }

}

module.exports = sessionHandler