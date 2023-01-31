const mongoose = require('mongoose');

mongoose.set('strictQuery','false');

mongoose.connect('mongodb://127.0.0.1/productdb')
        .then(() => console.log("connected"))
        .catch(err => console.log("couldn't connect: ", err));
