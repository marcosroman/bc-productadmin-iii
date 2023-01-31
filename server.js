const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

require('./server/config/mongoose.config');

app.use(cors(),
	      express.json(),
	      express.urlencoded({extended: true}));

const Routes = require('./server/routes/products.routes.js');
Routes(app);

app.listen(PORT,
	() => console.log('listening at', PORT));

