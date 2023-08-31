const mongoose = require("mongoose")

var schema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },
    gender:String,
    status:String
})
const userdb = mongoose.model('userdb',schema)

module.exports= userdb