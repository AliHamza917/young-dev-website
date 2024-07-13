const express = require("express")
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler')
const authRouter = require("./router/authRouter")
const mongoose = require("mongoose");
const blogRouter = require("./router/blogRouter");

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
app.use(express.json());

app.use('/api/auth',authRouter)
app.use('/api/blogs',blogRouter)
app.use(errorHandler)
mongoose.connect('mongodb+srv://AliHamza:Abb5785@apiexpress.zmmdfkh.mongodb.net/young-dev-db?retryWrites=true&w=majority&appName=ApiExpress')
    .then(()=>{
        console.log("DB Connection SucessFull")
        app.listen(port, () => {
            console.log(`Server run on port ${port}`)
        })

    })
    .catch((err)=>{

        console.error(err);
    })
