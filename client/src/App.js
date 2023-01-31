import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import ProductDetail from './views/ProductDetail';

const App = () => {
  return (
    <div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element=<Main /> />
					<Route path="/:id" element=<ProductDetail /> />
				</Routes>
			</BrowserRouter>
		</div>
  );
}

export default App;
