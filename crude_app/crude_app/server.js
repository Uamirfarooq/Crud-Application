const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const path = require("path")
const bodyParser = require("body-parser")
const connectDB = require("./server/database/connection")
const app = express()

dotenv.config({path:'config.env'})
const port = process.env.PORT  || 1005

// log request
app.use(morgan('tiny'));

connectDB();


// parser requrst tobodyparser
app.use(bodyParser.urlencoded({extended:true}))

// set view engine 
app.set("view engine",'ejs')
// app.set("views",path.resolve(__dirname,"views/ejs"))


// local assert
app.use('/css',express.static(path.resolve(__dirname,"assert/css")))
app.use('/img',express.static(path.resolve(__dirname,"assert/img")))
app.use('/js',express.static(path.resolve(__dirname,"assert/js")))

// load routers
app.use('/',require('./server/routes/router'))



app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})