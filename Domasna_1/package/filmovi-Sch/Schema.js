        // mongoose se povikuva 

const mongoose = require("mongoose");
        
        // se kreira shemata
        
const FilmskaShema = new mongoose.Schema({
    title: {
        type: String,
        required: [true]
    },
    year: {
        type: Number,
        required: [true]
    },
    releasedYear: {
        type: String,
        default: 0,
    },
    ratingIMDB: {
        type: Number,
        default: 0,
    },
    metascore: {
        type:Number,
        default: 0,
    }
});


module.exports = mongoose.model("filmovi", FilmskaShema);