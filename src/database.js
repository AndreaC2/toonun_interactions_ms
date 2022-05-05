const mongoose = require("mongoose")

mongoose.connect('mongodb://toonun_interactions_db/interactions_db')
.then(db => console.log("DB is connected to", db.connection.host))
.catch(err => console.err(err))

