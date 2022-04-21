import Register from './Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';



function App() {
	return (
		<main className="App">
			<Router>
				<Routes>
					<Route path="/" exact element={<Register />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;
