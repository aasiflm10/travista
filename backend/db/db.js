const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aa6125405:HA39Nzfjsk9Og8mO@cluster0.dpuej6g.mongodb.net/travista");

const destinationSchema = mongoose.Schema({
    title : String,
    description : String,
    location : String,
    imageLink : String
});

const destination = mongoose.model('destination', destinationSchema);

module.exports = {
    destination
}