import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Blog from '../src/routes/Blog';
import Contacto from '../src/routes/Contacto';
import NavBar from './components/NavBar';
import NoEncontrada from './routes/NoEncontrada';
import Post from './routes/Post';

ReactDOM.render(
	<BrowserRouter>
		<NavBar />
		<Routes>
			<Route path="/" element={<App />}></Route>
			<Route path="blog" element={<Blog />}></Route>
			<Route path="blog/:id" element={<Post />}></Route>
			<Route path="contacto" element={<Contacto />}></Route>
			<Route path="*" element={<NoEncontrada />}></Route>
		</Routes>
	</BrowserRouter>,
	document.getElementById('root')
);
