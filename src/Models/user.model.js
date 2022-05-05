const mongoose = require('mongoose');

const schema = mongoose.Schema;


const userModel = new schema(
    {
       idUser: {
           type: String,
           require: true 
        },
        comics: [
        {
              idComic: {
                  type: String,
                  require: true 
              },
        }],
        autors: [
        {
              idUser: {
                  type: String,
                  require: true 
              },
        }]
    }
);

const user = mongoose.model('User', userModel);
module.exports = user;