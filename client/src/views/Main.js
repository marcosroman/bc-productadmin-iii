import Form from '../components/Form';
import ProductList from './ProductList';
import {useState} from 'react';

const Main = (props) => {
	const [newSubmitted,setNewSubmitted] = useState(false);

	return (
		<>
			<Form newSubmitted={newSubmitted} setNewSubmitted={setNewSubmitted} />
			<hr/>
			<ProductList newSubmitted={newSubmitted} setNewSubmitted={setNewSubmitted} />
		</>
	);
}

export default Main;

