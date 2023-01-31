import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {
	const [productList, setProductList] = useState([]);
	const {newSubmitted, setNewSubmitted} = props;

	useEffect(() => {
		axios.get("http://localhost:8000/api/products")
				 .then(res => {
					 console.log(res.data.product);
					 setProductList(res.data.product)})
		console.log('fetching via get');
		if(newSubmitted) setNewSubmitted(false);
	},[setNewSubmitted,newSubmitted]);

	const deleteProduct = (id) => {
		axios.delete(`http://localhost:8000/api/products/${id}/delete`)
		     .then(res => {
					 console.log(`id is ${id}`);
			      setProductList(productList.filter((product) => product._id !== id))
				 	})
				 .catch(err => console.log('error with delete: '+err));
	}

	return (
		<div className="container">
			<h2>Products</h2>
			<ul className="list-group">
				{productList.map((item,index) =>
					<li key={index} className="list-group-item">
						<Link to={item._id}>{item.title}</Link>

						<button className="btn btn-outline-primary"
					          onClick={e => deleteProduct(item._id)}>Delete</button>
					</li>)}
			</ul>
		</div>
	);
}

export default ProductList;
