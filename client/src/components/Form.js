import {useState} from 'react';
import axios from 'axios';

const Form = props => {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const {setNewSubmitted} = props;
	
	const submitForm = (e) => {
		e.preventDefault();

		setNewSubmitted(true);
		console.log(title,price,description);
		axios.post('http://localhost:8000/api/products/new',
							 {title, price, description})
				 .then(res => {
					 setNewSubmitted(true);
					 setTitle("");
					 setPrice("");
					 setDescription("");
				 })
				 .catch(err => console.log(err));
	}

	return (
		<div className="container">
		<form onSubmit={submitForm}>
			<h1>Product Manager</h1>
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
		         type="submit" value="Guardar"/>
		</form>
		</div>
	);
}

export default Form;

