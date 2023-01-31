const ProductsController = require('../controllers/products.controller');

module.exports = app => {
	app.post("/api/products/new", ProductsController.createProduct);
	app.get("/api/products", ProductsController.findAllProducts);
	app.get("/api/products/:id", ProductsController.findOneProduct);
	app.put("/api/products/:id/edit", ProductsController.updateProduct);
	app.delete("/api/products/:id/delete", ProductsController.deleteProduct);
}

