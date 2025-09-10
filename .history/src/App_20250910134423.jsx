function App() {
	return (
		<div>
			<h1>My blog</h1>
			<BlogEntry />
			<BlogEntry />
			<BlogEntry />
		</div>
	);
}

function BlogEntry() {
	return (
		<div>
			<h2> "GETTING started"</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur
				adipisicing elit. Maxime, nostrum sed facilis
				eos officia inventore minus? Hic maiores
				laboriosam esse doloremque eveniet nesciunt,
				illum ipsum optio aspernatur tempora sequi
				fugiat.
			</p>
			<button>Click here!</button>
		</div>
	);
}

export default App;
