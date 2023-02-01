import './App.css';
import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom';
import Main from './views/Main';
import ProductDetail from './views/ProductDetail';
import EditProduct from './views/EditProduct';

/*
const routes = [
	{path: "/", element: <Main />},
	{path: "/:id", element: <ProductDetail />},
	{path: "/:id/edit", element: <EditProduct />}
]
*/

const App = () => {
	/*
	let element = useRoutes(routes);

	return element;
	*/
  return (
    <div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element=<Main /> />
					<Route path="/:id" element=<ProductDetail /> />
					<Route path="/:id/edit" element=<EditProduct /> />
				</Routes>
			</BrowserRouter>
		</div>
  );
}

export default App;
