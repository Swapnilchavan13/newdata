const mongoose = require("mongoose")
require("dotenv").config()
const connection =  mongoose.connect("mongodb+srv://swapnil:swapnil@cluster0.ghocflp.mongodb.net/Newdata?retryWrites=true&w=majority")

module.exports = {
    connection
}