const Product = require('../models/products.model.js');

module.exports = {
	createProduct:
	  (req, res) => {
			Product.create(req.body)
						 .then(product => res.json({product}))
						 .catch(error => res.json({message: "product not created",
							                         error: error}))
		},
	
	findAllProducts:
		(req, res) => {
			Product.find()
			       .then(product => res.json({product}))
			       .catch(error => res.json({message: "couldn't list all products",
							                         error: error}))
		},
	
	findOneProduct:
		(req, res) => {
			Product.findOne({_id: req.params.id})
			       .then(product => res.json({product}))
			       .catch(error => res.json({message: "couldnt find product "+req.params.id,
						                           error}));
		}
};

