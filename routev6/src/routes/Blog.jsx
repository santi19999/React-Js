import { Link, useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Blog = () => {
	let [searchParams, setSearchParams] = useSearchParams();

	let { data, error, loading } = useFetch(
		'https://jsonplaceholder.typicode.com/posts'
	);
	if (loading) {
		return <h2>Loading.....</h2>;
	}

	if (error !== '') {
		console.log(error);
		return <h2>{error}</h2>;
	}
	const handleChange = (e) => {
		let filter = e.target.value;
		if (filter) {
			setSearchParams({ filter });
		} else {
			setSearchParams({});
		}
	};
	return (
		<div>
			<h1>Blog</h1>
			<input
				type="text"
				className="form-control mb-2"
				value={searchParams.get('filter') || ''}
				onChange={handleChange}
			/>
			{data
				.filter((item) => {
					let filter = searchParams.get('filter');
					if (!filter) return true;
					let name = item.title.toLowerCase();
					return name.startsWith(filter.toLowerCase());
				})
				.map((item) => (
					<h4 key={item.id}>
						<Link to={`/blog/${item.id}`}>
							{item.id} - {item.title}
						</Link>
					</h4>
				))}
		</div>
	);
};

export default Blog;
