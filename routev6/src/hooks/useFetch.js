import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState('');
	const [loading, setloading] = useState('');

	useEffect(() => {
		setloading(true);
		fetch(url)
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((e) => setError('Servidor no encontrado'))
			.finally(() => setloading(false));
	}, [url]);
	return { data, error, loading };
};
