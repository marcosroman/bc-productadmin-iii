import {useParams} from 'react-router';
import {useState,useEffect} from 'react';
import axios from 'axios';

const ProductDetail = (props) => {
	const [product, setProduct] = useState({});
	const {id} = useParams();

	useEffect(() => {
		console.log('fetch',"http://localhost:8000/api/products/"+id);
		axios.get("http://localhost:8000/api/products/"+id)
		     .then(res => {
					 /*
					 setTitle(res.data.product.title);
					 setPrice(res.data.product.price);
					 setDescription(res.data.product.description);
					 */
					 setProduct(res.data.product);
				 });
	},[id]);

	return (
		<div className="container">
			<div className="card">
				<h2 className="card-title">{product.title}</h2>
				<div className="card-body">
					<p>Price: {product.price}</p>
					<p>Description: {product.description}</p>
				</div>
			</div>
		</div>
	);
}

export default ProductDetail;

