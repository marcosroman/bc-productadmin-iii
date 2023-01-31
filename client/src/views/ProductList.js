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
	},[newSubmitted]);

	return (
		<div className="container">
			<h2>Products</h2>
			<ul className="list-group">
				{productList.map((item,index) =>
					<li key={index} className="list-group-item">
						<Link to={item._id}>{item.title}</Link>
					</li>)}
			</ul>
		</div>
	);
}

export default ProductList;
