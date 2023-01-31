import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Form = props => {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		axios.get('http://localhost:8000/api/products/'+id)
		     .then(res => {
					 setTitle(res.data.product.title);
					 setPrice(res.data.product.price);
					 setDescription(res.data.product.description);
				 })
	},[id]);
	
	const submitForm = (e) => {
		e.preventDefault();

		axios.put('http://localhost:8000/api/products/'+id+'/edit',
							 {title, price, description})
				 .then(res => navigate(`/${id}`))
	}

	return (
		<div className="container">
		<form onSubmit={submitForm}>
			<h2>Edit/Update Product</h2>
			<div className="form-group">
				<label htmlFor="title">Titulo</label>
				<input className="form-control"
		           type="text" name="title"
							 value={title} onChange={e => setTitle(e.target.value)} />
			</div>
			<div className="form-group">
				<label htmlFor="price">Precio</label>
				<input className="form-control"
		           type="number" name="price"
							 value={price} onChange={e => setPrice(e.target.value)} />
			</div>
			<div className="form-group">
				<label htmlFor="description">Descripcion</label>
				<input className="form-control"
		           type="text" name="description"
							 value={description} onChange={e => setDescription(e.target.value)} />
			</div>
			<input className="btn btn-primary"
		         type="submit" value="Actualizar"/>
		</form>
		</div>
	);
}

export default Form;

