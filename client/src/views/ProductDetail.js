import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetail = (props) => {
	const [product, setProduct] = useState({});
	const {id} = useParams(); 
	const navigate = useNavigate();

	useEffect(() => {
		axios.get("http://localhost:8000/api/products/"+id)
		     .then(res => {setProduct(res.data.product)});
	},[id]);

	const editProduct = () => {
		navigate(`/${id}/edit`);
	}

	const deleteProduct = () => {
		axios.delete(`http://localhost:8000/api/products/${id}/delete`)
		     .then(res => navigate('/'))
				 .catch(err => console.log('error with delete: '+err));
	}

	return (
		<div style={{className:"container",
								 display: "flex",
				         padding: "10px 10px",
								 justifyContent: "center",
                 alignItems: "center"}}>
			<div className="card" style={{padding: "10px 10px"}}>
				<h2 className="card-title">{product.title}</h2>
				<div className="card-body">
					<p>Price: {product.price}</p>
					<p>Description: {product.description}</p>
					<button className="btn btn-outline-secondary"
						      onClick={editProduct}>Edit</button>
					<button className="btn btn-outline-primary"
						      onClick={deleteProduct}>Delete</button>
				</div>
			</div>
		</div>
	);
}

export default ProductDetail;

