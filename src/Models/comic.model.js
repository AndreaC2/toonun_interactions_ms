const mongoose = require('mongoose');

const schema = mongoose.Schema;

const comicModel = new schema(
    {
       idComic: 
       {
           type: String,
           require: true 
       },
       comments: [
           { 
            idUser: 
            {
                type: String,
                require: true 
            },
            comment :
            {
                type: String,
                require: true 
            }
           }
        ]
    }
);

const comic = mongoose.model('comic', comicModel);
module.exports = comic;
